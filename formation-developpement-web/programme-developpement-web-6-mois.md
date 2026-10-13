# PROGRAMME DE FORMATION — DÉVELOPPEMENT WEB
### Fondamentaux du web · Conception d'interfaces professionnelles · Intégration web · Applications dynamiques

**6 mois · 26 semaines · 156 h · 6 h/semaine (2 séances de 3 h) · centre de formation professionnelle · débutants ayant des bases informatiques · 12 apprenants max.**

---

## Cadrage

| | |
|---|---|
| **Public** | Débutants complets en développement, avec bases informatiques (gestion de fichiers/dossiers, navigation web, bureautique). |
| **Prérequis** | Utiliser un ordinateur et une arborescence de fichiers ; lire et exécuter une consigne écrite ; notions d'anglais technique (souhaitable, non exigé). |
| **Moyens** | 1 poste par apprenant, VS Code, Git/GitHub, Figma, navigateurs + DevTools, API publiques, Netlify/Vercel, MDN ; 1 formateur développeur en activité + 1 tuteur pour les revues de code. |
| **Modalités** | 70 % de pratique machine, 20 % de démonstration/analyse, 10 % de théorie et d'évaluation. Aucune séance sans production. |
| **Évaluation** | Formative continue (checkpoints hebdomadaires de 30–45 min, revues de code croisées, entretiens individuels S9 et S18) ; 3 jalons sommatifs (fin M3, fin M5, M8) ; grille de 12 compétences. |
| **Validation** | 10/12 compétences « acquises » (dont obligatoirement Responsive, DOM/événements, Intégration, Déploiement) + projet final validé par un jury. Rattrapage : 3 h de remédiation + nouvelle présentation sous 3 semaines. Assiduité requise : 80 %. |

## Objectifs de sortie (compétences visées)

À l'issue des 6 mois, l'apprenant sait : **1)** structurer un contenu en HTML sémantique, accessible et bien référencé ; **2)** styliser et rendre responsive une interface en CSS (Flexbox, Grid, variables, mobile-first) ; **3)** concevoir une interface professionnelle (wireframe → maquette Figma hi-fi → design system léger) ; **4)** programmer en JavaScript (logique, DOM, événements, données, API asynchrone) ; **5)** intégrer une maquette au pixel et au comportement près, avec un niveau de qualité mesuré (Lighthouse) ; **6)** développer une application web dynamique (composants, routage, données distantes, persistance) et la déployer ; **7)** travailler avec les outils et méthodes du métier (Git/GitHub, debug, documentation, revue de code, veille) ; **8)** livrer et présenter un projet complet documenté.

---

## 1. Choix pédagogiques et justification

| Choix | Justification |
|---|---|
| **1. Fil rouge unique décliné sur 6 mois** — site vitrine d'une activité professionnelle, puis application dynamique de prise de contact/rendez-vous. Chaque module réinjecte le précédent. | Aucun exercice hors-sol : l'apprenant voit son produit évoluer et mesure sa progression ; le réinvestissement immédiat consolide les acquis. |
| **2. Progression en spirale + travail de consolidation obligatoire** (1 h par séance, non noté mais vérifié). | Le code s'apprend par répétition espacée : revoir une notion dans un contexte nouveau 2 à 3 fois avant d'en ajouter une autre. |
| **3. ≥ 70 % du temps sur machine**, rituel de séance stable : 20 min quiz/rappel → 30 min démonstration commentée → 100 min atelier → 30 min revue collective. | Attention soutenue, feedback immédiat, trace d'avancement à chaque séance ; le formateur montre et fait faire plutôt qu'il ne décrit. |
| **4. Difficulté croissante et sécurisée** : atelier guidé (pas à pas) → atelier autonome (objectif + ressources) → défi libre. | Évite la double peine « syntaxe + logique » chez le débutant ; l'autonomie s'installe sans rupture ni décrochage. |
| **5. Évaluation par compétences, formative et continue** (checkpoints, revues de code croisées, auto-évaluation). | On évalue ce que l'apprenant sait faire, pas ce qu'il récite ; l'erreur devient un objet d'analyse (console → hypothèse → test), cœur du métier. |
| **6. Outils réels du marché, aucun outil pédagogique isolé** (VS Code, Git, Figma, DevTools, hébergement en ligne). | Transfert direct en entreprise/agence ; dès la 4e semaine, un site public existe dans le portfolio de l'apprenant. |
| **7. Qualité traitée dès le début** : responsive mobile-first, accessibilité (contrastes, clavier, labels), performance, SEO technique, RGPD/mentions. | Exigences non négociables des commanditaires ; traitées en fin de parcours, elles sont coûteuses et rarement acquises. |
| **8. Différenciation et autonomisation** : socle obligatoire + défi d'approfondissement dans chaque atelier, binômes pour la remédiation, méthode de recherche imposée (MDN → console → hypothèse → test), veille de 5 min par séance. | Gère l'hétérogénéité sans ralentir le groupe ; les frameworks changeront, la capacité à apprendre et à se documenter restera. |

