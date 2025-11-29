'use client';

import Script from 'next/script';

export default function TRDAnalytics() {
  return (
    <Script
      id="trd-analytics-v2"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
(function() {
  'use strict';
  
  // ==========================================
  // CONFIGURATION
  // ==========================================
  const CONFIG = {
    scriptKey: 'trd_truerankdigital_2025',
    pythonBackend: 'https://trd-python-platform-production.up.railway.app',
    batchInterval: 10000, // 10 seconds
    captureScrollDepth: true,
    captureFormInteractions: true,
    captureRageClicks: true,
    enableDebug: true
  };
  
  // ==========================================
  // INITIALIZATION
  // ==========================================
  let sessionId = sessionStorage.getItem('trd_session_id') || 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 11);
  let visitorId = getCookie('trd_visitor_id') || 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 11);
  let eventQueue = [];
  let scrollDepth = 0;
  let maxScrollDepth = 0;
  let clickTimes = [];
  
  sessionStorage.setItem('trd_session_id', sessionId);
  setCookie('trd_visitor_id', visitorId, 365);
  
  console.log('%c╔════════════════════════════════════════════════════════════╗', 'color: #8b5cf6; font-weight: bold;');
  console.log('%c║   TRD Analytics v2.0 - Advanced Tracking Enabled          ║', 'color: #8b5cf6; font-weight: bold;');
  console.log('%c║   🍪 Cookies | 🎯 UTM | 🔍 Fingerprinting | 😡 Rage Clicks ║', 'color: #8b5cf6; font-weight: bold;');
  console.log('%c╚════════════════════════════════════════════════════════════╝', 'color: #8b5cf6; font-weight: bold;');
  console.log('[TRD Analytics] ✅ Script Key:', CONFIG.scriptKey);
  console.log('[TRD Analytics] 👤 Visitor ID:', visitorId.substring(0, 20) + '...');
  console.log('[TRD Analytics] 📊 Session ID:', sessionId.substring(0, 20) + '...');
  
  // ==========================================
  // TRACK INITIAL PAGE VIEW
  // ==========================================
  trackPageView();
  
  // ==========================================
  // SPA NAVIGATION TRACKING
  // ==========================================
  let lastUrl = window.location.href;
  const observer = new MutationObserver(function() {
    if (window.location.href !== lastUrl) {
      lastUrl = window.location.href;
      trackPageView();
      console.log('[TRD Analytics] 🔄 Navigation detected:', lastUrl);
    }
  });
  observer.observe(document.querySelector('body'), { childList: true, subtree: true });
  
  window.addEventListener('popstate', function() { trackPageView(); });
  const pushState = history.pushState;
  history.pushState = function() {
    pushState.apply(history, arguments);
    trackPageView();
  };
  
  // ==========================================
  // TRACK PAGE VIEW WITH ADVANCED DATA
  // ==========================================
  function trackPageView() {
    const enrichedData = {
      event_type: 'pageview',
      page_url: window.location.href,
      page_title: document.title,
      referrer: document.referrer,
      timestamp: new Date().toISOString(),
      cookies: getAllCookies(),
      utm_params: getUTMParameters(),
      browser_capabilities: getBrowserCapabilities(),
      device_fingerprint: getDeviceFingerprint(),
      network_info: getNetworkInfo(),
      screen_orientation: getScreenOrientation(),
      viewport_info: getViewportInfo()
    };
    
    eventQueue.push(enrichedData);
    if (CONFIG.enableDebug) {
      console.log('[TRD Analytics] 📄 Pageview:', window.location.href);
      console.log('[TRD Analytics] 🍪 Cookies:', Object.keys(enrichedData.cookies).length);
      if (enrichedData.utm_params.utm_source) {
        console.log('[TRD Analytics] 🎯 UTM Source:', enrichedData.utm_params.utm_source);
      }
    }
  }
  
  // ==========================================
  // COOKIE TRACKING
  // ==========================================
  function getAllCookies() {
    const cookies = {};
    const cookieString = document.cookie;
    
    if (cookieString) {
      cookieString.split(';').forEach(function(cookie) {
        const parts = cookie.trim().split('=');
        const name = parts[0];
        const value = parts[1];
        if (name) cookies[name] = value || '';
      });
    }
    
    return cookies;
  }
  
  // ==========================================
  // UTM PARAMETER EXTRACTION
  // ==========================================
  function getUTMParameters() {
    const params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get('utm_source') || null,
      utm_medium: params.get('utm_medium') || null,
      utm_campaign: params.get('utm_campaign') || null,
      utm_term: params.get('utm_term') || null,
      utm_content: params.get('utm_content') || null,
      gclid: params.get('gclid') || null,
      fbclid: params.get('fbclid') || null,
      msclkid: params.get('msclkid') || null
    };
  }
  
  // ==========================================
  // BROWSER CAPABILITIES
  // ==========================================
  function getBrowserCapabilities() {
    return {
      cookies_enabled: navigator.cookieEnabled,
      local_storage: typeof(Storage) !== 'undefined',
      session_storage: typeof(sessionStorage) !== 'undefined',
      do_not_track: navigator.doNotTrack || window.doNotTrack || null,
      javascript_enabled: true,
      online: navigator.onLine,
      touch_support: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
      webgl_support: !!document.createElement('canvas').getContext('webgl'),
      platform: navigator.platform,
      hardware_concurrency: navigator.hardwareConcurrency || null,
      device_memory: navigator.deviceMemory || null
    };
  }
  
  // ==========================================
  // DEVICE FINGERPRINTING
  // ==========================================
  function getDeviceFingerprint() {
    const ua = navigator.userAgent;
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl');
    
    return {
      user_agent: ua,
      browser: getBrowserName(ua),
      browser_version: getBrowserVersion(ua),
      os: getOS(ua),
      device_type: getDeviceType(ua),
      vendor: navigator.vendor || null,
      app_name: navigator.appName || null,
      app_version: navigator.appVersion || null,
      language: navigator.language,
      languages: navigator.languages || [],
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      timezone_offset: new Date().getTimezoneOffset(),
      color_depth: screen.colorDepth,
      pixel_depth: screen.pixelDepth,
      webgl_vendor: gl ? gl.getParameter(gl.VENDOR) : null,
      webgl_renderer: gl ? gl.getParameter(gl.RENDERER) : null
    };
  }
  
  // ==========================================
  // NETWORK INFORMATION
  // ==========================================
  function getNetworkInfo() {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    
    if (connection) {
      return {
        effective_type: connection.effectiveType || null,
        downlink: connection.downlink || null,
        rtt: connection.rtt || null,
        save_data: connection.saveData || false,
        type: connection.type || null
      };
    }
    
    return null;
  }
  
  // ==========================================
  // SCREEN & VIEWPORT INFO
  // ==========================================
  function getScreenOrientation() {
    const orientation = screen.orientation || {};
    return {
      type: orientation.type || null,
      angle: orientation.angle || 0,
      is_portrait: window.innerHeight > window.innerWidth
    };
  }
  
  function getViewportInfo() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      screen_width: screen.width,
      screen_height: screen.height,
      available_width: screen.availWidth,
      available_height: screen.availHeight,
      pixel_ratio: window.devicePixelRatio || 1
    };
  }
  
  // ==========================================
  // HELPER FUNCTIONS
  // ==========================================
  function getBrowserName(ua) {
    if (ua.includes('Chrome') && !ua.includes('Edg')) return 'Chrome';
    if (ua.includes('Safari') && !ua.includes('Chrome')) return 'Safari';
    if (ua.includes('Firefox')) return 'Firefox';
    if (ua.includes('Edg')) return 'Edge';
    if (ua.includes('MSIE') || ua.includes('Trident')) return 'IE';
    if (ua.includes('Opera') || ua.includes('OPR')) return 'Opera';
    return 'Unknown';
  }
  
  function getBrowserVersion(ua) {
    const match = ua.match(/(Chrome|Safari|Firefox|Edge|MSIE|Opera|OPR)[\\s\\/](\\d+)/);
    return match ? match[2] : 'Unknown';
  }
  
  function getOS(ua) {
    if (ua.includes('Windows')) return 'Windows';
    if (ua.includes('Mac')) return 'MacOS';
    if (ua.includes('Linux')) return 'Linux';
    if (ua.includes('Android')) return 'Android';
    if (ua.includes('iOS') || ua.includes('iPhone') || ua.includes('iPad')) return 'iOS';
    return 'Unknown';
  }
  
  function getDeviceType(ua) {
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) return 'tablet';
    if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) return 'mobile';
    return 'desktop';
  }
  
  // ==========================================
  // CLICK TRACKING & RAGE CLICK DETECTION
  // ==========================================
  document.addEventListener('click', function(e) {
    const target = e.target.closest('a, button');
    if (target) {
      const now = Date.now();
      clickTimes.push(now);
      clickTimes = clickTimes.filter(function(t) { return now - t < 2000; });
      
      const isRageClick = clickTimes.length >= 3;
      
      eventQueue.push({
        event_type: isRageClick ? 'rage_click' : 'click',
        page_url: window.location.href,
        data: {
          element: target.tagName,
          text: target.textContent ? target.textContent.substring(0, 50) : null,
          href: target.href || null,
          id: target.id || null,
          classes: target.className || null,
          position: { x: e.clientX, y: e.clientY },
          is_rage_click: isRageClick
        },
        timestamp: new Date().toISOString()
      });
      
      if (isRageClick && CONFIG.enableDebug) {
        console.log('[TRD Analytics] 😡 Rage click detected on:', target.textContent ? target.textContent.substring(0, 30) : '');
      }
    }
  });
  
  // ==========================================
  // SCROLL DEPTH TRACKING
  // ==========================================
  if (CONFIG.captureScrollDepth) {
    window.addEventListener('scroll', function() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      scrollDepth = Math.round((scrollTop / (documentHeight - windowHeight)) * 100);
      
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        
        [25, 50, 75, 90, 100].forEach(function(milestone) {
          if (maxScrollDepth >= milestone && !sessionStorage.getItem('trd_scroll_' + milestone)) {
            sessionStorage.setItem('trd_scroll_' + milestone, 'true');
            eventQueue.push({
              event_type: 'scroll_depth',
              page_url: window.location.href,
              data: { depth: milestone, max_depth: maxScrollDepth },
              timestamp: new Date().toISOString()
            });
            if (CONFIG.enableDebug) {
              console.log('[TRD Analytics] 📜 Scroll milestone: ' + milestone + '%');
            }
          }
        });
      }
    });
  }
  
  // ==========================================
  // FORM INTERACTION TRACKING
  // ==========================================
  if (CONFIG.captureFormInteractions) {
    document.addEventListener('focus', function(e) {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
        eventQueue.push({
          event_type: 'form_field_focus',
          page_url: window.location.href,
          data: {
            field_type: e.target.type || e.target.tagName.toLowerCase(),
            field_name: e.target.name || null,
            field_id: e.target.id || null,
            form_id: e.target.form ? e.target.form.id : null
          },
          timestamp: new Date().toISOString()
        });
      }
    }, true);
    
    document.addEventListener('submit', function(e) {
      if (e.target.tagName === 'FORM') {
        eventQueue.push({
          event_type: 'form_submit',
          page_url: window.location.href,
          data: {
            form_id: e.target.id || null,
            form_action: e.target.action || null,
            form_method: e.target.method || null,
            field_count: e.target.elements.length
          },
          timestamp: new Date().toISOString()
        });
        if (CONFIG.enableDebug) {
          console.log('[TRD Analytics] 📝 Form submitted');
        }
      }
    }, true);
  }
  
  // ==========================================
  // EVENT BATCHING & SENDING
  // ==========================================
  setInterval(function() {
    if (eventQueue.length > 0) {
      flushEvents();
    }
  }, CONFIG.batchInterval);
  
  function flushEvents() {
    if (eventQueue.length === 0) return;
    
    const events = eventQueue.slice();
    eventQueue = [];
    
    const payload = {
      script_key: CONFIG.scriptKey,
      session_id: sessionId,
      visitor_id: visitorId,
      events: events
    };
    
    fetch(CONFIG.pythonBackend + '/api/tracking/batch', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(function(res) { return res.json(); })
    .then(function(data) {
      if (CONFIG.enableDebug) {
        console.log('[TRD Analytics] ✅ Events sent:', data.events_processed || events.length);
      }
    })
    .catch(function(err) {
      console.error('[TRD Analytics] ❌ Failed to send events:', err);
      eventQueue.unshift.apply(eventQueue, events);
    });
  }
  
  // ==========================================
  // COOKIE HELPERS
  // ==========================================
  function getCookie(name) {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  
  function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + value + ';expires=' + expires.toUTCString() + ';path=/;SameSite=Lax';
  }
  
  // ==========================================
  // HEALTH CHECK API (window.TRDAnalyticsHealth)
  // ==========================================
  window.TRDAnalyticsHealth = {
    getStatus: function() {
      const status = {
        version: '2.0',
        healthy: true,
        script_key: CONFIG.scriptKey,
        visitor_id: visitorId,
        session_id: sessionId,
        events_queued: eventQueue.length,
        features: {
          cookies: true,
          utm_tracking: true,
          device_fingerprinting: true,
          rage_clicks: CONFIG.captureRageClicks,
          scroll_depth: CONFIG.captureScrollDepth,
          form_tracking: CONFIG.captureFormInteractions
        },
        page_url: window.location.href,
        timestamp: new Date().toISOString()
      };
      console.table(status);
      return status;
    },
    
    testConnection: function() {
      console.log('[TRD Analytics] 🔍 Testing connection...');
      return fetch(CONFIG.pythonBackend + '/health')
        .then(function(res) { return res.json(); })
        .then(function(data) {
          console.log('[TRD Analytics] ✅ Connection successful:', data);
          return data;
        })
        .catch(function(err) {
          console.error('[TRD Analytics] ❌ Connection failed:', err);
          throw err;
        });
    },
    
    forceFlush: function() {
      console.log('[TRD Analytics] 🚀 Forcing event flush...');
      flushEvents();
    }
  };
  
  console.log('[TRD Analytics] 🚀 Ready! Type TRDAnalyticsHealth.getStatus() for info');
  
})();
        `
      }}
    />
  );
}

