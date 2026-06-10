const starters = {

hello: {
  html: `<div class="hero">
  <h1>Hello, World! 👋</h1>
  <p>Welcome to the Practice Lab by Afeef Ummer.</p>
  <button onclick="greet()">Click Me</button>
</div>`,
  css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero {
  text-align: center;
  color: #fff;
  padding: 40px;
}
h1 {
  font-size: 2.5rem;
  margin-bottom: 12px;
  background: linear-gradient(90deg, #e96c6c, #f9a8d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
p {
  color: #a8b2d8;
  font-size: 1.1rem;
  margin-bottom: 28px;
}
button {
  background: #e96c6c;
  color: #fff;
  border: none;
  padding: 12px 32px;
  border-radius: 999px;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}
button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(233,108,108,0.4);
}`,
  js: `function greet() {
  const names = ['Afeef', 'Developer', 'Coder', 'Builder', 'Creator'];
  const picked = names[Math.floor(Math.random() * names.length)];
  document.querySelector('h1').textContent = 'Hello, ' + picked + '! 🎉';
}`
},

card: {
  html: `<div class="container">
  <div class="card">
    <div class="card-icon">🚀</div>
    <h2>Launch Ready</h2>
    <p>A beautiful card component you can use in any project. Hover over it to see the effect.</p>
    <div class="tags">
      <span>HTML</span><span>CSS</span><span>Design</span>
    </div>
    <a href="#">View Project →</a>
  </div>
  <div class="card">
    <div class="card-icon">💡</div>
    <h2>Smart Ideas</h2>
    <p>Cards are one of the most versatile UI patterns. Use them for products, blog posts, profiles.</p>
    <div class="tags">
      <span>Components</span><span>UI/UX</span>
    </div>
    <a href="#">Learn More →</a>
  </div>
</div>`,
  css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  font-family: 'Segoe UI', sans-serif;
  background: #f0f4f8;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}
.container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 700px;
}
.card {
  background: #fff;
  border-radius: 20px;
  padding: 28px 24px;
  width: 280px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.07);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.12);
}
.card-icon {
  font-size: 2.2rem;
  margin-bottom: 14px;
}
h2 {
  font-size: 1.2rem;
  color: #1a202c;
  margin-bottom: 8px;
}
p {
  font-size: 0.875rem;
  color: #718096;
  line-height: 1.6;
  margin-bottom: 16px;
}
.tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}
.tags span {
  background: #eef2ff;
  color: #4f46e5;
  font-size: 0.72rem;
  padding: 3px 10px;
  border-radius: 999px;
  font-weight: 500;
}
a {
  font-size: 0.82rem;
  color: #4f46e5;
  text-decoration: none;
  font-weight: 600;
}
a:hover { text-decoration: underline; }`,
  js: ``
},

button: {
  html: `<div class="stage">
  <button class="btn btn-primary">Hover Me ✨</button>
  <button class="btn btn-outline">Outlined Style</button>
  <button class="btn btn-glow">Glow Effect 💫</button>
  <button class="btn btn-shine">Shine Sweep →</button>
</div>`,
  css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  font-family: 'Segoe UI', sans-serif;
  background: #111827;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.stage {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
}
.btn {
  padding: 14px 36px;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  min-width: 200px;
  font-family: inherit;
}
.btn-primary {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #fff;
}
.btn-primary:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 12px 30px rgba(99,102,241,0.5);
}
.btn-outline {
  background: transparent;
  color: #e2e8f0;
  border: 2px solid #4b5563;
}
.btn-outline:hover {
  border-color: #6366f1;
  color: #a5b4fc;
  box-shadow: 0 0 0 3px rgba(99,102,241,0.15);
}
.btn-glow {
  background: #10b981;
  color: #fff;
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(16,185,129,0.4); }
  50% { box-shadow: 0 0 0 12px rgba(16,185,129,0); }
}
.btn-glow:hover {
  background: #059669;
  animation: none;
  transform: scale(1.04);
}
.btn-shine {
  background: #f59e0b;
  color: #1a1a1a;
  overflow: hidden;
  position: relative;
}
.btn-shine::after {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
  transition: left 0.5s ease;
}
.btn-shine:hover::after { left: 150%; }
.btn-shine:hover {
  background: #d97706;
  transform: scale(1.02);
}`,
  js: ``
},

counter: {
  html: `<div class="app">
  <h1>Counter App</h1>
  <div class="display">
    <span id="count">0</span>
  </div>
  <div class="controls">
    <button onclick="change(-10)" class="btn-sm">-10</button>
    <button onclick="change(-1)" class="btn-dec">−</button>
    <button onclick="reset()" class="btn-reset">Reset</button>
    <button onclick="change(1)" class="btn-inc">+</button>
    <button onclick="change(10)" class="btn-sm">+10</button>
  </div>
  <p id="msg" class="msg"></p>
