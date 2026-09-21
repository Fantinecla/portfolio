// =========================================================
// BARRE DE MENU — injectée sur toutes les pages (accueil + détails projet)
// pour éviter de dupliquer son markup dans chaque fichier HTML.
// Le conteneur cible précise sa profondeur via data-root (ex: "../" depuis un
// sous-dossier de projet), utilisé pour reconstruire les liens/chemins d'assets.
// =========================================================
(function initNavbar() {
  const mount = document.getElementById('navbar');
  if (!mount) return;

  const root = mount.dataset.root || './';
  const homeHref = root === './' ? '#' : root + 'index.html';
  const anchor = (id) => (root === './' ? '#' + id : root + 'index.html#' + id);

  mount.outerHTML = `
    <header class="navbar">
      <div class="navbar-inner">
        <a href="${homeHref}" class="navbar-logo" aria-label="Fantine Figuet — Accueil">
          <img src="${root}assets/images/logo_icon.svg" alt="Fantine Figuet" class="navbar-logo-icon">
          <span class="navbar-logo-text">Fantine Figuet</span>
        </a>
        <nav class="navbar-links">
          <a href="${anchor('qui-suis-je')}" data-i18n="nav.about">Qui suis-je</a>
          <a href="${anchor('travail')}" data-i18n="nav.work">Mon travail</a>
          <a href="${anchor('competences')}" data-i18n="nav.skills">Compétences</a>
          <a href="${anchor('contact')}" data-i18n="nav.contact">Contact</a>
          <div class="navbar-lang-dropdown">
            <button type="button" class="navbar-lang-toggle" aria-haspopup="true" aria-expanded="false">
              <span class="navbar-lang-toggle-label">FR</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <div class="navbar-lang-options">
              <button type="button" class="lang-btn" data-lang="fr">Français</button>
              <button type="button" class="lang-btn" data-lang="en">English</button>
            </div>
          </div>
        </nav>
        <div class="navbar-right">
          <div class="lang-switch" role="group" aria-label="Choix de la langue / Language">
            <button type="button" class="lang-btn" data-lang="fr">FR</button>
            <button type="button" class="lang-btn" data-lang="en">EN</button>
          </div>
          <button type="button" class="navbar-toggle" aria-label="Ouvrir le menu" aria-expanded="false">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 6h18M3 12h18M3 18h18" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  `;

  // Menu déroulant : n'apparaît (via CSS) qu'à partir du moment où les liens
  // ne tiennent plus sur une ligne. Ferme au clic sur un lien ou en dehors.
  const toggle = document.querySelector('.navbar-toggle');
  const links = document.querySelector('.navbar-links');

  function closeMenu() {
    links.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (e) => {
    if (!document.querySelector('.navbar').contains(e.target)) closeMenu();
  });

  // Sous-menu déroulant pour la langue, à l'intérieur du menu déroulant mobile
  const langToggle = document.querySelector('.navbar-lang-toggle');
  const langLabel = document.querySelector('.navbar-lang-toggle-label');
  const langOptions = document.querySelector('.navbar-lang-options');

  function closeLangDropdown() {
    langOptions.classList.remove('is-open');
    langToggle.setAttribute('aria-expanded', 'false');
  }

  function readSavedLang() {
    try {
      return localStorage.getItem('lang');
    } catch (err) {
      return null;
    }
  }

  langLabel.textContent = (readSavedLang() || 'fr').toUpperCase();

  langToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = langOptions.classList.toggle('is-open');
    langToggle.setAttribute('aria-expanded', String(isOpen));
  });

  langOptions.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      langLabel.textContent = btn.dataset.lang.toUpperCase();
      closeLangDropdown();
    });
  });

  document.addEventListener('click', (e) => {
    if (!langToggle.contains(e.target) && !langOptions.contains(e.target)) closeLangDropdown();
  });
})();
