(function () {
  const SUPABASE_URL = 'https://mgmsdwasibkwdwbegwzg.supabase.co';
  const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1nbXNkd2FzaWJrd2R3YmVnd3pnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzMDc1NTAsImV4cCI6MjA5NTg4MzU1MH0.hXjF1lwhV5jWntCSbdia2cW9sSZLTat4dPXQxkaqstE';

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
      await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ ...data, visitor_id: vid })
      });
    } catch (e) {}
  }

  const page = window.location.pathname.split('/').pop() || 'index.html';
  post('page_views', { page, referrer: document.referrer || null });

  window.trackTool     = (name)         => post('tool_usage',         { tool_name: name });
  window.trackDownload = (title)        => post('pdf_downloads',       { note_title: title });
  window.trackTemplate = (name, action) => post('template_views',      { template_name: name, action: action || 'view' });
  window.trackContact  = (data)         => post('contact_submissions',  data);
})();
