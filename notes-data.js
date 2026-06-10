const notes = {

html: `=================================================
  HTML & CSS - COMPREHENSIVE STUDY NOTES
  Curated by Afeef Ummer | afeefbinummer@gmail.com
=================================================

CHAPTER 1: HTML FUNDAMENTALS
HTML = HyperText Markup Language. Defines structure of web pages.
Document Structure:
  [!DOCTYPE html]
  [html lang="en"]
    [head]
      [meta charset="UTF-8"]
      [meta name="viewport" content="width=device-width, initial-scale=1.0"]
      [title]Page Title[/title]
      [link rel="stylesheet" href="style.css"]
    [/head]
    [body]
      [!-- Content goes here --]
    [/body]
  [/html]
Note: In real code, replace [ ] with angle brackets < >

CHAPTER 2: COMMON HTML TAGS
Headings:  h1 to h6  (h1 = most important, one per page for SEO)
Text:      p, span, strong, em, br, hr
Links:     [a href="url" target="_blank"]Link Text[/a]
Images:    [img src="url" alt="description" width="300"]
Lists:     [ul][li]Unordered[/li][/ul]  |  [ol][li]Ordered[/li][/ol]
Tables:    [table][thead][tr][th]Header[/th][/tr][/thead][tbody][tr][td]Data[/td][/tr][/tbody][/table]
Forms:
  [form action="/submit" method="POST"]
    [input type="text" name="name" placeholder="Name" required]
    [input type="email" name="email"]
    [input type="password" name="pass"]
    [textarea name="message" rows="5"][/textarea]
    [select name="country"]
      [option value="om"]Oman[/option]
      [option value="in"]India[/option]
    [/select]
    [button type="submit"]Submit[/button]
  [/form]
Divs & Spans: div = block container | span = inline wrapper

CHAPTER 3: SEMANTIC HTML5
header    = page/section header (logo, nav)
nav       = navigation links
main      = main unique content of the page
section   = thematic grouping of content
article   = independent, self-contained content (blog post, card)
aside     = sidebar, related content
footer    = page/section footer
figure + figcaption = images with captions
time datetime="2026-01-01" = machine-readable dates
Why use semantic HTML?
  - Better SEO rankings
  - Better accessibility (screen readers navigate by landmarks)
  - More readable, maintainable code

CHAPTER 4: CSS BASICS
CSS = Cascading Style Sheets. Controls visual appearance.
Syntax:   selector { property: value; }
3 ways to add CSS:
  Inline:   [p style="color: red;"]  (avoid)
  Internal: style block in head
  External: [link rel="stylesheet" href="style.css"]  (best)
CSS Reset:  *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
Colors:     color: #3b82f6 | color: rgb(59,130,246) | color: hsl(217,91%,60%)

CHAPTER 5: CSS SELECTORS
Tag:            p { }              -- all p elements
Class:          .card { }          -- class="card"
ID:             #header { }        -- id="header" (unique, use sparingly)
Descendant:     .nav a { }         -- all a inside .nav
Child:          .nav > a { }       -- direct child a of .nav
Adjacent:       h2 + p { }         -- p immediately after h2
Pseudo-class:
  a:hover { }                      -- on mouse hover
  li:first-child { }               -- first li
  li:last-child { }                -- last li
  li:nth-child(2n) { }             -- every even item
  input:focus { }                  -- focused form field
Pseudo-element:
  p::before { content: "Note: "; } -- insert before content
  p::after { content: "."; }       -- insert after content
  p::first-letter { font-size:2em; }
Attribute:      input[type="email"] { }
Specificity (higher wins): ID > Class > Tag > *
!important: overrides all (use only as last resort)

CHAPTER 6: BOX MODEL
Every element is a rectangular box:
  [margin] [border] [padding] [content] [padding] [border] [margin]
box-sizing: border-box    -- padding+border INSIDE width/height (use this!)
box-sizing: content-box   -- padding+border ADDED to width/height (default)
Properties:
  width: 300px; height: 200px;
  min-width: 200px; max-width: 800px;
  padding: 16px;  padding: 10px 20px;  padding: 5px 10px 15px 20px; (T R B L)
  margin: 0 auto;   (center block element)
  border: 2px solid #ccc;  border-radius: 8px;
  overflow: visible | hidden | scroll | auto

CHAPTER 7: FLEXBOX (1D Layout)
.container {
  display: flex;
  flex-direction: row | column | row-reverse | column-reverse;
  justify-content: flex-start | center | flex-end | space-between | space-around | space-evenly;
  align-items: stretch | center | flex-start | flex-end | baseline;
  flex-wrap: nowrap | wrap | wrap-reverse;
  gap: 16px;     or     row-gap: 10px; column-gap: 20px;
}
.item {
  flex: 1;             -- grow equally to fill space
  flex-grow: 2;        -- grow 2x faster than siblings with flex-grow:1
  flex-shrink: 0;      -- don't shrink below flex-basis
  flex-basis: 200px;   -- starting size
  align-self: center;  -- override parent's align-items for this item
  order: -1;           -- reorder items visually
}
Centering trick: display:flex; justify-content:center; align-items:center;

CHAPTER 8: CSS GRID (2D Layout)
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;      -- 3 columns
  grid-template-columns: repeat(3, 1fr);   -- same
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));  -- responsive!
  grid-template-rows: auto 1fr auto;
  gap: 20px;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}
.item {
  grid-column: 1 / 3;           -- span from col line 1 to line 3
  grid-row: 2 / 4;
  grid-area: sidebar;           -- matches template-areas name
}

CHAPTER 9: CSS POSITIONING
position: static;    -- default, in normal document flow
position: relative;  -- offset from its normal position (top/left/right/bottom)
position: absolute;  -- positioned relative to nearest POSITIONED ancestor
position: fixed;     -- relative to viewport, stays on scroll
position: sticky;    -- normal flow until threshold, then fixed
z-index: 10;         -- stacking order (higher = on top; only on positioned elements)

CHAPTER 10: MODERN CSS
CSS Variables:
  :root { --primary: #3b82f6; --radius: 8px; --font-size: 1rem; }
  .btn { background: var(--primary); border-radius: var(--radius); }
  Dark mode: .dark { --primary: #60a5fa; }

Transitions:
  .btn { transition: background 0.3s ease, transform 0.2s; }
  .btn:hover { background: #2563eb; transform: translateY(-2px); }

Animations:
  @keyframes slideIn {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .card { animation: slideIn 0.6s ease-out both; }
  .card:nth-child(2) { animation-delay: 0.1s; }

Media Queries (Responsive Design):
  @media (max-width: 768px) { .grid { grid-template-columns: 1fr; } }
  @media (min-width: 1024px) { .hero h1 { font-size: 5rem; } }
  Mobile-first principle: style for mobile by default, override for larger.

=================================================
LEARNING PATH: HTML basics > CSS styling > Flexbox > Grid > Responsive > Animations
FREE RESOURCES:
  developer.mozilla.org/en-US/docs/Web/HTML
  css-tricks.com
  flexboxfroggy.com
  cssgridgarden.com
  freecodecamp.org
(c) 2026 Afeef Ummer | afeefbinummer@gmail.com
=================================================`,

js: `=================================================
  JAVASCRIPT - COMPREHENSIVE STUDY NOTES
  Curated by Afeef Ummer | afeefbinummer@gmail.com
=================================================

CHAPTER 1: VARIABLES & DATA TYPES
var   = function-scoped, can re-declare (avoid)
let   = block-scoped, can reassign (use for mutable)
const = block-scoped, cannot reassign (use by default)

Data Types:
  Primitive: string, number, boolean, null, undefined, symbol, bigint
  Reference: object, array, function (all technically objects)
  typeof "hello"  -> "string"
  typeof 42       -> "number"
  typeof true     -> "boolean"
  typeof null     -> "object"  (JS quirk!)
  typeof []       -> "object"  (arrays are objects)
  typeof function -> "function"

Coercion:
  "5" + 3   -> "53"  (string concatenation)
  "5" - 3   -> 2     (numeric conversion)
  === strict equality (no coercion, always prefer this)
  ==  loose equality (coerces types, avoid)

CHAPTER 2: OPERATORS & CONTROL FLOW
Arithmetic: +, -, *, /, % (modulo), ** (exponent)
Comparison: ===, !==, >, <, >=, <=
Logical:    && (AND), || (OR), ! (NOT)
Ternary:    const label = age >= 18 ? "Adult" : "Minor";
Nullish:    const name = user?.name ?? "Anonymous";
Optional:   user?.profile?.avatar  (no error if user is null)

if / else:
  if (score >= 90) { grade = "A"; }
  else if (score >= 70) { grade = "B"; }
  else { grade = "C"; }

switch:
  switch (day) {
    case "Mon": case "Tue": return "Weekday";
    case "Sat": case "Sun": return "Weekend";
    default: return "Unknown";
  }

Loops:
  for (let i = 0; i < 5; i++) { ... }
  while (queue.length > 0) { ... }
  for (const item of array) { ... }      // arrays (use this)
  for (const key in object) { ... }      // object keys

CHAPTER 3: FUNCTIONS
Declaration (hoisted - can call before definition):
  function add(a, b) { return a + b; }

Expression (not hoisted):
  const multiply = function(a, b) { return a * b; };

Arrow function (shorter, no own 'this'):
  const add = (a, b) => a + b;
  const double = n => n * 2;       // single param: no parens
  const getObj = () => ({ id: 1 }); // returning object: wrap in ()

Default params:
  function greet(name = "World") { return "Hello, " + name + "!"; }

Rest params:
  function sum(...nums) { return nums.reduce((a,b) => a+b, 0); }

Spread:
  Math.max(...[1,2,3])         -> 3
  const merged = [...arr1, ...arr2];
  const clone  = {...obj, newKey: "val"};

CHAPTER 4: ARRAYS
const arr = [1, 2, 3, 4, 5];
Push / Pop (end):       arr.push(6)    arr.pop()
Unshift / Shift (start): arr.unshift(0) arr.shift()
indexOf(val):    find index  |  includes(val): true/false
slice(1, 3):     [2,3]  non-destructive  |  splice(1,1): mutates!
join(", "):      "1, 2, 3"              |  arr.reverse() mutates

Higher-Order Methods (all return new array or value, don't mutate):
  arr.map(x => x * 2)           -> [2,4,6,8,10]  transform each
  arr.filter(x => x > 2)        -> [3,4,5]  keep matching
  arr.reduce((acc,x) => acc+x, 0) -> 15  accumulate to one value
  arr.find(x => x > 3)          -> 4    first match or undefined
  arr.findIndex(x => x > 3)     -> 3    index of first match
  arr.some(x => x > 4)          -> true  any match?
  arr.every(x => x > 0)         -> true  all match?
  arr.forEach(x => console.log(x))  -> undefined  side effects only
  arr.flat()                    -> flatten nested arrays
  arr.flatMap(x => [x, x*2])    -> map + flatten

Destructuring:
  const [first, second, ...rest] = arr;
  const [,, third] = arr;  // skip first two

CHAPTER 5: OBJECTS
const user = { name: "Afeef", age: 25, city: "Oman" };
user.name           // dot notation
user["city"]        // bracket notation (use for dynamic keys)
user.email = "a@b.com";  // add
delete user.city;         // remove
"name" in user      // true  (property exists check)

Object.keys(user)    -> ["name","age","city"]
Object.values(user)  -> ["Afeef",25,"Oman"]
Object.entries(user) -> [["name","Afeef"],["age",25],["city","Oman"]]
Object.assign({}, user, { age: 26 })  // shallow merge
const updated = { ...user, age: 26 }; // spread merge (preferred)

Destructuring:
  const { name, age } = user;
  const { name: fullName, email = "none" } = user;  // rename + default

CHAPTER 6: DOM MANIPULATION
Select elements:
  document.getElementById("myId")
  document.querySelector(".myClass")     // first match
  document.querySelectorAll("p")         // all matches (NodeList)

Read / Write content:
  el.textContent = "Hello";              // plain text (safe)
  el.innerHTML = "<b>Hello</b>";         // HTML (XSS risk with user input!)
  el.value                               // form input value

Modify attributes:
  el.setAttribute("src", "img.png");
  el.getAttribute("href");
  el.removeAttribute("disabled");

CSS classes:
  el.classList.add("active");
  el.classList.remove("hidden");
  el.classList.toggle("active");
  el.classList.contains("active");       // true/false

Inline styles:
  el.style.color = "red";
  el.style.backgroundColor = "#000";    // camelCase!

Create & insert:
  const div = document.createElement("div");
  div.textContent = "New element";
  div.classList.add("card");
  document.body.appendChild(div);
  parent.insertBefore(newEl, refEl);
  el.insertAdjacentHTML("beforeend", "[span]text[/span]");
  el.remove();

CHAPTER 7: EVENTS
el.addEventListener("click", function(event) {
  event.preventDefault();     // stop form submit, link navigation
  event.stopPropagation();    // stop event from bubbling up
  console.log(event.target);  // element that triggered the event
  console.log(event.currentTarget); // element with the listener
});

Remove listener: el.removeEventListener("click", handler);

Common events:
  Mouse:    click, dblclick, mouseenter, mouseleave, mousemove, contextmenu
  Keyboard: keydown, keyup (event.key, event.code, event.ctrlKey)
  Form:     focus, blur, change, input, submit
  Window:   DOMContentLoaded, load, resize, scroll
  Touch:    touchstart, touchend, touchmove

Event Delegation (attach ONE listener for many children):
  document.getElementById("list").addEventListener("click", (e) => {
    if (e.target.matches(".list-item")) {
      console.log("Clicked:", e.target.textContent);
    }
  });

CHAPTER 8: ES6+ FEATURES
Template Literals:
  const msg = "Hello " + name + "!";        // old
  const msg = \`Hello \${name}, age \${age}.\`; // template literal (use this)
  Multi-line: const html = \`<div><p>\${text}</p></div>\`;

Modules (in .mjs or with type="module"):
  // utils.js
  export const PI = 3.14;
  export function add(a,b) { return a+b; }
  export default class Calculator { ... }
  // main.js
  import { PI, add } from "./utils.js";
  import Calculator from "./utils.js";
  import * as utils from "./utils.js";

Classes:
  class Animal {
    constructor(name) { this.name = name; }
    speak() { return this.name + " makes a sound."; }
    static create(name) { return new Animal(name); }
  }
  class Dog extends Animal {
    speak() { return this.name + " barks."; }
  }
  const dog = new Dog("Rex");

CHAPTER 9: ASYNC JAVASCRIPT
Callbacks (old pattern):
  setTimeout(() => console.log("Done"), 1000);
Promises:
  fetch("https://api.example.com/users")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
    .finally(() => console.log("Done"));

Async/Await (clean, modern - use this):
  async function getUsers() {
    try {
      const response = await fetch("https://api.example.com/users");
      if (!response.ok) throw new Error("HTTP " + response.status);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Fetch failed:", error.message);
    }
  }

Promise.all (run in parallel):
  const [users, posts] = await Promise.all([
    fetch("/api/users").then(r => r.json()),
    fetch("/api/posts").then(r => r.json())
  ]);

CHAPTER 10: LOCAL STORAGE & CLOSURES
Local Storage (persists after page close):
  localStorage.setItem("user", JSON.stringify({ name: "Afeef" }));
  const user = JSON.parse(localStorage.getItem("user"));
  localStorage.removeItem("user");
  localStorage.clear();

Session Storage (clears when tab closes):
  sessionStorage.setItem("token", "abc123");

Closures (function remembers its outer scope):
  function makeCounter() {
    let count = 0;
    return {
      increment: () => ++count,
      decrement: () => --count,
      value: () => count
    };
  }
  const counter = makeCounter();
  counter.increment();
  counter.increment();
  console.log(counter.value()); // 2
  // count is private - can't access it directly

=================================================
FREE RESOURCES:
  javascript.info (best JS tutorial)
  developer.mozilla.org/en-US/docs/Web/JavaScript
  javascript30.com (30 vanilla JS projects)
  eloquentjavascript.net (free book)
  freecodecamp.org/learn/javascript-algorithms-and-data-structures
(c) 2026 Afeef Ummer | afeefbinummer@gmail.com
=================================================`,

frontend: `=================================================
  FRONTEND DEVELOPMENT - COMPREHENSIVE STUDY NOTES
  Curated by Afeef Ummer | afeefbinummer@gmail.com
=================================================

CHAPTER 1: HOW BROWSERS WORK
1. Enter URL -> DNS lookup -> TCP connection -> HTTP request
2. Server returns HTML
3. Browser parses HTML -> builds DOM (Document Object Model)
4. Parses CSS -> builds CSSOM (CSS Object Model)
5. Combines DOM + CSSOM -> Render Tree
6. Layout (calculate positions/sizes) -> Paint -> Composite
Critical Rendering Path: HTML > CSS > JS > Render
Render blocking: CSS blocks rendering | JS blocks HTML parsing
Use async/defer on script tags:
  [script defer src="app.js"]  -> runs after HTML parsed
  [script async src="app.js"]  -> runs as soon as downloaded

CHAPTER 2: DEV TOOLS (Chrome)
Open: F12 or right-click > Inspect
Tabs:
  Elements: inspect/edit HTML and CSS live
  Console: run JS, see errors/logs
  Network: see all requests (check API calls here)
  Performance: measure render speed, identify bottlenecks
  Application: Local Storage, Session Storage, cookies
  Lighthouse: automated performance/accessibility/SEO audit
Key tricks:
  $0 = currently selected element in console
  console.table(data) = show array/object as table
  toggle device toolbar: Ctrl+Shift+M

CHAPTER 3: GIT & GITHUB
Init & basic workflow:
  git init                          init new repo
  git status                        see changed files
  git add .                         stage all changes
  git add filename.js               stage specific file
  git commit -m "feat: add navbar"  commit with message
  git log --oneline                 see commit history

Branches:
  git branch feature-nav            create branch
  git checkout feature-nav          switch to branch
  git checkout -b feature-nav       create + switch (shortcut)
  git merge feature-nav             merge into current branch
  git branch -d feature-nav         delete branch

Remote (GitHub):
  git remote add origin https://github.com/user/repo.git
  git push -u origin main           push + set upstream
  git pull                          fetch + merge remote changes
  git clone https://github.com/...  clone repo

Commit message convention:
  feat: add user login page
  fix: correct button alignment on mobile
  style: update color variables
  docs: add README section

CHAPTER 4: NPM & BUILD TOOLS
npm (Node Package Manager):
  npm init -y              create package.json
  npm install package-name  install and save to dependencies
  npm install -D package   install as dev dependency
  npm run dev              run "dev" script from package.json
  npm run build            build for production
  npm run test             run tests

package.json scripts:
  "scripts": { "dev": "vite", "build": "vite build" }

Vite (modern, fast build tool):
  npm create vite@latest my-app -- --template react-ts
  cd my-app && npm install && npm run dev
  Instant hot module replacement (HMR)
  Production: npm run build -> dist/ folder

CHAPTER 5: ACCESSIBILITY (A11y)
Why it matters: 1 billion+ people have disabilities. Also helps SEO.
Key principles (POUR): Perceivable, Operable, Understandable, Robust
ARIA attributes:
  aria-label="Close menu"         -- label for screen readers
  aria-hidden="true"              -- hide from screen readers
  aria-expanded="false"           -- state for accordion
  role="button"                   -- override element role
  aria-live="polite"              -- announce dynamic changes
Keyboard navigation:
  All interactive elements must be keyboard accessible
  Tab = navigate forwards | Shift+Tab = backwards
  Enter/Space = activate button
  Ensure focus is visible (don't remove outline without replacing it!)
Semantic HTML IS accessibility:
  Use button not div onclick
  Use nav not div class="nav"
  Alt text: [img alt="Afeef presenting at conference"]
  Empty alt: [img alt=""] for decorative images
Color contrast: text must have 4.5:1 ratio against background

CHAPTER 6: REACT FUNDAMENTALS
Create project: npm create vite@latest my-app -- --template react
Components (building blocks):
  function Button({ text, onClick, disabled = false }) {
    return (
      [button onClick={onClick} disabled={disabled} className="btn"]
        {text}
      [/button]
    );
  }
JSX rules:
  className not class | htmlFor not for
  Self-close: [img /], [input /], [br /]
  Single root element (or use fragment)
  JS expressions: {variable}, {condition && [El /]}, {arr.map(...)}

CHAPTER 7: REACT HOOKS
useState:
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);
  setCount(prev => prev + 1);  // functional update (safe)
  setUser({ ...user, name: "Afeef" });  // spread to update object

useEffect:
  useEffect(() => {
    document.title = "Count: " + count;
  }, [count]);  // runs when count changes
  useEffect(() => {
    const id = setInterval(() => ..., 1000);
    return () => clearInterval(id);  // cleanup on unmount
  }, []);  // [] = runs once on mount

useRef:
  const inputRef = useRef(null);
  [input ref={inputRef} /]
  inputRef.current.focus();  // imperatively focus input

useMemo / useCallback:
  const total = useMemo(() => items.reduce(...), [items]);
  const handler = useCallback(() => ..., [dependency]);

CHAPTER 8: FETCHING DATA IN REACT
useEffect + fetch:
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/users")
      .then(r => r.json())
      .then(data => { setData(data); setLoading(false); });
  }, []);

React Query (better):
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: () => fetch("/api/users").then(r => r.json())
  });

CHAPTER 9: TYPESCRIPT FOR FRONTEND
Why TypeScript: catch bugs at compile time, better IDE support
Types:
  let name: string = "Afeef";
  let age: number = 25;
  let active: boolean = true;
  let items: string[] = ["a","b","c"];
  let user: { name: string; age: number } = { name:"Afeef", age:25 };
Interfaces:
  interface User { id: number; name: string; email?: string; }
Type aliases:
  type ButtonVariant = "primary" | "secondary" | "danger";
Generics:
  function identity<T>(arg: T): T { return arg; }
React types:
  const [count, setCount] = useState<number>(0);
  function Button({ onClick }: { onClick: () => void }) { ... }

CHAPTER 10: PERFORMANCE & DEPLOYMENT
Performance tips:
  Lazy load images:  [img loading="lazy" src="..."]
  Code splitting:    const Page = React.lazy(() => import("./Page"));
  Minimize CSS/JS:   handled by Vite build
  Use WebP images: smaller than JPEG/PNG
  Preload fonts:  [link rel="preload" href="font.woff2" as="font"]
  Lighthouse score: aim for 90+ in all categories

Deployment options:
  Vercel:  git push -> auto deploy. Best for Next.js.
  Netlify: drag drop dist/ folder OR connect GitHub.
  GitHub Pages: free for static sites.
  npm run build -> deploy the dist/ folder.

=================================================
FREE RESOURCES:
  react.dev/learn (official React docs)
  theodinproject.com (full curriculum)
  roadmap.sh/frontend (visual roadmap)
  web.dev/learn (Google's web guides)
  nextjs.org/learn (Next.js tutorial)
(c) 2026 Afeef Ummer | afeefbinummer@gmail.com
=================================================`,

projects: `=================================================
  WEB PROJECTS - COMPREHENSIVE STUDY NOTES
  Curated by Afeef Ummer | afeefbinummer@gmail.com
=================================================

CHAPTER 1: PROJECT PLANNING
Before writing a single line of code:
  1. Define the purpose: what problem does this solve?
  2. Identify users: who will use it?
  3. List features: what are the MUST-HAVE features vs nice-to-have?
  4. Choose tech stack: HTML/CSS/JS? React? Next.js?
  5. Wireframe: sketch the layout (even a rough pencil sketch)
  6. Set up project structure and Git repository
Folder structure (simple project):
  my-project/
    index.html
    style.css
    script.js
    assets/ (images, fonts)
    README.md

CHAPTER 2: STATIC WEBSITES
A static site has: HTML + CSS + maybe some JS (no server needed).
Steps to build a portfolio:
  1. Plan sections: hero, about, projects, skills, contact
  2. Create HTML structure with semantic tags
  3. Add base CSS (variables, reset, typography)
  4. Build layout with Flexbox/Grid
  5. Add hover effects, transitions
  6. Make it responsive with media queries
  7. Optimize images (use WebP, compress)
  8. Deploy to GitHub Pages or Netlify (free)

CHAPTER 3: JAVASCRIPT PROJECTS (BEGINNER)
Calculator:
  - HTML: display + buttons
  - JS: track current input + operation + previous value
  - Handle: click events, clear, equals, decimal, chain operations
Todo List:
  - HTML: input + button + list
  - JS: add item, mark complete (toggle class), delete item
  - Store in localStorage so tasks persist on refresh
Quiz App:
  - Array of question objects { question, options, answer }
  - Display one question at a time
  - Track score, show results at end
  - Use index to navigate questions

CHAPTER 4: API INTEGRATION
Working with public APIs:
  Weather (OpenWeatherMap):
    fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_KEY")
  GitHub User:
    fetch("https://api.github.com/users/afeefbinummer-hub")
  Random Facts:
    fetch("https://uselessfacts.jsph.pl/random.json?language=en")

API Integration Pattern:
  async function fetchWeather(city) {
    const res = await fetch(API_URL + city + "&appid=" + KEY);
    if (!res.ok) throw new Error("City not found");
    return await res.json();
  }
  button.addEventListener("click", async () => {
    try {
      const data = await fetchWeather(input.value);
      displayWeather(data);
    } catch (e) {
      showError(e.message);
    }
  });
Always: show loading state, handle errors, never hardcode API keys in public repos.

CHAPTER 5: REACT PROJECTS (INTERMEDIATE)
Project setup:
  npm create vite@latest my-app -- --template react
  cd my-app && npm install && npm run dev
Recommended structure:
  src/
    components/   (reusable UI: Button, Card, Modal)
    pages/        (route-level components)
    hooks/        (custom hooks: useFetch, useLocalStorage)
    utils/        (helper functions)
    App.jsx
    main.jsx

Weather App in React:
  - useState for city input, weather data, loading, error
  - useEffect or button click to fetch data
  - Display: temperature, description, icon, humidity, wind
  - Bonus: 5-day forecast, dark/light mode toggle

CHAPTER 6: GIT WORKFLOW FOR PROJECTS
Professional workflow:
  git checkout -b feature/add-dark-mode    create feature branch
  (make changes)
  git add .
  git commit -m "feat: implement dark mode toggle"
  git push origin feature/add-dark-mode
  (on GitHub: open Pull Request, review, merge)
  git checkout main
  git pull
Commit message prefixes:
  feat:    new feature
  fix:     bug fix
  style:   formatting, CSS changes
  refactor: code restructure
  docs:    documentation
  chore:   build/config changes

CHAPTER 7: RESPONSIVE DESIGN IN PROJECTS
Mobile-first approach:
  - Write CSS for mobile screens by default
  - Use min-width media queries to enhance for larger screens
Breakpoints (common):
  sm:  640px  (small tablet)
  md:  768px  (tablet)
  lg:  1024px (laptop)
  xl:  1280px (desktop)
Responsive images:
  img { max-width: 100%; height: auto; }
  srcset: serve different sizes based on screen
  Use aspect-ratio: 16/9 to reserve space before image loads
Testing: use Chrome DevTools device toolbar (Ctrl+Shift+M)

CHAPTER 8: DEPLOYMENT
GitHub Pages (static sites):
  1. Push code to GitHub
  2. Settings > Pages > Source: Deploy from branch
  3. Choose /root and save
  4. URL: yourusername.github.io/repo-name
Netlify (recommended):
  1. npm run build
  2. Drag dist/ folder to netlify.com/drop
  OR: Connect GitHub repo -> auto-deploy on every push
Vercel (best for React/Next.js):
  1. npm install -g vercel
  2. vercel (in project folder) -> follow prompts
  OR: Import from GitHub at vercel.com
Custom domain: buy at Namecheap/GoDaddy -> configure DNS records

CHAPTER 9: PROJECT IDEAS BY LEVEL
Beginner (HTML/CSS/JS):
  personal portfolio, tip calculator, color palette generator,
  BMI calculator, birthday countdown, random quote generator
Intermediate (React + API):
  weather dashboard, GitHub profile viewer, movie search (TMDB),
  currency converter, news feed, recipe finder (Spoonacular API)
Advanced (Full-Stack / Next.js):
  blog with CMS (Sanity/Contentful), real-time chat (Socket.io),
  e-commerce with cart (Stripe payments), job board, social media clone

CHAPTER 10: MAKING YOUR PORTFOLIO STAND OUT
  - 3-5 quality projects > 15 mediocre ones
  - Each project needs: live demo + GitHub source code
  - Write a good README: what it does, tech stack, how to run locally
  - Include screenshots/GIFs in README
  - Show responsive design (mobile screenshots)
  - Add one project that solves a REAL problem you had
  - Contribute to open source (even documentation fixes count)
  - Keep your GitHub green (commit consistently)

=================================================
FREE RESOURCES:
  frontendmentor.io (real design challenges)
  codepen.io (code playground)
  javascript30.com (30 vanilla JS projects)
  100daysofcode.com (accountability challenge)
  theodinproject.com (full project curriculum)
(c) 2026 Afeef Ummer | afeefbinummer@gmail.com
=================================================`,

sql: `=================================================
  SQL - COMPREHENSIVE STUDY NOTES
  Curated by Afeef Ummer | afeefbinummer@gmail.com
=================================================

CHAPTER 1: SELECT BASICS
SQL = Structured Query Language. Used to interact with relational databases.
Basic SELECT:
  SELECT *  FROM customers;                   -- all columns
  SELECT name, email, city FROM customers;    -- specific columns
  SELECT DISTINCT country FROM customers;     -- no duplicates
  SELECT name AS full_name FROM customers;    -- alias column
  SELECT 10 * 5 AS result;                    -- arithmetic
  SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM employees;

CHAPTER 2: WHERE & FILTERING
  SELECT * FROM orders WHERE status = 'completed';
  SELECT * FROM products WHERE price > 50;
  SELECT * FROM users WHERE age >= 18 AND city = 'Oman';
  SELECT * FROM users WHERE city = 'Oman' OR city = 'Dubai';
  SELECT * FROM products WHERE price BETWEEN 10 AND 100;
  SELECT * FROM users WHERE country IN ('Oman', 'India', 'UAE');
  SELECT * FROM users WHERE country NOT IN ('USA', 'UK');
  SELECT * FROM customers WHERE email LIKE '%@gmail.com';
  SELECT * FROM products WHERE name LIKE 'Pro%';   -- starts with Pro
  SELECT * FROM orders WHERE notes IS NULL;
  SELECT * FROM orders WHERE notes IS NOT NULL;
  SELECT COALESCE(phone, 'No phone') AS contact FROM users;  -- NULL substitute
  SELECT NULLIF(discount, 0) FROM products;  -- returns NULL if equal

CHAPTER 3: ORDER BY, LIMIT & DISTINCT
  SELECT * FROM products ORDER BY price ASC;             -- ascending (default)
  SELECT * FROM products ORDER BY price DESC;            -- descending
  SELECT * FROM orders ORDER BY order_date DESC LIMIT 10; -- latest 10
  SELECT * FROM products ORDER BY category ASC, price DESC; -- multi-sort
  SELECT * FROM customers LIMIT 5 OFFSET 10;             -- pagination (rows 11-15)

CHAPTER 4: AGGREGATE FUNCTIONS & GROUP BY
Aggregates:
  SELECT COUNT(*) FROM orders;                  -- total rows
  SELECT COUNT(DISTINCT customer_id) FROM orders; -- unique customers
  SELECT SUM(amount) FROM orders;               -- total
  SELECT AVG(price) FROM products;              -- average
  SELECT MIN(price), MAX(price) FROM products;  -- min and max

GROUP BY:
  SELECT category, COUNT(*) AS total, AVG(price) AS avg_price
  FROM products
  GROUP BY category
  ORDER BY total DESC;

HAVING (filter after grouping):
  SELECT customer_id, SUM(amount) AS total_spent
  FROM orders
  GROUP BY customer_id
  HAVING total_spent > 1000
  ORDER BY total_spent DESC;

Rule: WHERE filters ROWS (before grouping). HAVING filters GROUPS (after grouping).

CHAPTER 5: JOINS
INNER JOIN — only matching rows:
  SELECT o.order_id, c.name, o.amount
  FROM orders o
  INNER JOIN customers c ON o.customer_id = c.id;

LEFT JOIN — all rows from left table + matching from right:
  SELECT c.name, o.order_id
  FROM customers c
  LEFT JOIN orders o ON c.id = o.customer_id;
  -- customers with NO orders will still appear (o.order_id = NULL)

RIGHT JOIN — all rows from right table:
  SELECT c.name, o.order_id
  FROM orders o
  RIGHT JOIN customers c ON o.customer_id = c.id;

FULL OUTER JOIN — all rows from both:
  SELECT c.name, o.order_id
  FROM customers c
  FULL OUTER JOIN orders o ON c.id = o.customer_id;

Self Join (same table twice):
  SELECT e.name AS employee, m.name AS manager
  FROM employees e
  LEFT JOIN employees m ON e.manager_id = m.id;

Join multiple tables:
  SELECT o.id, c.name, p.product_name, o.quantity
  FROM orders o
  JOIN customers c ON o.customer_id = c.id
  JOIN products p ON o.product_id = p.id;

CHAPTER 6: SUBQUERIES & CTEs
Subquery in WHERE:
  SELECT name FROM products
  WHERE price > (SELECT AVG(price) FROM products);

Subquery in FROM (derived table):
  SELECT dept, avg_salary FROM (
    SELECT department AS dept, AVG(salary) AS avg_salary
    FROM employees
    GROUP BY department
  ) AS dept_stats
  WHERE avg_salary > 50000;

Subquery in SELECT (scalar):
  SELECT name,
    (SELECT COUNT(*) FROM orders o WHERE o.customer_id = c.id) AS order_count
  FROM customers c;

EXISTS:
  SELECT name FROM customers c
  WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.id);

CTEs (WITH clause) — cleaner, reusable:
  WITH high_value_customers AS (
    SELECT customer_id, SUM(amount) AS total
    FROM orders
    GROUP BY customer_id
    HAVING total > 5000
  )
  SELECT c.name, h.total
  FROM customers c
  JOIN high_value_customers h ON c.id = h.customer_id;

Multiple CTEs:
  WITH monthly AS (...),
       ranked AS (SELECT *, RANK() OVER (...) FROM monthly)
  SELECT * FROM ranked WHERE rank <= 5;

CHAPTER 7: CASE WHEN & NULL HANDLING
CASE WHEN (SQL's if-else):
  SELECT name, salary,
    CASE
      WHEN salary >= 100000 THEN 'Senior'
      WHEN salary >= 60000  THEN 'Mid-level'
      ELSE 'Junior'
    END AS level
  FROM employees;

CASE in GROUP BY aggregation:
  SELECT
    SUM(CASE WHEN status = 'completed' THEN amount ELSE 0 END) AS completed_rev,
    SUM(CASE WHEN status = 'pending'   THEN amount ELSE 0 END) AS pending_rev
  FROM orders;

NULL handling functions:
  COALESCE(a, b, c)  -- returns first non-NULL value
  NULLIF(a, b)       -- returns NULL if a = b, else returns a
  IFNULL(a, 0)       -- MySQL: replace NULL with 0
  NVL(a, 0)          -- Oracle equivalent

CHAPTER 8: DML — INSERT, UPDATE, DELETE
INSERT:
  INSERT INTO products (name, price, category)
  VALUES ('Laptop', 999.99, 'Electronics');

  INSERT INTO products (name, price)
  SELECT name, price * 0.9 FROM sale_items;  -- insert from SELECT

UPDATE:
  UPDATE products SET price = price * 1.1 WHERE category = 'Electronics';
  UPDATE users SET last_login = NOW() WHERE id = 42;

DELETE:
  DELETE FROM orders WHERE status = 'cancelled' AND order_date < '2025-01-01';
  TRUNCATE TABLE temp_logs;  -- fast delete all rows (no WHERE, can't rollback)

CREATE TABLE:
  CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

ALTER TABLE:
  ALTER TABLE products ADD COLUMN stock INT DEFAULT 0;
  ALTER TABLE users MODIFY COLUMN name VARCHAR(200);
  ALTER TABLE orders ADD INDEX idx_customer (customer_id);

CHAPTER 9: WINDOW FUNCTIONS
Syntax: function() OVER (PARTITION BY col ORDER BY col)

ROW_NUMBER — unique sequential row number:
  SELECT name, department, salary,
    ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS row_num
  FROM employees;

RANK vs DENSE_RANK:
  RANK()       -- 1, 2, 2, 4  (gaps after ties)
  DENSE_RANK() -- 1, 2, 2, 3  (no gaps)

LAG / LEAD (access previous/next row):
  SELECT order_date, amount,
    LAG(amount, 1)  OVER (ORDER BY order_date) AS prev_amount,
    LEAD(amount, 1) OVER (ORDER BY order_date) AS next_amount,
    amount - LAG(amount, 1) OVER (ORDER BY order_date) AS change
  FROM orders;

Running totals:
  SELECT order_date, amount,
    SUM(amount) OVER (ORDER BY order_date) AS running_total,
    AVG(amount) OVER (ORDER BY order_date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS rolling_7day_avg
  FROM daily_sales;

NTILE (percentile buckets):
  SELECT name, salary,
    NTILE(4) OVER (ORDER BY salary) AS quartile
  FROM employees;

FIRST_VALUE / LAST_VALUE:
  SELECT name, salary,
    FIRST_VALUE(salary) OVER (PARTITION BY dept ORDER BY salary DESC) AS top_salary
  FROM employees;

CHAPTER 10: PERFORMANCE & BEST PRACTICES
Indexes:
  CREATE INDEX idx_email ON users(email);
  CREATE INDEX idx_cat_price ON products(category, price);  -- composite
  -- Use on: columns in WHERE, JOIN ON, ORDER BY

EXPLAIN (MySQL / PostgreSQL):
  EXPLAIN SELECT * FROM orders WHERE customer_id = 42;
  -- Look for: "type: ALL" = full scan (bad). "type: ref" = index used (good)

Best practices:
  SELECT only needed columns — avoid SELECT *
  Use WHERE early to reduce rows before JOINs
  Avoid functions on indexed columns in WHERE: WHERE YEAR(date) = 2025 (slow)
  Better: WHERE date BETWEEN '2025-01-01' AND '2025-12-31' (uses index)
  Use LIMIT for testing large queries
  Use CTEs for readability on complex queries
  Prefer JOINs over correlated subqueries for performance

Common interview queries:
  -- Top N per group (top 3 products per category):
  SELECT * FROM (
    SELECT *, ROW_NUMBER() OVER (PARTITION BY category ORDER BY sales DESC) AS rn
    FROM products
  ) ranked WHERE rn <= 3;

  -- Month-over-month growth:
  SELECT month, revenue,
    LAG(revenue) OVER (ORDER BY month) AS prev_month,
    ROUND(100.0*(revenue - LAG(revenue) OVER (ORDER BY month))
          / LAG(revenue) OVER (ORDER BY month), 2) AS growth_pct
  FROM monthly_revenue;

=================================================
LEARNING PATH: SELECT > WHERE > GROUP BY > JOINs > Subqueries > CTEs > Window Functions
FREE RESOURCES:
  w3schools.com/sql  (beginner-friendly)
  sqlzoo.net         (interactive practice)
  sqlbolt.com        (structured lessons)
  mode.com/sql-tutorial (professional level)
  leetcode.com/problemset/database (interview prep)
(c) 2026 Afeef Ummer | afeefbinummer@gmail.com
=================================================`,

python: `=================================================
  PYTHON - COMPREHENSIVE STUDY NOTES
  Curated by Afeef Ummer | afeefbinummer@gmail.com
=================================================

CHAPTER 1: VARIABLES & DATA TYPES
Python is dynamically typed — no need to declare types.
  name   = "Afeef"           # str
  age    = 25                # int
  height = 1.75              # float
  active = True              # bool (True/False, capital T/F)
  salary = None              # NoneType (null equivalent)

Type checking:  type(age)        -> <class 'int'>
Type conversion: str(42)         -> "42"
                 int("42")       -> 42
                 float("3.14")   -> 3.14
                 bool(0)         -> False (0, "", [], {}, None = False)

Input / Output:
  name = input("Enter your name: ")   # always returns string
  print("Hello,", name)
  print(f"Hello, {name}! You are {age} years old.")  # f-string (use this)
  print("Value:", age, "Type:", type(age))

Multiple assignment:
  x, y, z = 1, 2, 3
  a = b = c = 0
  x, y = y, x  # swap without temp variable

CHAPTER 2: STRINGS
Creation:  s = "Hello"  or  s = 'Hello'  or  s = """multi
line"""
Indexing:  s[0] = 'H'   s[-1] = 'o'   s[1:4] = 'ell'  s[::-1] = 'olleH'
Length:    len(s) = 5

Common methods:
  s.upper()           -> "HELLO"
  s.lower()           -> "hello"
  s.strip()           -> removes leading/trailing whitespace
  s.lstrip() .rstrip() -> left / right only
  s.replace("l","L")  -> "HeLLo"
  s.split(",")        -> list of substrings
  ",".join(["a","b"]) -> "a,b"
  s.startswith("He")  -> True
  s.endswith("lo")    -> True
  s.find("ll")        -> 2  (index, or -1 if not found)
  s.count("l")        -> 2
  s.zfill(8)          -> "000Hello"  (pad with zeros)
  s.isdigit()         -> False
  s.isalpha()         -> True

f-Strings (Python 3.6+):
  name, price = "Laptop", 999.99
  print(f"Item: {name}, Price: ${price:.2f}")   -> "Item: Laptop, Price: $999.99"
  print(f"{10 * 5}")                            -> "50"
  print(f"{'hello':>10}")                       -> "     hello"  (right-align)

CHAPTER 3: CONTROL FLOW & LOOPS
if / elif / else:
  score = 85
  if score >= 90:
      grade = "A"
  elif score >= 75:
      grade = "B"
  elif score >= 60:
      grade = "C"
  else:
      grade = "F"

Ternary:  grade = "Pass" if score >= 60 else "Fail"

for loop:
  for i in range(5):       print(i)        # 0 1 2 3 4
  for i in range(1, 10, 2): print(i)       # 1 3 5 7 9
  for item in ["a","b","c"]: print(item)
  for i, item in enumerate(["a","b","c"]): print(i, item)
  for k, v in {"x":1,"y":2}.items():  print(k, v)

while loop:
  n = 10
  while n > 0:
      print(n)
      n -= 1

Loop control:
  break     -- exit loop immediately
  continue  -- skip to next iteration
  else      -- runs if loop completes without break

List comprehension (one-liner for loops):
  squares = [x**2 for x in range(10)]
  evens   = [x for x in range(20) if x % 2 == 0]
  matrix  = [[i*j for j in range(3)] for i in range(3)]

CHAPTER 4: DATA STRUCTURES
Lists (ordered, mutable):
  fruits = ["apple", "banana", "cherry"]
  fruits.append("date")         # add to end
  fruits.insert(1, "avocado")   # insert at index
  fruits.remove("banana")       # remove by value
  fruits.pop()                  # remove & return last
  fruits.pop(0)                 # remove & return at index
  fruits.sort()                 # sort in-place
  sorted(fruits)                # returns new sorted list
  fruits.reverse()              # reverse in-place
  fruits.index("apple")         # find index
  len(fruits)                   # length
  "apple" in fruits             # True

Tuples (ordered, immutable):
  coords = (10, 20)
  x, y = coords           # unpacking
  point = (1,)             # single-element tuple needs comma!

Dictionaries (key-value pairs, insertion-ordered in Python 3.7+):
  user = {"name": "Afeef", "age": 25, "city": "Oman"}
  user["email"] = "a@b.com"          # add / update
  user.get("phone", "N/A")           # safe get (no KeyError)
  del user["city"]                   # delete key
  user.keys()    user.values()       user.items()
  "name" in user                     # True
  user.update({"age": 26, "role": "analyst"})
  {k: v for k, v in user.items() if v != "Oman"}  # dict comprehension

Sets (unique, unordered):
  s = {1, 2, 3, 2, 1}  -> {1, 2, 3}
  s.add(4)   s.remove(2)   s.discard(99)  # discard: no error if absent
  a | b  (union)   a & b  (intersection)  a - b  (difference)
  a.issubset(b)    a.issuperset(b)

CHAPTER 5: FUNCTIONS
Basic function:
  def add(a, b):
      return a + b

Default arguments:
  def greet(name, greeting="Hello"):
      return f"{greeting}, {name}!"

*args (variable positional):
  def total(*nums):
      return sum(nums)
  total(1, 2, 3, 4)  -> 10

**kwargs (variable keyword):
  def describe(**info):
      for k, v in info.items():
          print(f"{k}: {v}")
  describe(name="Afeef", role="analyst")

Lambda (anonymous function):
  square = lambda x: x ** 2
  sorted(data, key=lambda x: x["age"])  # sort by key

Built-in functions:
  map(func, iterable)     -> apply func to each item
  filter(func, iterable)  -> keep items where func is True
  zip(a, b)               -> pair elements from two iterables
  enumerate(iterable)     -> (index, item) pairs
  sorted(iterable, key=..., reverse=True)
  min(), max(), sum(), abs(), round()
  any([False, True, False])  -> True
  all([True, True, True])    -> True

CHAPTER 6: FILE I/O & ERROR HANDLING
Reading files:
  with open("data.txt", "r") as f:
      content = f.read()           # entire file as string
  with open("data.txt") as f:
      lines = f.readlines()        # list of lines

Writing files:
  with open("output.txt", "w") as f:  # "w" overwrites, "a" appends
      f.write("Hello, World!\n")

CSV files:
  import csv
  with open("data.csv") as f:
      reader = csv.DictReader(f)
      for row in reader:
          print(row["name"], row["age"])

  with open("output.csv", "w", newline="") as f:
      writer = csv.DictWriter(f, fieldnames=["name","age"])
      writer.writeheader()
      writer.writerow({"name":"Afeef","age":25})

Error handling:
  try:
      result = 10 / 0
  except ZeroDivisionError:
      print("Cannot divide by zero!")
  except (TypeError, ValueError) as e:
      print(f"Error: {e}")
  except Exception as e:
      print(f"Unexpected error: {e}")
  else:
      print("No error!")      # runs if no exception
  finally:
      print("Always runs")    # cleanup code

Raise your own error:
  def divide(a, b):
      if b == 0:
          raise ValueError("Denominator cannot be zero")
      return a / b

CHAPTER 7: OOP (Object-Oriented Programming)
class definition:
  class Person:
      species = "Human"              # class variable (shared)

      def __init__(self, name, age): # constructor
          self.name = name           # instance variable
          self.age = age

      def greet(self):               # instance method
          return f"Hi, I'm {self.name}!"

      def __str__(self):             # string representation
          return f"Person({self.name}, {self.age})"

      @classmethod
      def from_dict(cls, data):      # create from dict
          return cls(data["name"], data["age"])

      @staticmethod
      def is_adult(age):             # no self or cls
          return age >= 18

Inheritance:
  class Employee(Person):
      def __init__(self, name, age, company):
          super().__init__(name, age)  # call parent __init__
          self.company = company

      def greet(self):                 # override parent method
          return f"Hi, I'm {self.name} at {self.company}."

Usage:
  p = Person("Afeef", 25)
  print(p.greet())               -> "Hi, I'm Afeef!"
  print(p)                       -> "Person(Afeef, 25)"
  print(Person.is_adult(20))     -> True
  isinstance(p, Person)          -> True

CHAPTER 8: PANDAS FOR DATA ANALYSIS
Install: pip install pandas

Import and load:
  import pandas as pd
  df = pd.read_csv("data.csv")
  df = pd.read_excel("data.xlsx")
  df = pd.DataFrame({"name":["A","B"],"age":[25,30]})

Explore data:
  df.head(5)            # first 5 rows
  df.tail(5)            # last 5 rows
  df.shape              # (rows, columns)
  df.dtypes             # column data types
  df.info()             # dtypes + null counts
  df.describe()         # summary stats
  df.columns            # column names
  df.nunique()          # unique count per column
  df.isnull().sum()     # null count per column

Select data:
  df["name"]            # single column (Series)
  df[["name","age"]]    # multiple columns (DataFrame)
  df.iloc[0]            # first row by position
  df.iloc[0:5, 1:3]     # rows 0-4, cols 1-2
  df.loc[df["age"] > 25]  # filter rows

Clean data:
  df.dropna()                          # drop rows with any null
  df.fillna(0)                         # fill null with 0
  df.fillna(df["age"].mean())          # fill with mean
  df.drop_duplicates()                 # remove duplicate rows
  df["age"] = df["age"].astype(int)    # change type
  df.rename(columns={"old":"new"})     # rename column
  df.drop(columns=["col1","col2"])     # remove columns

Transform:
  df.sort_values("age", ascending=False)
  df.groupby("city")["salary"].mean()  # average salary per city
  df.groupby("dept").agg({"salary":"mean","age":"max"})
  df["bonus"] = df["salary"] * 0.1    # new calculated column
  df["category"] = df["age"].apply(lambda x: "Senior" if x>40 else "Junior")
  df.pivot_table(values="sales", index="region", columns="year", aggfunc="sum")
  pd.merge(df1, df2, on="customer_id", how="left")

Export:
  df.to_csv("output.csv", index=False)
  df.to_excel("output.xlsx", index=False)

CHAPTER 9: NUMPY & VISUALIZATION
NumPy:
  import numpy as np
  a = np.array([1,2,3,4,5])
  b = np.zeros((3,3))           # 3x3 zeros matrix
  c = np.ones((2,4))            # 2x4 ones matrix
  d = np.arange(0, 10, 2)       # [0,2,4,6,8]
  e = np.linspace(0,1,5)        # [0, .25, .5, .75, 1.0]
  a.mean()  a.std()  a.sum()  a.min()  a.max()
  a * 2     # element-wise multiply
  a + b     # element-wise add (broadcast)
  np.dot(a, b)  # matrix multiplication
  a.reshape(5,1)  a.T  # reshape and transpose

Matplotlib:
  import matplotlib.pyplot as plt
  plt.figure(figsize=(10,6))
  plt.plot(x, y, color='blue', linewidth=2, label='Revenue')
  plt.bar(categories, values, color='steelblue')
  plt.scatter(x, y, alpha=0.5)
  plt.hist(data, bins=20, edgecolor='black')
  plt.title("Sales Trend")
  plt.xlabel("Month")  plt.ylabel("Amount")
  plt.legend()  plt.grid(True, alpha=0.3)
  plt.tight_layout()
  plt.savefig("chart.png", dpi=150)
  plt.show()

Seaborn:
  import seaborn as sns
  sns.set_theme(style="darkgrid")
  sns.heatmap(df.corr(), annot=True, cmap='coolwarm')
  sns.boxplot(x="category", y="price", data=df)
  sns.scatterplot(x="age", y="salary", hue="dept", data=df)
  sns.histplot(df["salary"], kde=True, bins=30)
  sns.barplot(x="city", y="revenue", data=df, estimator=sum)

CHAPTER 10: APIs & AUTOMATION
HTTP Requests:
  import requests
  r = requests.get("https://api.github.com/users/afeefbinummer-hub")
  print(r.status_code)      # 200 = success
  data = r.json()           # parse JSON response
  print(data["name"], data["public_repos"])

  # POST request:
  r = requests.post("https://api.example.com/login",
      json={"username":"admin","password":"secret"},
      headers={"Content-Type":"application/json"})

Automation (file & folder operations):
  import os, shutil, pathlib
  os.listdir(".")               # list current directory
  os.makedirs("reports/2026", exist_ok=True)
  os.rename("old.txt", "new.txt")
  os.remove("temp.txt")
  shutil.copy("src.csv", "backup/src.csv")
  from pathlib import Path
  p = Path("data") / "2026" / "sales.csv"  # cross-platform path
  p.exists()  p.suffix  p.stem  p.parent

Scheduling (run at intervals):
  import time
  while True:
      print("Running task...")
      do_something()
      time.sleep(3600)   # wait 1 hour

  # For production: use APScheduler or cron (Linux) or Task Scheduler (Windows)

Environment variables (hide secrets):
  import os
  api_key = os.environ.get("API_KEY", "default")
  # Set: export API_KEY=abc123  (Linux/Mac)  or  set API_KEY=abc123  (Windows)

=================================================
LEARNING PATH: Variables > Strings > Control Flow > Lists/Dicts > Functions > OOP > Pandas > Visualization > APIs
FREE RESOURCES:
  docs.python.org/3/tutorial  (official)
  realpython.com              (tutorials for all levels)
  kaggle.com/learn/python     (free interactive)
  cs50.harvard.edu/python     (Harvard course)
  pythontutor.com             (visualize execution)
(c) 2026 Afeef Ummer | afeefbinummer@gmail.com
=================================================`

};
