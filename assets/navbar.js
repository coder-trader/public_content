(function () {
  const SKOOL_URL = 'https://www.skool.com/coder-trader';

  const CSS = `
    .ct-nav {
      position: sticky;
      top: 0;
      z-index: 9999;
      background: rgba(15, 23, 42, 0.88);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(16, 185, 129, 0.18);
      font-family: 'JetBrains Mono', ui-monospace, monospace;
    }
    .ct-nav__inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 14px 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .ct-nav__brand {
      font-family: 'Fraunces', Georgia, serif;
      font-weight: 900;
      font-size: 18px;
      color: #F8FAFC;
      text-decoration: none;
      letter-spacing: -0.02em;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .ct-nav__dot {
      width: 9px;
      height: 9px;
      background: #10B981;
      border-radius: 50%;
      box-shadow: 0 0 14px #10B981;
      animation: ct-pulse 2.4s ease-in-out infinite;
    }
    @keyframes ct-pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50%       { opacity: 0.5; transform: scale(0.88); }
    }
    .ct-nav__cta {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 9px 18px;
      background: #10B981;
      color: #0F172A;
      font-family: inherit;
      font-weight: 700;
      font-size: 12px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      border-radius: 4px;
      text-decoration: none;
      transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
    }
    .ct-nav__cta:hover {
      background: #34D399;
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(16, 185, 129, 0.35);
    }
    .ct-nav__cta::after { content: ' →'; font-weight: 400; }
  `;

  const HTML = `
    <nav class="ct-nav">
      <div class="ct-nav__inner">
        <a href="/" class="ct-nav__brand">
          <span class="ct-nav__dot"></span>
          CODER<span style="color:#10B981;">·</span>TRADER
        </a>
        <a href="${SKOOL_URL}" class="ct-nav__cta" target="_blank" rel="noopener">Join Skool</a>
      </div>
    </nav>
  `;

  function inject() {
    // Inject styles once
    if (!document.getElementById('ct-nav-styles')) {
      const style = document.createElement('style');
      style.id = 'ct-nav-styles';
      style.textContent = CSS;
      document.head.appendChild(style);
    }
    // Inject navbar at top of body
    document.body.insertAdjacentHTML('afterbegin', HTML);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
