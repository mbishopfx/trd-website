/**
 * TRD Analytics Tracker - Main Script
 * True Rank Digital - Analytics & Performance Tracking
 * Version: 1.0
 */

(function() {
  'use strict';
  
  // ==========================================
  // TRD ANALYTICS CORE
  // ==========================================
  
  const TRDAnalytics = {
    config: {
      scriptKey: '',
      pythonBackend: '',
      batchSize: 10,
      flushInterval: 5000, // 5 seconds
      maxRetries: 3
    },
    
    eventQueue: [],
    visitorId: null,
    sessionId: null,
    pageLoadTime: Date.now(),
    
    // ==========================================
    // INITIALIZATION
    // ==========================================
    init: function(options) {
      this.config.scriptKey = options.scriptKey || '';
      this.config.pythonBackend = options.pythonBackend || '';
      
      // Initialize visitor and session IDs
      this.visitorId = this.getOrCreateVisitorId();
      this.sessionId = this.getOrCreateSessionId();
      
      // Set up event listeners
      this.setupEventListeners();
      
      // Start batch processing
      this.startBatchProcessor();
      
      // Track initial pageview
      this.trackPageview();
      
      console.log('[TRD Analytics] Initialized successfully');
    },
    
    // ==========================================
    // VISITOR & SESSION MANAGEMENT
    // ==========================================
    getOrCreateVisitorId: function() {
      let visitorId = this.getCookie('trd_visitor_id');
      
      if (!visitorId) {
        visitorId = this.generateId('visitor');
        this.setCookie('trd_visitor_id', visitorId, 365); // 1 year
      }
      
      return visitorId;
    },
    
    getOrCreateSessionId: function() {
      let sessionId = sessionStorage.getItem('trd_session_id');
      
      if (!sessionId) {
        sessionId = this.generateId('session');
        sessionStorage.setItem('trd_session_id', sessionId);
      }
      
      return sessionId;
    },
    
    generateId: function(prefix) {
      const timestamp = Date.now();
      const random = Math.random().toString(36).substring(2, 15);
      return `${prefix}_${timestamp}_${random}`;
    },
    
    // ==========================================
    // COOKIE MANAGEMENT
    // ==========================================
    setCookie: function(name, value, days) {
      const expires = new Date();
      expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
      document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
    },
    
    getCookie: function(name) {
      const nameEQ = name + '=';
      const ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    },
    
    // ==========================================
    // EVENT TRACKING
    // ==========================================
    track: function(event) {
      const enrichedEvent = {
        ...event,
        script_key: this.config.scriptKey,
        visitor_id: this.visitorId,
        session_id: this.sessionId,
        page_url: event.page_url || window.location.href,
        referrer: document.referrer || 'direct',
        timestamp: new Date().toISOString(),
        user_agent: navigator.userAgent,
        screen_width: window.screen.width,
        screen_height: window.screen.height,
        viewport_width: window.innerWidth,
        viewport_height: window.innerHeight,
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      };
      
      this.eventQueue.push(enrichedEvent);
      
      // Update last activity timestamp
      sessionStorage.setItem('trd_last_activity', Date.now().toString());
      
      // Flush if queue is full
      if (this.eventQueue.length >= this.config.batchSize) {
        this.flushEvents();
      }
    },
    
    trackPageview: function() {
      this.track({
        event_type: 'pageview',
        page_title: document.title,
        page_url: window.location.href,
        page_path: window.location.pathname
      });
    },
    
    trackClick: function(element, data = {}) {
      this.track({
        event_type: 'click',
        element_type: element.tagName,
        element_id: element.id || null,
        element_class: element.className || null,
        element_text: element.innerText?.substring(0, 100) || null,
        ...data
      });
    },
    
    trackScroll: function(scrollDepth) {
      this.track({
        event_type: 'scroll',
        scroll_depth: scrollDepth,
        scroll_position: window.scrollY
      });
    },
    
    trackFormSubmit: function(form, data = {}) {
      this.track({
        event_type: 'form_submit',
        form_id: form.id || null,
        form_name: form.name || null,
        form_action: form.action || null,
        ...data
      });
    },
    
    trackPageExit: function() {
      const timeOnPage = Math.round((Date.now() - this.pageLoadTime) / 1000);
      
      this.track({
        event_type: 'page_exit',
        time_on_page: timeOnPage
      });
      
      // Force immediate flush on page exit
      this.flushEvents(true);
    },
    
    // ==========================================
    // EVENT LISTENERS
    // ==========================================
    setupEventListeners: function() {
      // Click tracking
      document.addEventListener('click', (e) => {
        const target = e.target;
        
        // Track link clicks
        if (target.tagName === 'A') {
          this.trackClick(target, {
            link_url: target.href,
            link_text: target.innerText?.substring(0, 100)
          });
        }
        
        // Track button clicks
        if (target.tagName === 'BUTTON' || target.getAttribute('role') === 'button') {
          this.trackClick(target);
        }
      });
      
      // Scroll depth tracking
      let maxScrollDepth = 0;
      let scrollTimeout;
      
      window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        
        scrollTimeout = setTimeout(() => {
          const scrollDepth = Math.round(
            (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100
          );
          
          // Track every 25% milestone
          if (scrollDepth > maxScrollDepth && scrollDepth % 25 === 0) {
            maxScrollDepth = scrollDepth;
            this.trackScroll(scrollDepth);
          }
        }, 500);
      });
      
      // Form submission tracking
      document.addEventListener('submit', (e) => {
        if (e.target.tagName === 'FORM') {
          this.trackFormSubmit(e.target);
        }
      });
      
      // Page exit tracking
      window.addEventListener('beforeunload', () => {
        this.trackPageExit();
      });
      
      // Visibility change tracking
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          this.trackPageExit();
        }
      });
    },
    
    // ==========================================
    // BATCH PROCESSING
    // ==========================================
    startBatchProcessor: function() {
      setInterval(() => {
        if (this.eventQueue.length > 0) {
          this.flushEvents();
        }
      }, this.config.flushInterval);
    },
    
    flushEvents: function(synchronous = false) {
      if (this.eventQueue.length === 0) return;
      
      const events = [...this.eventQueue];
      this.eventQueue = [];
      
      const payload = {
        events: events,
        script_key: this.config.scriptKey
      };
      
      const endpoint = `${this.config.pythonBackend}/api/tracking/batch`;
      
      if (synchronous) {
        // Use synchronous XHR for page exit events
        const xhr = new XMLHttpRequest();
        xhr.open('POST', endpoint, false);
        xhr.setRequestHeader('Content-Type', 'application/json');
        try {
          xhr.send(JSON.stringify(payload));
        } catch (e) {
          console.error('[TRD Analytics] Failed to send exit events:', e);
        }
      } else {
        // Use fetch for regular batch sends
        fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload),
          keepalive: true
        })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          console.log('[TRD Analytics] Events sent successfully:', data);
        })
        .catch(error => {
          console.error('[TRD Analytics] Failed to send events:', error);
          // Re-queue events on failure
          this.eventQueue.unshift(...events);
        });
      }
    }
  };
  
  // ==========================================
  // EXPORT TO WINDOW
  // ==========================================
  window.TRDAnalytics = TRDAnalytics;
  
})();