</div>`,
  css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  font-family: 'Segoe UI', sans-serif;
  background: #0f172a;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.app {
  text-align: center;
  color: #fff;
  padding: 40px;
}
h1 {
  font-size: 1.2rem;
  color: #94a3b8;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 28px;
}
.display {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
  padding: 28px 60px;
  margin-bottom: 28px;
  display: inline-block;
}
#count {
  font-size: 5rem;
  font-weight: 700;
  display: block;
  transition: color 0.3s;
}
.controls {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
}
button {
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 12px 22px;
  transition: all 0.15s;
  font-family: inherit;
}
.btn-dec { background: #ef4444; color: #fff; }
.btn-dec:hover { background: #dc2626; transform: scale(1.08); }
.btn-inc { background: #22c55e; color: #fff; }
.btn-inc:hover { background: #16a34a; transform: scale(1.08); }
.btn-reset { background: #334155; color: #cbd5e1; font-size: 0.85rem; padding: 12px 18px; }
.btn-reset:hover { background: #475569; }
.btn-sm { background: rgba(255,255,255,0.08); color: #94a3b8; font-size: 0.85rem; padding: 10px 14px; border-radius: 8px; }
.btn-sm:hover { background: rgba(255,255,255,0.14); }
.msg { color: #64748b; font-size: 0.875rem; min-height: 20px; }`,
  js: `var count = 0;

function update() {
  var el = document.getElementById('count');
  var msg = document.getElementById('msg');
  el.textContent = count;
  if (count > 0) { el.style.color = '#22c55e'; msg.textContent = 'Positive! Keep going.'; }
  else if (count < 0) { el.style.color = '#ef4444'; msg.textContent = 'Gone negative!'; }
  else { el.style.color = '#fff'; msg.textContent = 'Start counting...'; }
}

function change(n) {
  count += n;
  update();
}

function reset() {
  count = 0;
  update();
}

update();`
},

