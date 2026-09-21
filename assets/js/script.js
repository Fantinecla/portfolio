// =========================================================
// 0. SÉLECTEUR DE LANGUE (FR / EN)
// =========================================================
(function initI18n() {
  const translations = {
    fr: {
      'nav.about': 'Qui suis-je',
      'nav.work': 'Mon travail',
      'nav.skills': 'Compétences',
      'nav.contact': 'Contact',
      'footer.cv': 'Mon CV',
      'nav_arrows.prev_label': '&larr; Précédent',
      'nav_arrows.next_label': 'Suivant &rarr;',
      'gallery.title': "Galerie",
      'gallery.hifi': 'Hi-Fi',
      'gallery.lowfi': 'Low-Fi',
      'info.type_label': 'Type',
      'info.role_label': 'Rôle',
      'info.year_label': 'Année',
      'info.tools_label': 'Outils',

      'hero.tagline': '<em>Curieux et curieuse</em>',

      'about.title': 'Qui <em>suis-je ?</em>',
      'about.p1': "Passionnée par les comportements humains et la façon dont nous interagissons avec ce qui nous entoure, je conçois des expériences numériques centrées sur l'utilisateur, à la croisée de la psychologie, des sciences cognitives et du design. Curieuse de nature, j'aime comprendre le \"pourquoi\" avant de dessiner le \"comment\".",
      'about.p2': "Diplômée d'un Master en Sciences Cognitives, ma formation m'a aussi amenée à l'intelligence artificielle, la programmation et l'analyse de données. Je travaille aujourd'hui sur des projets variés, de la recherche utilisateur à la conception d'interfaces ou d'expériences, toujours avec la même envie : créer des expériences simples, utiles et agréables.",

      'work.title': 'Mon <em>travail...</em>',
      'work.hookit.category': 'UX/UI Design &amp; Application mobile',
      'work.hookit.title': "Hook'It",
      'work.esante.category': 'Application mobile',
      'work.esante.title': 'Yee-Health',
      'work.blackbox.category': 'Game Jam &middot; Jeu narratif (RPG Maker)',
      'work.blackbox.title': 'Blackbox',

      'skills.title': 'Mes <em>compétences</em>',
      'skills.cat.language': 'Langage',
      'skills.cat.framework': 'Framework',
      'skills.cat.data': 'Analyse et traitement de données',
      'skills.cat.design': 'Design',
      'skills.cat.other': 'Autres',
      'skills.tag.entretiens': 'Entretiens',
      'skills.tag.protocoles': 'Élaboration de protocoles',
      'skills.tag.tests_utilisateurs': 'Tests utilisateurs',
      'skills.tag.accessibilite': 'Accessibilité',
      'skills.tag.gestion_projet': 'Gestion de projet',

      'contact.email_label': 'Email',
      'contact.linkedin_value': 'Voir le profil',
      'contact.cv_value': 'Télécharger le PDF',

      'esante.category': 'UX/UI Design &amp; Développement front-end',
      'esante.title': "Création d'une application mobile d'e-santé",
      'esante.p1': "Dans le cadre d'un projet de groupe, j'ai participé à la création d'une application dédiée à la e-santé. Les fonctionnalités de l'application avaient déjà été déterminées dans les consignes du projet : connexion, inscription, ajout de patient, espace du médecin, liste des patients et suivi des patients.",
      'esante.p2': "Notre démarche a débuté par une veille concurrentielle afin d'analyser les solutions existantes sur le marché, avant de concevoir les maquettes sur Figma puis de développer l'application avec React, JavaScript et CSS.",
      'esante.p3': "Au sein de l'équipe, j'étais responsable du design sur Figma ainsi que du développement front-end du site, avec également une contribution active sur la partie JavaScript.",
      'esante.info.type_value': 'Projet de groupe (école)',
      'esante.info.role_value': 'Design UX/UI (Figma) &amp; développement front-end',
      'esante.hero.alt': "Écran de détail d'un patient de l'application e-santé",
      'esante.gallery.alt1': "Écran de connexion de l'application",
      'esante.gallery.alt2': "Écran d'inscription de l'application",
      'esante.gallery.alt3': "Écran d'ajout d'un nouveau patient",
      'esante.gallery.alt4': "Écran du compte pro (espace du shérif)",
      'esante.gallery.alt5': "Écran principal de l'application",
      'esante.gallery.alt6': "Écran de détail d'un patient",
      'esante.nav.prev_title': "Hook'it",

      'hookit.category': 'UX/UI Design &amp; Développement front-end &amp; back-end',
      'hookit.title': "Création d'une application mobile de crochet",
      'hookit.p1': "Dans le cadre d'un projet de conception centrée utilisateur, mon équipe et moi avons développé une application dédiée au crochet, une activité en plein essor auprès des jeunes générations. Notre démarche s'est appuyée sur une analyse approfondie de notre cible : entretiens utilisateurs, personas, modélisation UML, puis prototypage Low-Fidelity et High-Fidelity sur Figma, avant le développement de l'application.",
      'hookit.p2': "Mon rôle a consisté à effectuer la recherche utilisateur ainsi que la conception et les tests des prototypes auprès de notre population cible.",
      'hookit.p3': "L'application permet de créer un compte, suivre ses projets en cours, accéder à des tutoriels et partager ses créations. L'accent a été mis sur une interface intuitive, une navigation fluide et des fonctionnalités pensées pour répondre aux besoins réels des utilisateurs.",
      'hookit.info.type_value': 'Projet de groupe (école)',
      'hookit.info.role_value': 'Design UX/UI (Figma), entretiens &amp; développement front-end &amp; back-end',
      'hookit.nav.next_title': 'Yee-Health',

      'blackbox.category': 'Game Jam &middot; Level design, scénario &amp; développement',
      'blackbox.title': "Création d'un jeu pour la Game Jam 2024",
      'blackbox.p1': "J'ai participé à une Game Jam organisée par l'association EKOS de l'IDMC à Nancy : 45h pour créer un jeu vidéo de A à Z. Mon équipe a choisi de travailler sur RPG Maker, avec un style graphique rétro façon vieux jeux vidéo. De mon côté, je me suis principalement occupée des décors, du scénario, de la création d'easter eggs cachés un peu partout, et même d'un peu de code !",
      'blackbox.p2': "Blackbox raconte l'histoire d'un enquêteur qui pénètre dans le cerveau d'un individu pour enquêter sur une affaire et retrouver des souvenirs disparus. En explorant les différentes aires cérébrales, il découvre leur fonction à travers des mini-jeux qui y font écho — par exemple, le lobe frontal, associé à la mémoire de travail, prend la forme d'un memory game. Le jeu avait pour objectif de faciliter l'apprentissage des fonctions cérébrales grâce au storytelling et à la gamification, en mêlant humour et esthétique rétro.",
      'blackbox.p3': "Après 2 jours bien intenses (et peu de sommeil 😅), notre équipe a terminé 2ᵉ ! Une super expérience de créativité et de travail d'équipe.",
      'blackbox.info.type_value': 'Game Jam en équipe (45h)',
      'blackbox.info.role_value': 'Décors, scénario &amp; easter eggs',
      'blackbox.nav.prev_title': 'Yee-Health',
      'blackbox.hero.alt': 'Écran principal du jeu Blackbox, style rétro pixel art',
      'blackbox.gallery.alt1': 'Écran titre du jeu Blackbox',
      'blackbox.gallery.alt2': 'Écran mémo du jeu Blackbox',
      'blackbox.gallery.alt3': 'Écran du portail dans le jeu Blackbox',
      'blackbox.gallery.alt4': 'Écran de fin du jeu Blackbox'
    },
    en: {
      'nav.about': 'About me',
      'nav.work': 'My work',
      'nav.skills': 'Skills',
      'nav.contact': 'Contact',
      'footer.cv': 'My CV',
      'nav_arrows.prev_label': '&larr; Previous',
      'nav_arrows.next_label': 'Next &rarr;',
      'gallery.title': 'Gallery',
      'gallery.hifi': 'Hi-Fi',
      'gallery.lowfi': 'Low-Fi',
      'info.type_label': 'Type',
      'info.role_label': 'Role',
      'info.year_label': 'Year',
      'info.tools_label': 'Tools',

      'hero.tagline': '<em>Feeling Curious?</em>',

      'about.title': 'Who <em>am I?</em>',
      'about.p1': "Passionate about human behaviour and the way we interact with what surrounds us, I design digital experiences centred on the user, at the crossroads of psychology, cognitive science and design. Curious by nature, I like to understand the \"why\" before sketching the \"how\".",
      'about.p2': "With a Master's degree in Cognitive Science, my background also led me to artificial intelligence, programming and data analysis. I now work on a variety of projects, from user research to interface and experience design, always with the same goal: creating experiences that are simple, useful and enjoyable.",

      'work.title': 'My <em>work...</em>',
      'work.hookit.category': 'UX/UI Design &amp; Mobile app',
      'work.hookit.title': "Hook'It",
      'work.esante.category': 'Mobile app',
      'work.esante.title': 'Yee-Health',
      'work.blackbox.category': 'Game Jam &middot; Narrative game (RPG Maker)',
      'work.blackbox.title': 'Blackbox',

      'skills.title': 'My <em>skills</em>',
      'skills.cat.language': 'Language',
      'skills.cat.framework': 'Framework',
      'skills.cat.data': 'Data analysis & processing',
      'skills.cat.design': 'Design',
      'skills.cat.other': 'Other',
      'skills.tag.entretiens': 'Interviews',
      'skills.tag.protocoles': 'Protocol design',
      'skills.tag.tests_utilisateurs': 'User testing',
      'skills.tag.accessibilite': 'Accessibility',
      'skills.tag.gestion_projet': 'Project management',

      'contact.email_label': 'Email',
      'contact.linkedin_value': 'View profile',
      'contact.cv_value': 'Download the PDF',

      'esante.category': 'UX/UI Design &amp; Front-end development',
      'esante.title': 'Building a mobile e-health app',
      'esante.p1': "As part of a group project, I took part in building an application dedicated to e-health. The app's features had already been defined in the project brief: login, sign-up, adding a patient, doctor's space, patient list and patient tracking.",
      'esante.p2': "Our approach started with a competitive review to analyse existing solutions on the market, before designing the mockups in Figma and then building the app with React, JavaScript and CSS.",
      'esante.p3': "Within the team, I was responsible for the Figma design as well as the front-end development of the site, with an additional active contribution on the JavaScript side.",
      'esante.info.type_value': 'Group project (school)',
      'esante.info.role_value': 'UX/UI Design (Figma) &amp; front-end development',
      'esante.hero.alt': "Patient detail screen of the e-health app",
      'esante.gallery.alt1': 'App login screen',
      'esante.gallery.alt2': 'App sign-up screen',
      'esante.gallery.alt3': 'Add a new patient screen',
      'esante.gallery.alt4': "Pro account screen (sheriff's space)",
      'esante.gallery.alt5': 'App main screen',
      'esante.gallery.alt6': 'Patient detail screen',
      'esante.nav.prev_title': "Hook'it",

      'hookit.category': 'UX/UI Design &amp; Front-end &amp; back-end development',
      'hookit.title': 'Building a crochet mobile app',
      'hookit.p1': "As part of a user-centred design project, my team and I developed an app dedicated to crochet, an activity booming among younger generations. Our approach relied on an in-depth analysis of our target audience: user interviews, personas, UML modelling, then Low-Fidelity and High-Fidelity prototyping in Figma, before developing the app.",
      'hookit.p2': "My role consisted of conducting user research as well as designing and testing the prototypes with our target audience.",
      'hookit.p3': "The app lets users create an account, track their ongoing projects, access tutorials and share their creations. The focus was on an intuitive interface, smooth navigation and features designed to meet users' real needs.",
      'hookit.info.type_value': 'Group project (school)',
      'hookit.info.role_value': 'UX/UI Design (Figma), interviews &amp; front-end &amp; back-end development',
      'hookit.nav.next_title': 'Yee-Health',

      'blackbox.category': 'Game Jam &middot; Level design, writing &amp; development',
      'blackbox.title': 'Creating a game for the 2024 Game Jam',
      'blackbox.p1': "I took part in a Game Jam organised by the EKOS association at IDMC in Nancy: 45 hours to build a video game from scratch. My team chose to work with RPG Maker, with a retro, old-school video game art style. I was mainly in charge of the backgrounds, the story, creating easter eggs hidden throughout, and even a bit of coding!",
      'blackbox.p2': "Blackbox tells the story of an investigator who enters someone's brain to investigate a case and recover lost memories. By exploring the different brain areas, he discovers their function through mini-games that echo them — for example, the frontal lobe, associated with working memory, takes the form of a memory game. The game aimed to make learning about brain functions easier through storytelling and gamification, blending humour with a retro aesthetic.",
      'blackbox.p3': "After 2 intense days (and not much sleep 😅), our team finished 2nd! A great experience in creativity and teamwork.",
      'blackbox.info.type_value': 'Team Game Jam (45h)',
      'blackbox.info.role_value': 'Backgrounds, story &amp; easter eggs',
      'blackbox.nav.prev_title': 'Yee-Health',
      'blackbox.hero.alt': 'Main screen of the Blackbox game, retro pixel art style',
      'blackbox.gallery.alt1': 'Title screen of the Blackbox game',
      'blackbox.gallery.alt2': 'Memo screen of the Blackbox game',
      'blackbox.gallery.alt3': 'Portal screen in the Blackbox game',
      'blackbox.gallery.alt4': 'Ending screen of the Blackbox game'
    }
  };

  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const value = translations[lang][el.getAttribute('data-i18n')];
      if (value !== undefined) el.innerHTML = value;
    });
    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const value = translations[lang][el.getAttribute('data-i18n-alt')];
      if (value !== undefined) el.setAttribute('alt', value);
    });
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  function readSavedLang() {
    try {
      return localStorage.getItem('lang');
    } catch (err) {
      return null;
    }
  }

  function saveLang(lang) {
    try {
      localStorage.setItem('lang', lang);
    } catch (err) {
      // Stockage indisponible (navigation privée, fichier local, etc.) : on continue sans mémoriser le choix.
    }
  }

  function readUrlLang() {
    try {
      return new URLSearchParams(location.search).get('lang');
    } catch (err) {
      return null;
    }
  }

  // Reporte la langue courante sur les liens internes (?lang=xx) pour qu'elle
  // survive à la navigation même si le stockage local est indisponible
  // (ex: pages ouvertes en local via file://).
  function decorateInternalLinks(lang) {
    document.querySelectorAll('a[href]').forEach((a) => {
      const href = a.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http')) return;
      try {
        const url = new URL(href, location.href);
        if (url.origin !== location.origin) return;
        url.searchParams.set('lang', lang);
        a.setAttribute('href', url.pathname + url.search + url.hash);
      } catch (err) {
        // Lien mal formé : on le laisse tel quel.
      }
    });
  }

  const initialLang = readUrlLang() || readSavedLang() || 'fr';
  applyLang(initialLang);
  saveLang(initialLang);
  decorateInternalLinks(initialLang);

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      saveLang(btn.dataset.lang);
      applyLang(btn.dataset.lang);
      decorateInternalLinks(btn.dataset.lang);
    });
  });
})();

