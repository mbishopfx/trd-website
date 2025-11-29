'use client';

import Script from 'next/script';

export default function TRDAnalytics() {
  return (
    <Script
      id="trd-analytics-hotfix"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
(function() {
  'use strict';
  
  const CONFIG = {
    scriptKey: 'trd_truerankdigital_2025',
    pythonBackend: 'https://trd-python-platform-production.up.railway.app',
    batchInterval: 10000 // 10 seconds
  };
  
  let sessionId = sessionStorage.getItem('trd_session_id') || 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 11);
  let visitorId = getCookie('trd_visitor_id') || 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 11);
  let eventQueue = [];
  
  sessionStorage.setItem('trd_session_id', sessionId);
  setCookie('trd_visitor_id', visitorId, 365);
  
  console.log('[TRD Analytics] ✅ Initialized - Script Key:', CONFIG.scriptKey);
  
  // Track page view
  eventQueue.push({
    event_type: 'pageview',
    page_url: window.location.href,
    page_title: document.title,
    referrer: document.referrer,
    timestamp: new Date().toISOString()
  });
  
  // Start batch processor
  setInterval(function() {
    if (eventQueue.length > 0) {
      flushEvents();
    }
  }, CONFIG.batchInterval);
  
  // Flush events
  function flushEvents() {
    if (eventQueue.length === 0) return;
    
    const events = eventQueue.slice();
    eventQueue = [];
    
    // CRITICAL FIX: session_id and visitor_id MUST be at top level!
    const payload = {
      script_key: CONFIG.scriptKey,
      session_id: sessionId,    // ✅ At top level
      visitor_id: visitorId,     // ✅ At top level
      events: events
    };
    
    console.log('[TRD Analytics] Sending:', payload);
    
    fetch(CONFIG.pythonBackend + '/api/tracking/batch', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(function(res) { return res.json(); })
    .then(function(data) { console.log('[TRD Analytics] ✅ Success:', data); })
    .catch(function(err) { console.error('[TRD Analytics] ❌ Error:', err); });
  }
  
  // Cookie helpers
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
  
  console.log('[TRD Analytics] 🚀 Ready!');
})();
        `
      }}
    />
  );
}