colorchange: {
  html: `<div class="app">
  <div class="swatch" id="swatch"></div>
  <h2 id="colorCode">#1a1a2e</h2>
  <p>Click to generate a new random color</p>
  <div class="btns">
    <button onclick="randomColor()">🎲 Random Color</button>
    <button onclick="copyColor()">📋 Copy HEX</button>
  </div>
  <div class="palette" id="palette"></div>
</div>`,
  css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  font-family: 'Segoe UI', sans-serif;
  background: #1a1a2e;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.5s;
}
.app { text-align: center; color: #fff; padding: 32px; }
.swatch {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: #1a1a2e;
  margin: 0 auto 20px;
  box-shadow: 0 0 40px rgba(0,0,0,0.5);
  transition: background 0.4s, box-shadow 0.4s;
  cursor: pointer;
}
h2 {
  font-size: 2rem;
  font-weight: 700;
  font-family: monospace;
  margin-bottom: 8px;
  transition: color 0.3s;
}
p { color: rgba(255,255,255,0.5); font-size: 0.875rem; margin-bottom: 24px; }
.btns { display: flex; gap: 10px; justify-content: center; margin-bottom: 24px; }
button {
  background: rgba(255,255,255,0.1);
  color: #fff;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background 0.2s;
  font-family: inherit;
}
button:hover { background: rgba(255,255,255,0.2); }
.palette { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; }
.pal-swatch {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s;
  border: 2px solid transparent;
}
.pal-swatch:hover { transform: scale(1.15); }`,
  js: `var history = [];
var current = '#1a1a2e';

function randomColor() {
  var r = Math.floor(Math.random()*256).toString(16).padStart(2,'0');
  var g = Math.floor(Math.random()*256).toString(16).padStart(2,'0');
  var b = Math.floor(Math.random()*256).toString(16).padStart(2,'0');
  current = '#' + r + g + b;
  applyColor(current);
  addToHistory(current);
}

function applyColor(hex) {
  document.getElementById('swatch').style.background = hex;
  document.getElementById('swatch').style.boxShadow = '0 0 40px ' + hex + '88';
  document.getElementById('colorCode').textContent = hex.toUpperCase();
  document.getElementById('colorCode').style.color = hex;
  document.body.style.background = hex + '22';
}

function addToHistory(hex) {
  history.unshift(hex);
  if (history.length > 8) history.pop();
  var pal = document.getElementById('palette');
  pal.innerHTML = '';
  history.forEach(function(c) {
    var s = document.createElement('div');
    s.className = 'pal-swatch';
    s.style.background = c;
    s.title = c;
    s.onclick = function() { current = c; applyColor(c); };
    pal.appendChild(s);
  });
}

function copyColor() {
  navigator.clipboard.writeText(current).then(function() {
    var btn = document.querySelector('.btns button:last-child');
    btn.textContent = '✅ Copied!';
    setTimeout(function() { btn.textContent = '📋 Copy HEX'; }, 1500);
  });
}

document.getElementById('swatch').onclick = randomColor;`
},

clock: {
  html: `<div class="clock-wrap">
  <div class="date" id="date"></div>
  <div class="time" id="time"></div>
  <div class="seconds-bar"><div class="seconds-fill" id="secBar"></div></div>
  <div class="greeting" id="greeting"></div>
</div>`,
  css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  font-family: 'Segoe UI', sans-serif;
  background: radial-gradient(ellipse at center, #1b2a3b 0%, #0d1117 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.clock-wrap { text-align: center; color: #fff; }
.date {
  font-size: 0.95rem;
  color: #64748b;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.time {
  font-size: 5.5rem;
  font-weight: 300;
  letter-spacing: -0.03em;
  color: #e2e8f0;
  font-variant-numeric: tabular-nums;
  line-height: 1;
  margin-bottom: 16px;
}
.seconds-bar {
  width: 240px;
  height: 3px;
  background: rgba(255,255,255,0.08);
  border-radius: 99px;
  margin: 0 auto 20px;
  overflow: hidden;
}
.seconds-fill {
  height: 100%;
  background: linear-gradient(90deg, #6366f1, #a5b4fc);
  border-radius: 99px;
  transition: width 0.9s linear;
}
.greeting {
  font-size: 1rem;
  color: #94a3b8;
  font-style: italic;
}`,
  js: `function tick() {
  var now = new Date();
  var h = now.getHours().toString().padStart(2,'0');
  var m = now.getMinutes().toString().padStart(2,'0');
  var s = now.getSeconds().toString().padStart(2,'0');
  document.getElementById('time').textContent = h + ':' + m + ':' + s;
  document.getElementById('secBar').style.width = (now.getSeconds() / 59 * 100) + '%';
  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  document.getElementById('date').textContent = days[now.getDay()] + ', ' + months[now.getMonth()] + ' ' + now.getDate() + ' ' + now.getFullYear();
  var hr = now.getHours();
  var greet = hr < 12 ? 'Good Morning ☀️' : hr < 17 ? 'Good Afternoon 🌤️' : hr < 20 ? 'Good Evening 🌆' : 'Good Night 🌙';
  document.getElementById('greeting').textContent = greet;
}
tick();
setInterval(tick, 1000);`
},

