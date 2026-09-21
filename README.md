# Portfolio — Fantine Figuet

Site portfolio one-page en HTML / CSS / JavaScript vanilla (aucun framework, aucune étape de build).

## Structure

```
portfolio_2026/
├── index.html          # Page d'accueil (hero, qui suis-je, travail, compétences, contact)
├── assets/
│   ├── css/style.css   # Toutes les styles du site
│   ├── js/script.js    # Carousel, formulaire de contact
│   └── images/         # Images réelles (à ajouter, remplacent les placeholders gris)
├── projet1/ … projet6/  # Une page détail par projet (URL propre : /projet1/, /projet2/, ...)
└── README.md
```

## Lancer le site en local

Le site est 100% statique : ouvrir `index.html` directement dans un navigateur fonctionne,
mais pour un rendu fidèle (chemins relatifs, fetch du formulaire), un petit serveur local est recommandé :

```bash
python -m http.server 8000
# puis ouvrir http://localhost:8000
```

## À compléter avant mise en ligne

Les zones marquées `<!-- TODO -->` dans le code contiennent du contenu provisoire à remplacer :
- Adresse email / liens Linkedin / CV dans la section Contact et le footer
- Contenu des projets (page d'accueil + pages `projetX/index.html`)
- Images (mosaïque du hero, photo, projets, etc.) : remplacer les `<div class="img-placeholder">`
  par de vraies balises `<img>` pointant vers `assets/images/`
