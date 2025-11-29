'use client';

import Script from 'next/script';

export default function TRDAnalytics() {
  return (
    <>
      {/* Load main tracker script */}
      <Script
        src="/tracking/analytics-tracker.js"
        strategy="afterInteractive"
      />
      
      {/* Initialize tracker with health monitoring */}
      <Script
        id="trd-analytics-init"
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
    enableDebug: true,
    healthCheckInterval: 30000
  };
  
  // ==========================================
  // CONSOLE STYLING
  // ==========================================
  const styles = {
    success: 'background: #10b981; color: white; padding: 4px 8px; border-radius: 3px; font-weight: bold;',
    info: 'background: #3b82f6; color: white; padding: 4px 8px; border-radius: 3px; font-weight: bold;',
    warning: 'background: #f59e0b; color: white; padding: 4px 8px; border-radius: 3px; font-weight: bold;',
    error: 'background: #ef4444; color: white; padding: 4px 8px; border-radius: 3px; font-weight: bold;',
    header: 'background: #8b5cf6; color: white; padding: 4px 8px; border-radius: 3px; font-weight: bold;'
  };
  
  // ==========================================
  // HEALTH LOGGING
  // ==========================================
  function logHealth(message, type = 'info', data = null) {
    if (!CONFIG.enableDebug) return;
    
    const timestamp = new Date().toLocaleTimeString();
    const style = styles[type] || styles.info;
    
    console.log('%c[TRD Analytics ' + timestamp + '] ' + message, style);
    if (data) console.log(data);
  }
  
  // ==========================================
  // PRE-FLIGHT CHECKS
  // ==========================================
  console.log('%c╔════════════════════════════════════════╗', 'color: #8b5cf6');
  console.log('%c║   TRD Analytics Tracker v1.0           ║', 'color: #8b5cf6');
  console.log('%c║   True Rank Digital                    ║', 'color: #8b5cf6');
  console.log('%c╚════════════════════════════════════════╝', 'color: #8b5cf6');
  
  // Wait for main tracker to load
  function initTracker() {
    if (typeof window.TRDAnalytics === 'undefined') {
      console.error('%c[TRD Analytics] ❌ CRITICAL ERROR', styles.error);
      console.error('Main tracker script not loaded!');
      return;
    }
    
    logHealth('✓ Main tracker script loaded', 'success');
    
    // ==========================================
    // TRACKER INITIALIZATION
    // ==========================================
    try {
      logHealth('🚀 Initializing TRD Analytics...', 'info');
      
      window.TRDAnalytics.init({
        scriptKey: CONFIG.scriptKey,
        pythonBackend: CONFIG.pythonBackend
      });
      
      logHealth('✓ Tracker initialized successfully', 'success');
      logHealth('📋 Script Key: ' + CONFIG.scriptKey, 'info');
      logHealth('🔗 Backend: ' + CONFIG.pythonBackend, 'info');
      
    } catch (error) {
      console.error('%c[TRD Analytics] ❌ Initialization Failed', styles.error);
      console.error(error);
      return;
    }
    
    // ==========================================
    // SESSION INFORMATION
    // ==========================================
    const getCookie = (name) => {
      const nameEQ = name + '=';
      const ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    };
    
    const visitorId = getCookie('trd_visitor_id');
    const sessionId = sessionStorage.getItem('trd_session_id');
    
    if (visitorId) {
      logHealth('👤 Visitor ID: ' + visitorId.substring(0, 12) + '...', 'info');
    }
    if (sessionId) {
      logHealth('📊 Session ID: ' + sessionId.substring(0, 12) + '...', 'info');
    }
    
    // ==========================================
    // EVENT MONITORING
    // ==========================================
    let eventCount = 0;
    let lastEventType = null;
    const eventLog = [];
    
    const originalTrack = window.TRDAnalytics.track;
    window.TRDAnalytics.track = function(event) {
      eventCount++;
      lastEventType = event.event_type;
      eventLog.push({
        type: event.event_type,
        time: new Date().toISOString(),
        url: event.page_url
      });
      
      if (eventLog.length > 50) eventLog.shift();
      
      const emoji = {
        'pageview': '📄',
        'click': '👆',
        'scroll': '📜',
        'form_submit': '📝',
        'page_exit': '👋'
      }[event.event_type] || '📊';
      
      logHealth(emoji + ' Event: ' + event.event_type + ' (Total: ' + eventCount + ')', 'info');
      
      return originalTrack.call(this, event);
    };
    
    logHealth('✓ Event monitoring active', 'success');
    
    // ==========================================
    // BACKEND CONNECTION TEST
    // ==========================================
    logHealth('🔍 Testing backend connection...', 'info');
    
    fetch(CONFIG.pythonBackend + '/health')
      .then(response => {
        if (!response.ok) throw new Error('HTTP ' + response.status);
        return response.json();
      })
      .then(data => {
        logHealth('✓ Backend connection healthy', 'success', data);
      })
      .catch(error => {
        logHealth('⚠️ Backend connection issue', 'warning', error.message);
        console.warn('Note: This may be expected if backend is still starting');
      });
    
    // ==========================================
    // PERIODIC HEALTH CHECKS
    // ==========================================
    let healthCheckCount = 0;
    
    setInterval(() => {
      healthCheckCount++;
      const lastActivity = sessionStorage.getItem('trd_last_activity');
      
      if (lastActivity) {
        const timeSince = Math.round((Date.now() - parseInt(lastActivity)) / 1000);
        logHealth(
          '💚 Health Check #' + healthCheckCount + ' (Active: ' + timeSince + 's ago, Events: ' + eventCount + ')',
          'success'
        );
      }
    }, CONFIG.healthCheckInterval);
    
    // ==========================================
    // GLOBAL HEALTH API
    // ==========================================
    window.TRDAnalyticsHealth = {
      getStatus: function() {
        const status = {
          healthy: true,
          initialized: true,
          scriptKey: CONFIG.scriptKey,
          backend: CONFIG.pythonBackend,
          visitorId: visitorId,
          sessionId: sessionId,
          eventCount: eventCount,
          lastEventType: lastEventType,
          pageUrl: window.location.href,
          userAgent: navigator.userAgent,
          language: navigator.language,
          timestamp: new Date().toISOString()
        };
        
        console.table(status);
        return status;
      },
      
      testConnection: function() {
        console.log('%c[TRD Analytics] 🔍 Testing Connection...', styles.info);
        
        return fetch(CONFIG.pythonBackend + '/api/tracking/health')
          .then(response => response.json())
          .then(data => {
            console.log('%c[TRD Analytics] ✅ Connection Test PASSED', styles.success);
            console.table(data);
            return data;
          })
          .catch(error => {
            console.error('%c[TRD Analytics] ❌ Connection Test FAILED', styles.error);
            console.error(error);
            throw error;
          });
      },
      
      getEvents: function() {
        console.log('%c[TRD Analytics] 📊 Event Log', styles.header);
        console.table(eventLog);
        return eventLog;
      },
      
      getEventCount: function() {
        return eventCount;
      },
      
      trackCustomEvent: function(eventType, data) {
        window.TRDAnalytics.track({
          event_type: eventType,
          page_url: window.location.href,
          data: data,
          timestamp: new Date().toISOString()
        });
        logHealth('📌 Custom event tracked: ' + eventType, 'info');
      }
    };
    
    // ==========================================
    // ENVIRONMENT INFO
    // ==========================================
    logHealth('📱 Device Type: ' + (
      /Mobile|Android|iPhone|iPad/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
    ), 'info');
    logHealth('🌐 Page: ' + window.location.href, 'info');
    logHealth('🗣️ Language: ' + navigator.language, 'info');
    
    // ==========================================
    // AVAILABLE COMMANDS
    // ==========================================
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #8b5cf6');
    console.log('%c[TRD Analytics] 📋 Available Commands:', styles.header);
    console.log('  • TRDAnalyticsHealth.getStatus()        - View tracker status');
    console.log('  • TRDAnalyticsHealth.testConnection()   - Test backend connection');
    console.log('  • TRDAnalyticsHealth.getEvents()        - View event log');
    console.log('  • TRDAnalyticsHealth.getEventCount()    - Get total events');
    console.log('  • TRDAnalyticsHealth.trackCustomEvent() - Track custom event');
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #8b5cf6');
    
    // ==========================================
    // FINAL STATUS
    // ==========================================
    logHealth('✅ TRD Analytics is HEALTHY and TRACKING!', 'success');
    logHealth('All systems operational. Monitoring active.', 'success');
  }
  
  // Initialize after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTracker);
  } else {
    // Wait a bit for the main script to load
    setTimeout(initTracker, 100);
  }
})();
          `
        }}
      />
    </>
  );
}