// =========================================================
// 3. CARROUSELS HORIZONTAUX — scroll natif + flèches + points
//    Un seul moteur réutilisé pour "Mon travail..." (page d'accueil)
//    ET pour les galeries de captures d'écran des pages projet
//    (structure commune : .carousel > .carousel-prev/.carousel-viewport
//    > .carousel-track > .carousel-next + .carousel-dots)
// =========================================================
function initScrollCarousel(root, options = {}) {
  const viewport = root.querySelector('.carousel-viewport');
  const track = root.querySelector('.carousel-track');
  const prevBtn = root.querySelector('.carousel-prev');
  const nextBtn = root.querySelector('.carousel-next');
  const dotsWrap = root.querySelector('.carousel-dots');

  if (!track || !track.children.length) return;

  const cards = Array.from(track.children);
  let visibleCount = getVisibleCount();
  let currentIndex = 0;
  let isSyncingFromScroll = false;

  // Par défaut (galeries) : nombre d'éléments visibles calculé depuis la
  // largeur réelle du viewport. La page d'accueil fournit son propre
  // calcul par palier (options.getVisibleCount) pour garder 3/2/1 cartes.
  function getVisibleCount() {
    if (options.getVisibleCount) return options.getVisibleCount();
    const step = cardStep();
    return step ? Math.max(Math.round(viewport.clientWidth / step), 1) : 1;
  }

  function maxIndex() {
    return Math.max(cards.length - visibleCount, 0);
  }

  function cardStep() {
    const cardWidth = cards[0].getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    return cardWidth + gap;
  }

  function buildDots() {
    if (!dotsWrap) return;
    dotsWrap.innerHTML = '';
    const total = maxIndex() + 1;
    for (let i = 0; i < total; i++) {
      const dot = document.createElement('button');
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', (options.dotLabel || 'Aller au groupe ') + (i + 1));
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    }
    updateDots();
  }

  function updateDots() {
    if (!dotsWrap) return;
    const dots = Array.from(dotsWrap.children);
    dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
  }

  // index en boucle : après le dernier groupe, on revient au premier (et inversement)
  function goTo(index, behavior = 'smooth') {
    const last = maxIndex();
    if (index > last) index = 0;
    else if (index < 0) index = last;

    currentIndex = index;
    isSyncingFromScroll = true;
    viewport.scrollTo({ left: currentIndex * cardStep(), behavior });
    updateDots();
    setTimeout(() => { isSyncingFromScroll = false; }, behavior === 'smooth' ? 500 : 0);
  }

  if (prevBtn) prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(currentIndex + 1));

  // Garde les points synchronisés quand on scroll/swipe à la main
  let scrollTimeout;
  viewport.addEventListener('scroll', () => {
    if (isSyncingFromScroll) return;
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const step = cardStep();
      const nearest = Math.round(viewport.scrollLeft / step);
      currentIndex = Math.min(Math.max(nearest, 0), maxIndex());
      updateDots();
    }, 120);
  });

  // Scroll horizontal à la souris (drag) — le scroll tactile natif gère déjà le tactile
  let isDragging = false;
  let dragMoved = false;
  let dragStartX = 0;
  let dragStartScroll = 0;

  viewport.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse') return;
    isDragging = true;
    dragMoved = false;
    dragStartX = e.clientX;
    dragStartScroll = viewport.scrollLeft;
  });

  viewport.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    const delta = e.clientX - dragStartX;
    // On ne capture le pointeur qu'une fois qu'un vrai glissement démarre :
    // le capturer dès pointerdown ferait basculer la cible du "click" sur le
    // viewport (bug connu), empêchant la navigation au simple clic.
    if (!dragMoved && Math.abs(delta) > 5) {
      dragMoved = true;
      viewport.classList.add('is-dragging');
      viewport.setPointerCapture(e.pointerId);
    }
    if (dragMoved) {
      viewport.scrollLeft = dragStartScroll - delta;
    }
  });

  function endDrag(e) {
    if (!isDragging) return;
    isDragging = false;
    viewport.classList.remove('is-dragging');
    if (dragMoved && e && e.pointerId !== undefined && viewport.hasPointerCapture(e.pointerId)) {
      viewport.releasePointerCapture(e.pointerId);
    }
  }
  viewport.addEventListener('pointerup', endDrag);
  viewport.addEventListener('pointerleave', endDrag);

  // Chaque élément peut être un lien réel (ex: carte projet1/) : on n'annule
  // la navigation que si le clic est en fait la fin d'un glisser-déposer
  const cardLinks = Array.from(track.querySelectorAll('a'));
  cardLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      if (dragMoved) {
        e.preventDefault();
        dragMoved = false;
      }
    });
  });

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      visibleCount = getVisibleCount();
      buildDots();
      goTo(Math.min(currentIndex, maxIndex()), 'auto');
    }, 150);
  });

  buildDots();
  goTo(0, 'auto');

  // Exposé pour recalculer après un changement de visibilité externe
  // (ex : bascule Hi-Fi/Low-Fi qui affiche une galerie restée à 0px de large)
  root.refreshCarousel = () => {
    visibleCount = getVisibleCount();
    buildDots();
    goTo(0, 'auto');
  };
}

