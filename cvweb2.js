const fs = require('fs');
let c = fs.readFileSync('c:/Users/Afeef/OneDrive/Desktop/portfolio/con.html', 'utf8');

// ── Add CSS before "SERVICE REQUEST MODALS" ──
const cssInsert = `/* ── CV/WEB PACKAGE MODAL ── */
.pkg-modal{max-width:680px}
.pkg-modal .svc-modal-body{padding:0}
.pkg-slider-wrap{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none}
.pkg-slider-wrap::-webkit-scrollbar{display:none}
.pkg-slide{flex:0 0 100%;scroll-snap-align:start;padding:1.4rem}
.pkg-dots{display:flex;justify-content:center;gap:.4rem;padding:.5rem 0 .9rem}
.pkg-dot{width:7px;height:7px;border-radius:50%;background:var(--border);border:none;cursor:pointer;padding:0;transition:background .2s,transform .2s}
.pkg-dot.active{background:var(--blue);transform:scale(1.25)}
.pkg-nav{display:flex;align-items:center;justify-content:space-between;padding:.65rem 1.4rem .2rem;border-bottom:1px solid var(--border)}
.pkg-nav-arrow{background:var(--off);border:1px solid var(--border);border-radius:var(--r-sm);padding:.32rem .65rem;cursor:pointer;font-size:.82rem;transition:all .2s;font-family:'DM Sans',sans-serif}
.pkg-nav-arrow:hover{background:var(--blue-light);border-color:var(--blue)}
.pkg-nav-arrow:disabled{opacity:.3;cursor:not-allowed}
.pkg-nav-label{font-size:.76rem;font-weight:600;color:var(--text-muted)}
.pkg-inner{background:var(--off);border:1.5px solid var(--border);border-radius:var(--r);padding:1.15rem;transition:border-color .2s}
.pkg-badge-sm{display:inline-flex;align-items:center;gap:.35rem;font-size:.7rem;font-weight:700;padding:.2rem .6rem;border-radius:100px;margin-bottom:.55rem}
.pkg-title{font-family:'Fraunces',serif;font-size:1.1rem;font-weight:700;color:var(--navy);margin-bottom:.15rem}
.pkg-tagline-sm{font-size:.77rem;color:var(--text-muted);margin-bottom:.7rem;line-height:1.4}
.pkg-price-sm{font-family:'Fraunces',serif;font-size:1.9rem;font-weight:700;color:var(--navy);line-height:1;margin-bottom:.7rem}
.pkg-price-sm sup{font-size:.82rem;vertical-align:top;margin-top:.3rem;display:inline-block}
.pkg-price-sm small{font-family:'DM Sans',sans-serif;font-size:.68rem;font-weight:400;color:var(--text-muted);display:block;margin-top:1px}
.pkg-feats-row{display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-bottom:.85rem}
.pkg-feat-grp-title{font-size:.63rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--text-muted);margin-bottom:.35rem;display:flex;align-items:center;gap:.3rem}
.pkg-feat-grp-title::after{content:'';flex:1;height:1px;background:var(--border)}
.pkg-feat-list{list-style:none;display:flex;flex-direction:column;gap:.25rem}
.pkg-feat-list li{font-size:.74rem;color:var(--text-soft);display:flex;gap:.3rem;align-items:flex-start;line-height:1.3}
.pkg-feat-list li::before{content:'✓';font-weight:700;font-size:.63rem;flex-shrink:0;margin-top:1px}
.pkg-best{font-size:.7rem;color:var(--text-muted);margin-bottom:.9rem;font-style:italic}
.pkg-select-btn{display:block;width:100%;text-align:center;padding:.65rem;border-radius:var(--r-sm);font-weight:700;font-size:.83rem;cursor:pointer;border:none;font-family:'DM Sans',sans-serif;transition:all .2s}
.cvweb-form-wrap{padding:1.1rem 1.4rem}
.cvweb-back-btn{background:none;border:none;cursor:pointer;font-size:.78rem;color:var(--blue);font-family:'DM Sans',sans-serif;font-weight:600;display:flex;align-items:center;gap:.3rem;padding:0;margin-bottom:.9rem;transition:color .2s}
.cvweb-back-btn:hover{color:var(--navy)}
.cvweb-pkg-bar{background:var(--off);border:1px solid var(--border);border-radius:var(--r-sm);padding:.55rem .9rem;margin-bottom:.9rem;display:flex;align-items:center;justify-content:space-between}
.cvweb-pkg-bar-name{font-size:.8rem;font-weight:700;color:var(--navy)}
.cvweb-pkg-bar-price{font-family:'Fraunces',serif;font-size:.95rem;font-weight:700;color:var(--blue)}
.file-upload-field{background:var(--off);border:1.5px dashed var(--border-dark);border-radius:var(--r-sm);padding:.8rem 1rem;text-align:center;cursor:pointer;transition:border-color .2s,background .2s}
.file-upload-field:hover{border-color:var(--blue);background:var(--blue-light)}
.file-upload-field input[type=file]{display:none}
.file-upload-label{font-size:.78rem;color:var(--text-muted);display:flex;align-items:center;justify-content:center;gap:.5rem;cursor:pointer}
.file-name-display{font-size:.73rem;color:var(--blue);margin-top:.25rem;display:none}
.existing-toggles{display:flex;flex-direction:column;gap:.35rem}
.cw-toggle-row{display:flex;align-items:center;justify-content:space-between;padding:.48rem .7rem;background:var(--off);border:1.5px solid var(--border);border-radius:var(--r-sm);cursor:pointer;transition:border-color .2s}
.cw-toggle-row:hover{border-color:var(--blue-light)}
.cw-toggle-row-label{font-size:.8rem;color:var(--text-soft)}
.cw-toggle-sw{width:32px;height:17px;border-radius:100px;background:var(--border);position:relative;transition:background .2s;flex-shrink:0}
.cw-toggle-sw::after{content:'';position:absolute;top:2px;left:2px;width:13px;height:13px;border-radius:50%;background:#fff;transition:transform .2s;box-shadow:0 1px 3px rgba(0,0,0,.18)}
.cw-toggle-row.on .cw-toggle-sw{background:var(--blue)}
.cw-toggle-row.on .cw-toggle-sw::after{transform:translateX(15px)}
.compare-toggle-btn{width:100%;display:flex;align-items:center;justify-content:space-between;background:var(--off);border:1px solid var(--border);border-radius:var(--r-sm);padding:.6rem .9rem;cursor:pointer;font-size:.8rem;font-weight:600;color:var(--navy);font-family:'DM Sans',sans-serif;transition:background .2s;margin:.55rem 0}
.compare-toggle-btn:hover{background:var(--blue-light)}
.compare-chevron{transition:transform .25s;font-size:.62rem}
.compare-toggle-btn.open .compare-chevron{transform:rotate(180deg)}
.compare-collapse-area{max-height:0;overflow:hidden;transition:max-height .4s ease}
.compare-collapse-area.open{max-height:520px}
`;

