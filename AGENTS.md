# AGENTS.md — D2A Avocat

> Contexte projet pour agents IA (Cursor, Claude Code, etc.)
> Toujours lire ce fichier avant toute intervention sur le code.

---

## 1. Projet

**D2A Avocat** — site vitrine bilingue FR/EN pour un cabinet d'avocat généraliste dirigé par Maître Diane.

- **Domaine** : `d2a-avocat.fr`
- **Email pro** : `diane@d2a-avocat.fr`
- **Cabinet partenaire au Bénin** : SCP AD2A ([scpad2a.org](https://scpad2a.org/fr))
- **Site de référence** : [ably-avocat.com](https://ably-avocat.com) (structure uniquement, pas le visuel)
- **Statut** : en développement

---

## 2. Positionnement & direction créative

**Registre visuel : casual luxury.**

Le site doit sembler premium mais rester chaleureux et accessible. Références : Aesop, Le Labo, Frenchie, marques lifestyle premium. Sobre, lumineux, classe, chic — jamais générique, jamais bateau, jamais "cabinet parisien poussiéreux".

**Accroche** : « Le droit qui vous ressemble »

---

## 3. Périmètre

### Domaines d'intervention (3)

1. Droit des affaires
2. Droit des étrangers
3. Droit de la famille

### Zones géographiques (3)

- 🇫🇷 France (marché principal)
- 🇧🇯 Bénin (via SCP AD2A)
- 🇨🇮 Côte d'Ivoire

### Langues

- Français (par défaut)
- Anglais (via Astro i18n natif)

---

## 4. Stack technique

| Composant    | Choix                          | Notes                  |
| ------------ | ------------------------------ | ---------------------- |
| Framework    | **Astro 4+**                   | SSG, SEO natif         |
| Styling      | **Tailwind CSS**               | Voir tokens ci-dessous |
| CMS          | **Sanity** ou **Keystatic**    | À trancher au setup    |
| Hébergement  | **Cloudflare Pages**           | Gratuit, CDN global    |
| Formulaire   | **Web3Forms** ou **Formspree** | Tier gratuit           |
| Prise de RDV | **Cal.com Cloud**              | Tier gratuit           |
| Email pro    | **Zoho Mail**                  | Tier gratuit           |
| Versioning   | **Git + GitHub**               | Déploiement continu    |
| i18n         | **Astro i18n natif**           | FR/EN                  |

**Contraintes** :

- Site 100% statique — pas de backend maison, pas de base de données propriétaire
- Pas de gateway de paiement (paiement par virement bancaire uniquement)
- Toutes les intégrations passent par des services cloud externes ou du client-side

---

## 5. Sitemap

```
/                                    → Accueil
/cabinet                             → Le Cabinet
/expertises                          → Sommaire expertises
/expertises/droit-des-affaires
/expertises/droit-des-etrangers
/expertises/droit-de-la-famille
/honoraires                          → Honoraires
/actualites                          → Liste blog
/actualites/[slug]                   → Article
/contact                             → Contact + prise de RDV
/mentions-legales
/politique-confidentialite

+ /en/... en miroir pour l'anglais
```

---

## 6. Design system

### 6.1 Palette de couleurs

**Navy (structurel) — base `#0D406E` = navy-600**

```
50:  #EEF4FA   400: #3D82C3   800: #072444
100: #CDDFF0   500: #1A6099   900: #041630
200: #9DC0E1   600: #0D406E ⭐ 950: #020B1C
300: #6DA1D2   700: #0A3259
```

**Gold (accent — Or champagne) — base `#C9973A` = gold-400**

```
50:  #FDF8EE   400: #C9973A ⭐ 800: #3E2D0D
100: #F5E9C6   500: #A87828   900: #201608
200: #EDD49A   600: #7A5C1E   950: #100B04
300: #E0BA66   700: #5C4415
```

**Règle d'usage** :

- **Navy** = structure (header, footer, CTA, titres)
- **Gold** = accent en touche uniquement (traits, hover, séparateurs, badges) — jamais en masse

### 6.2 Typographie

**Duo : Fraunces (titres) + Inter (corps)**

Import Google Fonts :

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,300..600,0..100;1,9..144,300..600,0..100&family=Inter:wght@300;400;500;600&display=swap"
  rel="stylesheet"
/>
```

**Hiérarchie** :

| Niveau      | Police   | Taille  | Poids   |
| ----------- | -------- | ------- | ------- |
| H1          | Fraunces | 48-64px | 300     |
| H2          | Fraunces | 32-40px | 500     |
| H3          | Fraunces | 22-26px | 500     |
| Body        | Inter    | 15-16px | 400     |
| Small       | Inter    | 12-13px | 400-500 |
| Nav/Boutons | Inter    | 13-14px | 500     |

Fraunces est une **variable font** avec axe `SOFT` (0 = anguleux, 100 = rond). Utiliser `font-variation-settings: 'SOFT' 50` pour un rendu chaleureux mais professionnel.

### 6.3 Config Tailwind

```js
// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', ...fontFamily.serif],
        sans: ['Inter', ...fontFamily.sans],
      },
      colors: {
        navy: {
          50: '#EEF4FA',
          100: '#CDDFF0',
          200: '#9DC0E1',
          300: '#6DA1D2',
          400: '#3D82C3',
          500: '#1A6099',
          600: '#0D406E',
          700: '#0A3259',
          800: '#072444',
          900: '#041630',
          950: '#020B1C',
        },
        gold: {
          50: '#FDF8EE',
          100: '#F5E9C6',
          200: '#EDD49A',
          300: '#E0BA66',
          400: '#C9973A',
          500: '#A87828',
          600: '#7A5C1E',
          700: '#5C4415',
          800: '#3E2D0D',
          900: '#201608',
          950: '#100B04',
        },
      },
    },
  },
  plugins: [],
}
```

---

## 7. Structure de chaque page

### Accueil `/`

1. Hero (titre + 2 CTA + visuel)
2. Présentation en 3 points (3 domaines · 3 pays · Consultation en 48h)
3. Domaines d'intervention (3 cartes)
4. Présence internationale (France · Bénin · Côte d'Ivoire + mention SCP AD2A)
5. Comment nous travaillons (4 étapes)
6. Modes de consultation (4 cartes avec tarifs)
7. Dernières actualités (3 articles)
8. CTA final (bloc navy foncé)

### Le Cabinet `/cabinet`

1. Hero + photo
2. Présentation de Maître Diane (bio + citation)
3. Parcours & formation (timeline)
4. Notre approche (3-4 valeurs avec icônes)
5. Présence au Bénin — SCP AD2A
6. CTA

### Expertises `/expertises` (page mère)

1. Hero
2. 3 grandes cartes verticales des domaines

### Pages filles expertises (structure commune)

1. Hero spécifique + fil d'Ariane
2. Introduction (2-3 paragraphes)
3. Situations traitées (liste 2 colonnes)
4. Notre méthode (3-4 étapes)
5. Zones d'intervention (rappel des 3 pays)
6. FAQ (4-5 questions en accordéons)
7. CTA

### Honoraires `/honoraires`

1. Hero + accroche transparence
2. Philosophie tarifaire
3. Modes de facturation (Forfait · Temps passé · Résultat)
4. Grille des consultations (tableau des 4 types)
5. Mode de paiement (virement bancaire)
6. Aide juridictionnelle
7. CTA

### Actualités `/actualites`

**Page liste** : Hero + filtres + grille 3 colonnes + pagination

**Page article** : Fil d'Ariane + hero article + corps + auteur + articles liés + CTA

### Contact `/contact`

1. Hero
2. Deux voies parallèles : widget Cal.com | formulaire
3. Coordonnées + carte
4. Bureau au Bénin

### Mentions légales & RGPD

Contenu réglementaire (voir section 10 pour les infos à collecter).

---

## 8. Types de rendez-vous (Cal.com)

| Type                      | Format   | Durée       | Tarif       |
| ------------------------- | -------- | ----------- | ----------- |
| Appel découverte          | Audio    | 15 min      | Gratuit     |
| Consultation vidéo        | Visio    | À confirmer | À confirmer |
| Consultation écrite       | Async    | —           | 150€        |
| Consultation présentielle | Sur site | À confirmer | À confirmer |

**Paiement** : virement bancaire uniquement. RIB communiqué par email après réservation.

**Consultation écrite** : flux spécial — formulaire de commande → email avec RIB → paiement → réponse écrite en 48-72h. Pas un créneau agenda classique.

---

## 9. Conventions de code

### Structure de dossiers

```
src/
├── components/       → composants réutilisables (Button, Card, Hero, etc.)
├── layouts/          → layouts Astro (BaseLayout, PageLayout)
├── pages/            → routes FR (par défaut)
│   ├── en/           → routes EN en miroir
│   └── ...
├── content/          → collections Astro (articles, expertises)
├── i18n/             → dictionnaires FR/EN
├── styles/           → global.css, tokens
└── assets/           → images, icônes
```

### Conventions générales

- **Composants Astro** en `.astro` par défaut, React uniquement si interactivité complexe (rare ici)
- **Nommage** : PascalCase pour les composants (`HeroSection.astro`), kebab-case pour les routes
- **Classes Tailwind** : ordonner selon l'ordre logique (layout → spacing → typography → color → effects)
- **Textes** : jamais en dur dans les composants — passer par les dictionnaires i18n
- **Images** : utiliser `<Image>` d'Astro pour l'optimisation automatique
- **Accessibilité** : contrastes AA minimum, alt sur toutes les images, ARIA sur les composants interactifs
- **Sentence case partout** : jamais Title Case, jamais ALL CAPS
- **Pas d'emojis** dans l'interface finale (sauf usage éditorial ponctuel côté blog)

### Git

- Branche principale : `main`
- Commits en français, format conventionnel : `feat:`, `fix:`, `docs:`, `style:`, `refactor:`
- Husky + commitlint + lint-staged à mettre en place au setup

---

## 10. Informations à collecter auprès de la cliente

⚠️ Ces infos sont **bloquantes** pour certaines parties du développement. Ne pas inventer — utiliser des placeholders `[À COMPLÉTER]` en attendant.

### Administratif (mentions légales)

- Barreau d'inscription
- Numéro RPVA
- Assureur RC Pro
- Adresse professionnelle
- Forme juridique du cabinet

### Tarifs

- Tarif consultation vidéo
- Tarif consultation présentielle
- Durée standard des consultations
- Aide juridictionnelle acceptée ou non

### Contenu

- Bio de Maître Diane
- Parcours et dates clés
- Textes de présentation des 3 domaines
- Situations traitées par domaine
- FAQ par domaine
- Photo professionnelle
- Détails du partenariat SCP AD2A

---

## 11. Livrables attendus

1. Site Astro complet, déployé sur Cloudflare Pages
2. Repo GitHub avec `README.md` et ce fichier `AGENTS.md`
3. CMS configuré (Sanity ou Keystatic) avec schémas prêts
4. Cal.com configuré avec les 4 types de RDV
5. Formulaire de contact fonctionnel
6. Nom de domaine pointé
7. Email pro configuré
8. Mentions légales & RGPD
9. Version bilingue FR/EN fonctionnelle

---

## 12. Ce que l'agent ne doit PAS faire

- Ne pas inventer des infos administratives (barreau, RPVA, RC Pro) — utiliser `[À COMPLÉTER]`
- Ne pas ajouter de librairies lourdes sans justification (Framer Motion, GSAP, etc.) — le site doit rester léger
- Ne pas générer d'images IA pour la photo de Maître Diane — attendre la photo pro
- Ne pas créer de composants React inutiles quand un `.astro` statique suffit
- Ne pas dévier de la palette (navy + gold) ni des polices (Fraunces + Inter)
- Ne pas ajouter d'analytics tiers sans validation (respect RGPD)
- Ne pas mettre de vrais tarifs en dur pour les consultations non confirmées

---

## 13. Journal de session

À maintenir dans un fichier séparé `JOURNAL.md` — une entrée par session de travail avec :

- Date
- Ce qui a été fait
- Décisions prises
- Blocages rencontrés
- Prochaine étape

---

**Dernière mise à jour du contexte** : phase de setup — repo pas encore initialisé.
