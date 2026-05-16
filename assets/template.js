/* ============================================
   CODER TRADER - TEMPLATE LOADER
   Injects navbar and footer into every page.
   Edit the NAVBAR_HTML and FOOTER_HTML strings
   to update the template across the whole site.
   ============================================ */

(function () {
  const SKOOL_URL = 'https://www.skool.com/coder-trader';

  // Build a relative path to the site root from the current page's location.
  // Works whether the repo is served from / or a subdirectory like /public_content/.
  const depth = (window.location.pathname.replace(/\/[^/]*$/, '').match(/\//g) || []).length;
  const ROOT = depth <= 1 ? './' : '../'.repeat(depth - 1);
  const HOME = ROOT + 'index.html';

  const NAVBAR_HTML = `
    <nav class="site-nav">
      <div class="site-nav__inner">
        <a href="${HOME}" class="site-nav__brand">
          <span class="dot"></span>
          CODER<span style="color: var(--accent);">·</span>TRADER
        </a>
        <div class="site-nav__links">
          <a href="${SKOOL_URL}" class="site-nav__cta" target="_blank" rel="noopener">Join Skool</a>
        </div>
      </div>
    </nav>
  `;

  const FOOTER_HTML = `
    <footer class="site-footer">
      <div class="site-footer__inner">
        <span class="site-footer__brand">// CODER_TRADER</span>
        <span>© ${new Date().getFullYear()} — Built for traders who code</span>
        <div class="site-footer__links">
          <a href="${HOME}">Posts</a>
          <a href="${SKOOL_URL}" target="_blank" rel="noopener">Skool</a>
        </div>
      </div>
    </footer>
  `;

  function inject() {
    // Insert navbar at the very top of body
    document.body.insertAdjacentHTML('afterbegin', NAVBAR_HTML);
    // Insert footer at the very bottom of body
    document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

    // If page has a [data-back-to-contents] attribute, prepend a back link
    const main = document.querySelector('main.site-main');
    if (main && main.dataset.backToContents !== undefined) {
      const back = document.createElement('a');
      back.href = HOME;
      back.className = 'back-link';
      back.textContent = 'Back to all posts';
      main.insertBefore(back, main.firstChild);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