document.querySelectorAll('.carousel, .gallery-carousel').forEach((root) => {
  const options = { dotLabel: 'Aller à la capture ' };
  if (root.classList.contains('carousel--work')) {
    options.dotLabel = 'Aller au groupe de projets ';
    options.getVisibleCount = () => {
      const width = window.innerWidth;
      if (width <= 600) return 1;
      if (width <= 900) return 2;
      return 3;
    };
  }
  initScrollCarousel(root, options);
});

// =========================================================
// 4. TOGGLE LOW-FI / HI-FI — galerie des pages projet (ex: Hook'It)
// =========================================================
(function initFidelityToggle() {
  const toggle = document.querySelector('.fidelity-toggle');
  if (!toggle) return;

  const buttons = Array.from(toggle.querySelectorAll('.fidelity-btn'));
  const galleries = Array.from(document.querySelectorAll('.gallery-carousel[data-fidelity]'));

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const fidelity = btn.dataset.fidelity;
      buttons.forEach((b) => b.classList.toggle('active', b === btn));
      galleries.forEach((gallery) => {
        gallery.hidden = gallery.dataset.fidelity !== fidelity;
        if (!gallery.hidden && gallery.refreshCarousel) gallery.refreshCarousel();
      });
    });
  });
})();

// =========================================================
// 5. COPIER L'EMAIL DANS LE PRESSE-PAPIER — section Contact
// =========================================================
(function initEmailCopy() {
  const btn = document.querySelector('.contact-link--copy');
  if (!btn) return;

  const valueEl = btn.querySelector('.contact-link-value');
  const email = btn.dataset.copy;
  const originalText = valueEl.textContent;
  let resetTimeout;

  btn.addEventListener('click', () => {
    navigator.clipboard.writeText(email).then(() => {
      const isEn = document.documentElement.lang === 'en';
      valueEl.textContent = isEn ? 'Copied!' : 'Copié !';
      clearTimeout(resetTimeout);
      resetTimeout = setTimeout(() => { valueEl.textContent = originalText; }, 1500);
    });
  });
})();