todo: {
  html: `<div class="app">
  <h1>📝 My Todo List</h1>
  <div class="input-row">
    <input id="taskInput" type="text" placeholder="Add a new task..." onkeydown="if(event.key==='Enter')addTask()">
    <button onclick="addTask()">Add</button>
  </div>
  <ul id="taskList"></ul>
  <div class="footer-bar">
    <span id="leftCount">0 tasks left</span>
    <button onclick="clearDone()">Clear Done</button>
  </div>
</div>`,
  css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  font-family: 'Segoe UI', sans-serif;
  background: #f1f5f9;
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 40px 16px;
}
.app {
  background: #fff;
  border-radius: 20px;
  padding: 28px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
}
h1 { font-size: 1.4rem; color: #1e293b; margin-bottom: 20px; }
.input-row { display: flex; gap: 8px; margin-bottom: 16px; }
input {
  flex: 1;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  padding: 10px 14px;
  font-size: 0.9rem;
  outline: none;
  font-family: inherit;
  transition: border-color 0.2s;
}
input:focus { border-color: #6366f1; }
button {
  background: #6366f1;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px 18px;
  font-size: 0.875rem;
  cursor: pointer;
  font-family: inherit;
  white-space: nowrap;
  transition: background 0.2s;
}
button:hover { background: #4f46e5; }
#taskList { list-style: none; display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }
.task-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  background: #f8fafc;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  transition: opacity 0.2s;
}
.task-item.done { opacity: 0.5; }
.task-item.done .task-text { text-decoration: line-through; color: #94a3b8; }
.task-cb { width: 18px; height: 18px; cursor: pointer; accent-color: #6366f1; }
.task-text { flex: 1; font-size: 0.9rem; color: #334155; }
.del-btn {
  background: transparent;
  color: #cbd5e1;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
}
.del-btn:hover { color: #ef4444; background: #fee2e2; }
.footer-bar { display: flex; justify-content: space-between; align-items: center; }
#leftCount { font-size: 0.8rem; color: #94a3b8; }
.footer-bar button { background: #f1f5f9; color: #64748b; font-size: 0.78rem; padding: 6px 12px; border-radius: 6px; border: 1px solid #e2e8f0; }
.footer-bar button:hover { background: #fee2e2; color: #ef4444; border-color: #fca5a5; }`,
  js: `var tasks = [];

function addTask() {
  var input = document.getElementById('taskInput');
  var text = input.value.trim();
  if (!text) return;
  tasks.push({ text: text, done: false });
  input.value = '';
  render();
}

function toggleDone(i) {
  tasks[i].done = !tasks[i].done;
  render();
}

function deleteTask(i) {
  tasks.splice(i, 1);
  render();
}

function clearDone() {
  tasks = tasks.filter(function(t) { return !t.done; });
  render();
}

function render() {
  var list = document.getElementById('taskList');
  list.innerHTML = '';
  tasks.forEach(function(task, i) {
    var li = document.createElement('li');
    li.className = 'task-item' + (task.done ? ' done' : '');
    li.innerHTML = '<input type="checkbox" class="task-cb"' + (task.done ? ' checked' : '') + ' onchange="toggleDone(' + i + ')">' +
      '<span class="task-text">' + task.text.replace(/[<>&"]/g, function(c) { return {'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c]; }) + '</span>' +
      '<button class="del-btn" onclick="deleteTask(' + i + ')">✕</button>';
    list.appendChild(li);
  });
  var left = tasks.filter(function(t) { return !t.done; }).length;
  document.getElementById('leftCount').textContent = left + ' task' + (left !== 1 ? 's' : '') + ' left';
}

render();`
},

form: {
  html: `<div class="container">
  <form id="contactForm" onsubmit="submitForm(event)">
    <h2>Contact Us</h2>
    <p class="subtitle">We'll get back to you within 24 hours.</p>
    <div class="field">
      <label>Full Name</label>
      <input type="text" id="name" placeholder="Afeef Ummer" required>
    </div>
    <div class="field">
      <label>Email Address</label>
      <input type="email" id="email" placeholder="afeef@example.com" required>
    </div>
    <div class="field">
      <label>Subject</label>
      <select id="subject">
        <option value="">Choose a topic...</option>
        <option>General Enquiry</option>
        <option>Project Collaboration</option>
        <option>Feedback</option>
        <option>Other</option>
      </select>
    </div>
    <div class="field">
      <label>Message</label>
      <textarea id="message" rows="4" placeholder="Write your message here..." required></textarea>
    </div>
    <button type="submit">Send Message →</button>
    <div id="successMsg" class="success" style="display:none">✅ Message sent! Thank you.</div>
  </form>
</div>`,
  css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #667eea22, #764ba222), #f0f4f8;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}
.container { width: 100%; max-width: 420px; }
form {
  background: #fff;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.08);
}
h2 { font-size: 1.5rem; color: #1a202c; margin-bottom: 4px; }
.subtitle { font-size: 0.85rem; color: #718096; margin-bottom: 24px; }
.field { margin-bottom: 16px; }
label { display: block; font-size: 0.82rem; font-weight: 600; color: #4a5568; margin-bottom: 6px; }
input, select, textarea {
  width: 100%;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  padding: 10px 14px;
  font-size: 0.9rem;
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  background: #fafafa;
}
input:focus, select:focus, textarea:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102,126,234,0.1);
  background: #fff;
}
textarea { resize: vertical; min-height: 90px; }
button {
  width: 100%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 13px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  transition: opacity 0.2s, transform 0.2s;
  margin-top: 4px;
}
button:hover { opacity: 0.92; transform: translateY(-1px); }
.success { margin-top: 14px; padding: 12px 16px; background: #f0fff4; color: #276749; border-radius: 8px; font-size: 0.875rem; font-weight: 500; border: 1px solid #c6f6d5; }`,
  js: `function submitForm(e) {
  e.preventDefault();
  var name = document.getElementById('name').value;
  var msg = document.getElementById('successMsg');
  msg.textContent = '✅ Thanks, ' + name + '! Your message has been sent.';
  msg.style.display = 'block';
  document.getElementById('contactForm').querySelectorAll('input,select,textarea').forEach(function(el) { el.value = ''; });
  setTimeout(function() { msg.style.display = 'none'; }, 4000);
}`
},

/* ── SQL starters ── */
sql_basics: {
  sql: `-- SQL Basics: Creating tables and querying data
-- Run with Ctrl+Enter or the Run Code button

CREATE TABLE employees (
  id      INTEGER PRIMARY KEY,
  name    TEXT    NOT NULL,
  dept    TEXT,
  salary  REAL
);

INSERT INTO employees VALUES
  (1, 'Alice Johnson', 'Engineering', 95000),
  (2, 'Bob Smith',     'Marketing',   72000),
  (3, 'Carol White',   'Engineering', 88000),
  (4, 'David Lee',     'HR',          65000),
  (5, 'Eva Brown',     'Marketing',   78000);

-- Fetch all employees
SELECT * FROM employees;`
},

sql_filter: {
  sql: `-- SQL: WHERE, ORDER BY, and LIMIT

CREATE TABLE products (
  id       INTEGER PRIMARY KEY,
  name     TEXT,
  category TEXT,
  price    REAL,
  stock    INTEGER
);

INSERT INTO products VALUES
  (1, 'Laptop',     'Electronics', 999.99,  50),
  (2, 'Keyboard',   'Electronics',  49.99, 200),
  (3, 'Desk Chair', 'Furniture',   299.99,  30),
  (4, 'Monitor',    'Electronics', 349.99,  80),
  (5, 'Bookshelf',  'Furniture',   149.99,  60),
  (6, 'Headphones', 'Electronics',  89.99, 120);

-- Products over $100, sorted by price descending
SELECT name, category, price
FROM   products
WHERE  price > 100
ORDER  BY price DESC;

-- Top 3 cheapest electronics
SELECT name, price
FROM   products
WHERE  category = 'Electronics'
ORDER  BY price ASC
LIMIT  3;`
},

sql_join: {
  sql: `-- SQL: JOIN Operations

CREATE TABLE departments (
  id   INTEGER PRIMARY KEY,
  name TEXT
);

CREATE TABLE staff (
  id      INTEGER PRIMARY KEY,
  name    TEXT,
  dept_id INTEGER,
  salary  REAL
);

INSERT INTO departments VALUES (1,'Engineering'),(2,'Marketing'),(3,'HR'),(4,'Finance');

INSERT INTO staff VALUES
  (1, 'Alice',  1, 95000),
  (2, 'Bob',    2, 72000),
  (3, 'Carol',  1, 88000),
  (4, 'David',  3, 65000),
  (5, 'Eva',    2, 78000),
  (6, 'Frank',  4, 82000);

-- INNER JOIN: staff with their department names
SELECT s.name AS employee, d.name AS department, s.salary
FROM   staff s
JOIN   departments d ON s.dept_id = d.id
ORDER  BY d.name, s.name;`
},

sql_agg: {
  sql: `-- SQL: GROUP BY & Aggregate Functions

CREATE TABLE sales (
  id       INTEGER PRIMARY KEY,
  region   TEXT,
  product  TEXT,
  amount   REAL,
  qty      INTEGER
);

INSERT INTO sales VALUES
  (1,'North','Widget A',1200,10),(2,'South','Widget B',850,7),
  (3,'North','Widget B',640,5),(4,'East','Widget A',980,8),
  (5,'South','Widget A',1100,9),(6,'East','Widget B',760,6),
  (7,'North','Widget A',1350,11),(8,'West','Widget B',920,8),
  (9,'West','Widget A',1050,9),(10,'South','Widget A',890,7);

-- Total sales and units per region
SELECT   region,
         COUNT(*)       AS orders,
         SUM(qty)       AS total_units,
         SUM(amount)    AS total_revenue,
         ROUND(AVG(amount), 2) AS avg_order_value
FROM     sales
GROUP BY region
ORDER BY total_revenue DESC;`
},

/* ── Python starters ── */
py_hello: {
  python: `# Python Basics: Variables, types, and print

name = "Afeef"
age  = 22
pi   = 3.14159
is_dev = True

print("Hello,", name)
print("Age:", age, " Pi:", round(pi, 2))
print("Developer:", is_dev)

# String methods
greeting = "  hello world  "
print(greeting.strip().title())

# Basic arithmetic
x, y = 15, 4
print(str(x) + " / " + str(y) + " =", round(x/y, 2))
print(str(x) + " // " + str(y) + " =", x // y, " (floor division)")
print(str(x) + " % " + str(y) + " =", x % y, " (remainder)")`
},

py_loops: {
  python: `# Python: Loops, lists, and functions

# List operations
fruits = ["apple", "banana", "cherry", "date", "elderberry"]
print("All fruits:", fruits)
print("First:", fruits[0], " Last:", fruits[-1])

# For loop with enumerate
print("\\nNumbered list:")
for i, f in enumerate(fruits, 1):
    print(" " + str(i) + ". " + f.capitalize())

# List comprehension
long_fruits = [f for f in fruits if len(f) > 5]
print("\\nFruits with >5 chars:", long_fruits)

# Function with default argument
def greet(name, times=1):
    for _ in range(times):
        print("Hello, " + name + "!")

greet("World")
greet("Python", 3)

# Fibonacci
def fibonacci(n):
    a, b = 0, 1
    result = []
    for _ in range(n):
        result.append(a)
        a, b = b, a + b
    return result

print("\\nFibonacci(8):", fibonacci(8))`
},

py_dict: {
  python: `# Python: Dictionaries, sets, and comprehensions

# Dictionary
student = {
    "name":   "Alice",
    "grade":  "A",
    "scores": [92, 87, 95, 88, 91]
}

print("Student:", student["name"])
print("Grade:", student["grade"])
avg = sum(student["scores"]) / len(student["scores"])
print("Average score:", round(avg, 1))

# Dict methods
print("\\nKeys:", list(student.keys()))

# Dict comprehension: squares
squares = {}
for n in range(1, 9):
    squares[n] = n ** 2
print("\\nSquares:", squares)

# Set operations
evens   = set(x for x in range(1, 21) if x % 2 == 0)
threes  = set(x for x in range(1, 21) if x % 3 == 0)
print("\\nEvens:", sorted(evens))
print("Multiples of 3:", sorted(threes))
print("Both (even & /3):", sorted(evens & threes))
print("Either:", sorted(evens | threes))`
},

py_class: {
  python: `# Python: Classes and Object-Oriented Programming

class Animal:
    species = "Unknown"

    def __init__(self, name, sound):
        self.name  = name
        self.sound = sound

    def speak(self):
        return self.name + " says '" + self.sound + "!'"

    def __repr__(self):
        return "Animal(" + self.name + ")"

class Dog(Animal):
    species = "Canis lupus familiaris"

    def __init__(self, name, breed):
        super().__init__(name, "Woof")
        self.breed = breed

    def fetch(self, item="ball"):
        return self.name + " fetches the " + item + "!"

# Using the classes
cat = Animal("Whiskers", "Meow")
dog = Dog("Rex", "Labrador")

print(cat.speak())
print(dog.speak())
print(dog.fetch("stick"))
print("Species:", Dog.species)

# List of animals
animals = [Animal("Cow","Moo"), Animal("Duck","Quack"), dog, cat]
print("\\nAll animals:")
for a in animals:
    print(" ", a.speak())`
}

};
