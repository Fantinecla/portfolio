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
          <img src="${root}assets/images/loco_icon.svg" alt="Fantine Figuet" class="navbar-logo-icon">
          <span class="navbar-logo-text">Fantine Figuet</span>
        </a>
        <nav class="navbar-links">
          <a href="${anchor('qui-suis-je')}" data-i18n="nav.about">Qui suis-je</a>
          <a href="${anchor('travail')}" data-i18n="nav.work">Mon travail</a>
          <a href="${anchor('competences')}" data-i18n="nav.skills">Compétences</a>
          <a href="${anchor('contact')}" data-i18n="nav.contact">Contact</a>
        </nav>
        <div class="lang-switch" role="group" aria-label="Choix de la langue / Language">
          <button type="button" class="lang-btn" data-lang="fr">FR</button>
          <button type="button" class="lang-btn" data-lang="en">EN</button>
        </div>
      </div>
    </header>
  `;
})();