c = c.replace('/* ── SERVICE REQUEST MODALS ── */', cssInsert + '/* ── SERVICE REQUEST MODALS ── */');
console.log('CSS added');

// ── Add modal HTML + JS before </body> ──
const modalHtml = `
<!-- ── CV/WEB PACKAGE MODAL ── -->
<div class="svc-modal-overlay" id="modal-cvweb" onclick="if(event.target===this)closeSvcModal('cvweb')">
  <div class="svc-modal pkg-modal">
    <div class="svc-modal-hdr">
      <span class="svc-modal-title" id="cvweb-modal-title">🌐 Choose Your Package</span>
      <button class="svc-modal-close" onclick="closeSvcModal('cvweb')">✕</button>
    </div>
    <!-- STEP 1: Package Slider -->
    <div id="cvweb-step1">
      <div class="pkg-nav">
        <button class="pkg-nav-arrow" id="pkg-prev" onclick="slidePkg(-1)" disabled>&#8592;</button>
        <span class="pkg-nav-label" id="pkg-nav-label">1 / 3</span>
        <button class="pkg-nav-arrow" id="pkg-next" onclick="slidePkg(1)">&#8594;</button>
      </div>
      <div class="pkg-slider-wrap" id="pkgSlider">
        <!-- BASIC -->
        <div class="pkg-slide">
          <div class="pkg-inner">
            <div class="pkg-badge-sm basic">🥉 Basic</div>
            <div class="pkg-title">Basic Package</div>
            <div class="pkg-tagline-sm">Start your professional journey with a clean and modern CV or website.</div>
            <div class="pkg-price-sm"><sup>OMR </sup>5<small>one-time payment</small></div>
            <div class="pkg-feats-row">
              <div>
                <div class="pkg-feat-grp-title">CV Services</div>
                <ul class="pkg-feat-list" style="--c:var(--navy)">
                  <li>Professional CV Design</li><li>ATS-Friendly Resume</li><li>PDF Format</li><li>1 Revision</li>
                </ul>
              </div>
              <div>
                <div class="pkg-feat-grp-title">Website Services</div>
                <ul class="pkg-feat-list">
                  <li>Single Landing Page</li><li>Mobile Responsive</li><li>Contact Form</li><li>Basic SEO</li>
                </ul>
              </div>
            </div>
            <div class="pkg-best">Best for: Students, fresh graduates, job seekers</div>
            <button class="pkg-select-btn" style="background:var(--navy);color:#fff" onclick="selectPkg('Basic Package','OMR 5','basic')">Get Basic — 5 OMR</button>
          </div>
        </div>
        <!-- PREMIUM -->
        <div class="pkg-slide">
          <div class="pkg-inner" style="border-color:var(--blue)">
            <div class="pkg-badge-sm premium">🥈 Premium</div>
            <div class="pkg-title">Premium Package</div>
            <div class="pkg-tagline-sm">Stand out from the crowd with advanced designs and professional branding.</div>
            <div class="pkg-price-sm"><sup>OMR </sup>10<small>one-time payment</small></div>
            <div class="pkg-feats-row">
              <div>
                <div class="pkg-feat-grp-title">CV Services</div>
                <ul class="pkg-feat-list">
                  <li>Modern Premium CV</li><li>ATS Optimization</li><li>Cover Letter</li><li>LinkedIn Optimization</li><li>3 Revisions</li>
                </ul>
              </div>
              <div>
                <div class="pkg-feat-grp-title">Website Services</div>
                <ul class="pkg-feat-list">
                  <li>Multi-Page (3–5 Pages)</li><li>Responsive Design</li><li>Contact Form</li><li>Gallery / Portfolio</li><li>Basic SEO</li><li>Social Media Links</li>
                </ul>
              </div>
            </div>
            <div class="pkg-best">Best for: Professionals, freelancers, small businesses</div>
            <button class="pkg-select-btn" style="background:var(--blue);color:#fff" onclick="selectPkg('Premium Package','OMR 10','premium')">Get Premium — 10 OMR</button>
          </div>
        </div>
        <!-- DIAMOND -->
        <div class="pkg-slide">
          <div class="pkg-inner" style="border-color:var(--gold)">
            <div class="pkg-badge-sm diamond">💎 Diamond</div>
            <div class="pkg-title">Diamond Package</div>
            <div class="pkg-tagline-sm">The ultimate solution for businesses and premium clients seeking a powerful digital presence.</div>
            <div class="pkg-price-sm"><sup>OMR </sup>15<small>one-time payment</small></div>
            <div class="pkg-feats-row">
              <div>
                <div class="pkg-feat-grp-title">CV Services</div>
                <ul class="pkg-feat-list">
                  <li>Executive-Level CV</li><li>ATS Optimization</li><li>Cover Letter</li><li>LinkedIn Optimization</li><li>Portfolio Website</li><li>Unlimited Revisions</li>
                </ul>
              </div>
              <div>
                <div class="pkg-feat-grp-title">Website Services</div>
                <ul class="pkg-feat-list">
                  <li>Custom Website Design</li><li>Admin Dashboard</li><li>Database Integration</li><li>Login System</li><li>Payment Gateway</li><li>Advanced SEO</li><li>Priority Support</li>
                </ul>
              </div>
            </div>
            <div class="pkg-best">Best for: Businesses, entrepreneurs, premium clients</div>
            <button class="pkg-select-btn" style="background:var(--gold);color:#fff" onclick="selectPkg('Diamond Package','OMR 15','diamond')">Get Diamond — 15 OMR</button>
          </div>
        </div>
      </div>
      <div class="pkg-dots">
        <button class="pkg-dot active" onclick="goToPkg(0)"></button>
        <button class="pkg-dot" onclick="goToPkg(1)"></button>
        <button class="pkg-dot" onclick="goToPkg(2)"></button>
      </div>
    </div>

    <!-- STEP 2: Request Form -->
    <div id="cvweb-step2" style="display:none">
      <div class="cvweb-form-wrap">
        <button class="cvweb-back-btn" onclick="showPkgStep(1)">&#8592; Back to packages</button>
        <div class="cvweb-pkg-bar">
          <span class="cvweb-pkg-bar-name" id="cw-pkg-name">Basic Package</span>
          <span class="cvweb-pkg-bar-price" id="cw-pkg-price">OMR 5</span>
        </div>
        <form class="form" id="cvwebForm" novalidate>
          <input type="hidden" id="cw-pkg-hidden" name="package"/>
          <div class="form-row">
            <div class="field" id="cwf-name"><label>Full Name *</label><input type="text" id="cw-name" placeholder="Your name"/><span class="field-error">Required</span></div>
            <div class="field" id="cwf-email"><label>Email *</label><input type="email" id="cw-email" placeholder="you@email.com"/><span class="field-error">Valid email required</span></div>
          </div>
          <div class="form-row">
            <div class="field"><label>WhatsApp / Phone</label><input type="tel" id="cw-phone" placeholder="+968 ..."/></div>
            <div class="field"><label>Deadline</label><input type="date" id="cw-date"/></div>
          </div>

          <!-- Existing Content -->
          <div class="form-section">
            <div class="form-section-label">Existing Content <span class="fs-new">Optional</span></div>
            <div class="existing-toggles">
              <div class="cw-toggle-row" id="cw-t-cv" onclick="cwToggle(this,'cw-has-cv')">
                <span class="cw-toggle-row-label">I have an old CV to update</span>
                <div class="cw-toggle-sw"></div>
              </div>
              <input type="hidden" id="cw-has-cv" name="has_cv" value="No"/>
              <div class="cw-toggle-row" id="cw-t-li" onclick="cwToggle(this,'cw-has-li')">
                <span class="cw-toggle-row-label">I have a LinkedIn profile</span>
                <div class="cw-toggle-sw"></div>
              </div>
              <input type="hidden" id="cw-has-li" name="has_linkedin" value="No"/>
              <div class="cw-toggle-row" id="cw-t-ph" onclick="cwToggle(this,'cw-has-ph')">
                <span class="cw-toggle-row-label">I have photos / logo ready</span>
                <div class="cw-toggle-sw"></div>
              </div>
              <input type="hidden" id="cw-has-ph" name="has_photos" value="No"/>
            </div>
          </div>

          <!-- File Upload -->
          <div class="form-section">
            <div class="form-section-label">Upload Files <span class="fs-new">Optional</span></div>
            <div class="file-upload-field" onclick="document.getElementById('cw-files').click()">
              <label class="file-upload-label">
                <input type="file" id="cw-files" multiple accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.zip">
                📎 Click to attach files (CV, photos, logo, references...)
              </label>
              <div class="file-name-display" id="cw-file-names"></div>
            </div>
          </div>

          <!-- Feature Comparison toggle -->
          <button type="button" class="compare-toggle-btn" id="cw-compare-btn" onclick="toggleCompare()">
            📊 Feature Comparison — see what's included <span class="compare-chevron">▾</span>
          </button>
          <div class="compare-collapse-area" id="cw-compare-area">
            <div style="overflow-x:auto;margin-bottom:.5rem">
              <table class="compare-table" style="font-size:.76rem">
                <thead>
                  <tr>
                    <th>Features</th>
                    <th>🥉 Basic<br><small style="font-weight:400;color:var(--text-muted)">5 OMR</small></th>
                    <th>🥈 Premium<br><small style="font-weight:400;color:var(--blue)">10 OMR</small></th>
                    <th>💎 Diamond<br><small style="font-weight:400;color:var(--gold)">15 OMR</small></th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Professional CV</td><td class="ct-yes">✅</td><td class="ct-yes">✅</td><td class="ct-yes">✅</td></tr>
                  <tr><td>ATS Friendly</td><td class="ct-yes">✅</td><td class="ct-yes">✅</td><td class="ct-yes">✅</td></tr>
                  <tr><td>Cover Letter</td><td class="ct-no">❌</td><td class="ct-yes">✅</td><td class="ct-yes">✅</td></tr>
                  <tr><td>LinkedIn Optimization</td><td class="ct-no">❌</td><td class="ct-yes">✅</td><td class="ct-yes">✅</td></tr>
                  <tr><td>Landing Page Website</td><td class="ct-yes">✅</td><td class="ct-yes">✅</td><td class="ct-yes">✅</td></tr>
                  <tr><td>Multi-Page Website</td><td class="ct-no">❌</td><td class="ct-yes">✅</td><td class="ct-yes">✅</td></tr>
                  <tr><td>Database Integration</td><td class="ct-no">❌</td><td class="ct-no">❌</td><td class="ct-yes">✅</td></tr>
                  <tr><td>Login System</td><td class="ct-no">❌</td><td class="ct-no">❌</td><td class="ct-yes">✅</td></tr>
                  <tr><td>Payment Integration</td><td class="ct-no">❌</td><td class="ct-no">❌</td><td class="ct-yes">✅</td></tr>
                  <tr><td>SEO Optimization</td><td>Basic</td><td style="color:var(--blue);font-weight:600">Standard</td><td style="color:var(--gold);font-weight:600">Advanced</td></tr>
                  <tr><td>Revisions</td><td>1</td><td style="color:var(--blue);font-weight:600">3</td><td style="color:var(--gold);font-weight:600">Unlimited</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="field">
            <label>Details / Message</label>
            <textarea id="cw-msg" rows="3" placeholder="Describe your requirements — style, content, references, anything specific..."></textarea>
          </div>
          <button type="submit" class="modal-submit blue-btn" id="cw-submit">Send Request →</button>
        </form>

        <div class="modal-success" id="cw-success">
          <div class="success-icon">✓</div>
          <h3>Request sent!</h3>
          <p>I'll review your <strong id="cw-success-pkg"></strong> request and reply to <strong id="cw-success-email"></strong> within a few hours.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
/* ── CV/WEB package slider ── */
var pkgIdx = 0;
var pkgTotal = 3;

function updatePkgSlider() {
  var slider = document.getElementById('pkgSlider');
  if (slider) slider.scrollTo({ left: pkgIdx * slider.offsetWidth, behavior: 'smooth' });
  document.querySelectorAll('.pkg-dot').forEach(function(d,i){ d.classList.toggle('active', i===pkgIdx); });
  document.getElementById('pkg-prev').disabled = pkgIdx === 0;
  document.getElementById('pkg-next').disabled = pkgIdx === pkgTotal - 1;
  document.getElementById('pkg-nav-label').textContent = (pkgIdx+1) + ' / ' + pkgTotal;
}
function slidePkg(dir) { pkgIdx = Math.max(0, Math.min(pkgTotal-1, pkgIdx+dir)); updatePkgSlider(); }
function goToPkg(i) { pkgIdx = i; updatePkgSlider(); }

function showPkgStep(step) {
  document.getElementById('cvweb-step1').style.display = step===1 ? '' : 'none';
  document.getElementById('cvweb-step2').style.display = step===2 ? '' : 'none';
  if (step===1) document.getElementById('cvweb-modal-title').textContent = '🌐 Choose Your Package';
}

function selectPkg(name, price, tier) {
  document.getElementById('cw-pkg-name').textContent = name;
  document.getElementById('cw-pkg-price').textContent = price;
  document.getElementById('cw-pkg-hidden').value = name;
  document.getElementById('cvweb-modal-title').textContent = '📋 Request: ' + name;
  // set submit button colour by tier
  var btn = document.getElementById('cw-submit');
  btn.style.background = tier==='diamond' ? 'var(--gold)' : tier==='premium' ? 'var(--blue)' : 'var(--navy)';
  showPkgStep(2);
  document.getElementById('cw-date').min = new Date().toISOString().split('T')[0];
}

/* Existing content toggles */
function cwToggle(row, hiddenId) {
  var isOn = row.classList.toggle('on');
  document.getElementById(hiddenId).value = isOn ? 'Yes' : 'No';
}

/* File name display */
document.getElementById('cw-files').addEventListener('change', function() {
  var display = document.getElementById('cw-file-names');
  if (this.files.length > 0) {
    display.style.display = 'block';
    display.textContent = Array.from(this.files).map(function(f){return f.name;}).join(', ');
  } else {
    display.style.display = 'none';
  }
});

/* Feature comparison toggle */
function toggleCompare() {
  var btn = document.getElementById('cw-compare-btn');
  var area = document.getElementById('cw-compare-area');
  btn.classList.toggle('open');
  area.classList.toggle('open');
}

/* CV/Web form submit (multipart for file uploads) */
document.getElementById('cvwebForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  var name  = document.getElementById('cw-name').value.trim();
  var email = document.getElementById('cw-email').value.trim();
  var ok = true;
  if (!name)  { document.getElementById('cwf-name').classList.add('err');  ok=false; } else document.getElementById('cwf-name').classList.remove('err');
  if (!email || !email.includes('@')) { document.getElementById('cwf-email').classList.add('err'); ok=false; } else document.getElementById('cwf-email').classList.remove('err');
  if (!ok) return;
  var btn = document.getElementById('cw-submit');
  btn.disabled = true; btn.textContent = 'Sending…';
  try {
    var fd = new FormData();
    fd.append('service',  'CV / Website — ' + document.getElementById('cw-pkg-hidden').value);
    fd.append('name',     name);
    fd.append('email',    email);
    fd.append('phone',    document.getElementById('cw-phone').value.trim());
    fd.append('deadline', document.getElementById('cw-date').value || 'Not specified');
    fd.append('has_cv',       document.getElementById('cw-has-cv').value);
    fd.append('has_linkedin', document.getElementById('cw-has-li').value);
    fd.append('has_photos',   document.getElementById('cw-has-ph').value);
    fd.append('message',  document.getElementById('cw-msg').value.trim());
    var files = document.getElementById('cw-files').files;
    for (var i=0; i<files.length; i++) { fd.append('attachment', files[i]); }
    await fetch('https://formspree.io/f/xbdbezwy', { method:'POST', headers:{'Accept':'application/json'}, body:fd });
  } catch(err) { console.warn(err); }
  document.getElementById('cw-success-pkg').textContent = document.getElementById('cw-pkg-hidden').value;
  document.getElementById('cw-success-email').textContent = email;
  document.getElementById('cvwebForm').style.display = 'none';
  document.getElementById('cw-success').style.display = 'flex';
  btn.disabled = false;
});

/* sync slider dots on scroll */
document.getElementById('pkgSlider').addEventListener('scroll', function() {
  var idx = Math.round(this.scrollLeft / this.offsetWidth);
  if (idx !== pkgIdx) { pkgIdx = idx; updatePkgSlider(); }
});
</script>
`;

c = c.replace('\n</body>\n</html>', modalHtml + '\n</body>\n</html>');
console.log('Modal HTML+JS added');

fs.writeFileSync('c:/Users/Afeef/OneDrive/Desktop/portfolio/con.html', c, 'utf8');
console.log('ALL DONE');
