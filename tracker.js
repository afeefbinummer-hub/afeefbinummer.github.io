(function () {
  const SUPABASE_URL = 'https://mgmsdwasibkwdwbegwzg.supabase.co';
  const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1nbXNkd2FzaWJrd2R3YmVnd3pnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzMDc1NTAsImV4cCI6MjA5NTg4MzU1MH0.hXjF1lwhV5jWntCSbdia2cW9sSZLTat4dPXQxkaqstE
';

  let vid = localStorage.getItem('afeef_vid');
  if (!vid) {
    vid = 'v_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem('afeef_vid', vid);
  }

  const headers = {
    'apikey': SUPABASE_KEY,
    'Content-Type': 'application/json',
    'Prefer': 'return=minimal'
  };

  async function post(table, data) {
    try {
      await fetch(SUPABASE_URL + '/rest/v1/' + table, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Object.assign({}, data, { visitor_id: vid }))
      });
    } catch (e) {}
  }

  // Detect device type
  function getDevice() {
    const ua = navigator.userAgent;
    if (/tablet|ipad|playbook|silk/i.test(ua)) return 'Tablet';
    if (/mobile|iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(ua)) return 'Mobile';
    return 'Desktop';
  }

  // Detect browser
  function getBrowser() {
    const ua = navigator.userAgent;
    if (ua.includes('Chrome')) return 'Chrome';
    if (ua.includes('Firefox')) return 'Firefox';
    if (ua.includes('Safari')) return 'Safari';
    if (ua.includes('Edge')) return 'Edge';
    if (ua.includes('Opera')) return 'Opera';
    return 'Other';
  }

  // Detect OS
  function getOS() {
    const ua = navigator.userAgent;
    if (ua.includes('Windows')) return 'Windows';
    if (ua.includes('Mac')) return 'MacOS';
    if (ua.includes('Android')) return 'Android';
    if (ua.includes('iPhone') || ua.includes('iPad')) return 'iOS';
    if (ua.includes('Linux')) return 'Linux';
    return 'Other';
  }

  // Get country via free API
  async function getCountry() {
    try {
      const res = await fetch('https://ipapi.co/json/');
      const data = await res.json();
      return {
        country: data.country_name || null,
        city: data.city || null,
        timezone: data.timezone || null
      };
    } catch (e) {
      return { country: null, city: null, timezone: null };
    }
  }

  // Track page view with full details
  async function trackPageView() {
    const location = await getCountry();
    const page = window.location.pathname.split('/').pop() || 'index.html';

    post('page_views', {
      page: page,
      referrer: document.referrer || null,
      browser: getBrowser(),
      device: getDevice(),
      os: getOS(),
      country: location.country,
      city: location.city,
      timezone: location.timezone,
      screen: window.screen.width + 'x' + window.screen.height,
      language: navigator.language || null
    });
  }

  trackPageView();

  window.trackTool     = function(name)         { post('tool_usage',        { tool_name: name }); };
  window.trackDownload = function(title)        { post('pdf_downloads',      { note_title: title }); };
  window.trackTemplate = function(name, action) { post('template_views',     { template_name: name, action: action || 'view' }); };
  window.trackContact  = function(data)         { post('contact_submissions', data); };
})();