---

## 2. Programme détaillé

| Module (semaines · heures) | Objectifs opérationnels | Activités pratiques | Livrables / évaluation |
|---|---|---|---|
| **M1 · Socle : web, poste de travail, Git** (S1–2 · 12 h) | Comprendre client/serveur, DNS, HTTP ; organiser un projet (arborescence, nommage) ; installer et utiliser VS Code, le terminal et Git ; lire la console et une requête réseau ; chercher dans la documentation. | Installation/config du poste + compte GitHub ; ateliers terminal (navigation, fichiers) ; premier dépôt, 5 commits ; lecture d'une requête HTTP dans l'onglet Réseau ; exercices « quelle balise / quelle erreur ? » ; recherche guidée sur MDN. | Dépôt GitHub « journal de bord » (README + 5 commits) ; fiche « anatomie d'une page web ». |
| **M2 · HTML5 sémantique & accessibilité** (S3–5 · 18 h) | Structurer un contenu (header/nav/main/section/article/footer), images et médias, liens, listes, tableaux ; construire un formulaire accessible ; respecter alt, labels, hiérarchie de titres, contrastes ; bases du référencement naturel. | 6 pages écrites en séance ; correction d'une page « div-soup » ; audit accessibilité au clavier et contrastes ; formulaire de contact avec labels et messages d'erreur ; contrôle W3C ; mise en ligne sur Netlify. | **Site vitrine 3 pages** (HTML seul, sémantique et accessible), en ligne ; **checkpoint 1** : page inédite à coder en 45 min. |
| **M3 · CSS & interfaces responsive** (S6–9 · 24 h) | Maîtriser le modèle de boîte, les sélecteurs et les priorités ; Flexbox et Grid ; unités relatives, typographie et espacements ; mobile-first et media queries ; variables CSS et design tokens ; nommage maintenable (BEM) ; transitions simples. | Reproduction chronométrée de composants (navbar, carte, grille d'articles, footer) ; quiz de priorité et calcul de tailles ; refonte d'une mise en page en Grid ; adaptation du même écran en 3 tailles ; création d'un mini design system en variables. | 4 écrans responsives du fil rouge (CSS sans framework) + bibliothèque « 15 composants » ; **checkpoint 2** : composant à reproduire en 1 h. |
| **M4 · UI/UX & maquettage** (S10–11 · 12 h) | Wireframes ; hiérarchie visuelle, grille, échelle typographique ; couleur et contraste (AA) ; composants et états (hover, focus, erreur) ; maquette Figma hi-fi desktop + mobile, prototype cliquable ; passation (tokens, annotations). | Audit UI de 2 sites (grille, lisibilité, états) ; wireframes papier puis Figma ; maquette des 4 écrans avec styles partagés ; prototype cliquable ; critique de pairs par grille ; export des tokens (couleurs, typos, espacements). | **Maquette Figma hi-fi** 4 écrans (états inclus) + prototype cliquable + fichier de tokens réutilisé en M6. |
| **M5 · JavaScript & DOM** (S12–16 · 30 h) | Logique (types, conditions, boucles, fonctions, tableaux/objets) ; manipuler le DOM (sélection, création, classes) ; gérer les événements ; valider un formulaire ; stocker localement ; consommer une API en asynchrone (fetch, JSON, async/await, try/catch) ; organiser en modules. | Katas quotidiens de 10 min (boucles, tableaux) ; menu mobile déroulant ; annuaire filtrable généré depuis un tableau d'objets ; validateur de formulaire avec messages d'erreur ; application « API du jour » avec états chargement/erreur ; cache en localStorage ; debug guidé aux points d'arrêt ; refactorisation en modules. | 12 exercices versionnés + application « annuaire filtrable » + application « données distantes » ; **checkpoint 3** : 30 lignes de JS en 45 min ; contrôle de logique écrit (30 min). |
| **M6 · Intégration web professionnelle** (S17–19 · 18 h) | Intégrer une maquette Figma complète (desktop/tablette/mobile) au pixel près ; découper en composants CSS réutilisables ; micro-animations ; optimiser poids et images ; viser Lighthouse ≥ 90 ; SEO technique (balises, sitemap, données structurées) ; mettre en ligne avec domaine et HTTPS ; mentions et consentement (RGPD). | Sprint d'intégration de 3 séances sur maquette fournie, en binômes alternés ; audit et optimisation d'un site dégradé (images, polices, contrastes) ; déploiement Netlify/Vercel + domaine + HTTPS ; tests sur 3 navigateurs et 2 tailles ; revue croisée « conformité maquette » (écart ≤ 5 %) ; mesure Lighthouse avant/après. | **Site multipage responsive déployé**, conforme à la maquette (écart visuel ≤ 5 %), Lighthouse ≥ 90 en performance, accessibilité et SEO ; rapport d'optimisation d'une page (avant/après). |
| **M7 · Applications web dynamiques** (S20–23 · 24 h) | Notions de composant, props et état ; structurer une application en routes/pages ; interroger une API et présenter des données ; formulaires et états d'interface (chargement, vide, erreur, succès) ; persistance ; build et mise en production ; refactorisation. | Conversion des composants de M6 en composants réutilisables ; pages liste + détail avec filtres et recherche connectées à une API ; formulaire de contact/rendez-vous fonctionnel ; favoris persistants ; gestion des cas d'erreur et de l'accessibilité clavier ; revue de code et refactorisation guidée ; déploiement du build. | **Application dynamique déployée** (3 routes minimum, données distantes, formulaire fonctionnel, persistance, erreurs gérées) + README technique (installation, variables, déploiement). |
| **M8 · Projet final, portfolio & insertion** (S24–26 · 18 h) | Conduire un projet de bout en bout : cadrage, backlog et découpage, cahier des charges, délais, suivi ; produire du code lisible et documenté ; préparer l'insertion (portfolio, GitHub, CV/LinkedIn) ; présenter et défendre ses choix techniques. | 2 séances de cadrage (périmètre, backlog, maquette validée) + 3 séances de développement encadré + 1 séance de revue de code finale ; atelier portfolio (3 projets en ligne) et CV/LinkedIn ; simulation d'entretien technique (explication de code, justification d'un choix) ; soutenance de 15 min (démo, justification, axes d'amélioration). | **Projet final fonctionnel** (site + application) documenté et déployé ; **portfolio en ligne** ; support de soutenance ; grille de 12 compétences auto-évaluée puis validée par le jury. |

---

## 3. Grille de compétences, équilibre horaire et suite de parcours

**Grille de 12 compétences :** 1 HTML sémantique · 2 Accessibilité · 3 CSS (Flexbox, Grid) · 4 Responsive mobile-first · 5 Git/GitHub · 6 Logique JavaScript · 7 DOM & événements · 8 Données & API asynchrone · 9 UI & maquettage · 10 Intégration d'une maquette · 11 Application dynamique (composants/routage) · 12 Déploiement, documentation & présentation.
**Validation :** ≥ 10/12 compétences « acquises », dont obligatoirement 3, 4, 7, 10 et 12 ; projet final validé par un jury (fonctionnalité, qualité du code, conformité au cahier des charges, autonomie, présentation).

**Équilibre horaire :** pratique machine 108 h (69 %) · démonstrations et analyses 24 h (15 %) · théorie, évaluation et professionnalisation 24 h (16 %). 100 % des séances produisent un livrable ou un incrément du fil rouge.

**Poursuite :** stage de 4 à 8 semaines (optionnel) ; spécialisations possibles en 24–40 h : back-end/API, CMS, approfondissement framework, WordPress, ou préparation à l'alternance.

**Débouchés visés :** intégrateur web, développeur front-end junior, assistant chef de projet web, créateur de sites pour TPE/freelance.

**Point de vigilance :** 6 h/semaine supposent 1 à 2 h de pratique personnelle entre les séances — à annoncer explicitement en début de parcours.

---

## 4. Séquence type d'une séance de 3 h (rythme identique de S1 à S26)

| Temps | Déroulé |
|---|---|
| Accueil et rappel · 20 min | Quiz de 5 questions sur les acquis, tour des blocages du travail de consolidation, annonce de l'objectif de la séance. |
| Démonstration commentée · 30 min | Le formateur code devant le groupe et verbalise ses décisions, ses erreurs et sa lecture des DevTools ; les apprenants reproduisent en direct. |
| Atelier pratique · 100 min | Étape guidée (pas à pas) → autonome (objectif + ressources) → défi facultatif ; formateur en circulation, soutien de 5 min maximum par blocage. |
| Revue collective · 30 min | Deux travaux projetés et commentés, erreurs types analysées, dépôt du code, consolidation annoncée pour la séance suivante. |

**Dossier remis au jury :** 3 projets en ligne (site vitrine, site intégré responsive, application dynamique) ; dépôts Git et historique de commits ; portfolio ; grille de 12 compétences auto-évaluée ; support de soutenance.
