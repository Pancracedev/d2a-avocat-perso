# Journal de session — D2A Avocat

## 2026-08-19 — Setup projet

- Ce qui a été fait : scaffold Astro (dernière version stable), Tailwind CSS v4, i18n FR/EN, structure de dossiers, BaseLayout, pages de nav, Hero, Framer Motion (Reveal), Husky + commitlint + lint-staged.
- Décisions prises : Tailwind v4 via `@theme` (équivalent des tokens navy/gold et Fraunces/Inter) ; React uniquement pour les animations ; textes proposés dans `src/i18n/ui.ts`.
- Blocages rencontrés : aucun.
- Prochaine étape : valider les textes, puis construire les sections de l’accueil.

## 2026-10-01 — Refonte visuelle « casual luxury » + corrections structurelles

- Ce qui a été fait :
  - Refonte visuelle : ombres douces et lift au survol sur `.card`, micro-ligne gold sur les cartes expertises/articles, halos discrets (CTA, présence internationale), badge « Recommandé » sur la consultation écrite, citation du cabinet retravaillée (guillemets + filet gold), icônes des valeurs, filtres actualités en pills, formulaire de contact retravaillé (icônes, focus gold, consentement RGPD, anti-spam `_gotcha`, états d’envoi).
  - Corrections structurelles : chargement de la collection `news` via `glob` loader (les articles n’étaient pas générés), routage des articles filtré par langue (fin des pages croisées FR/EN), pages EN alignées sur les FR, pages légales et confidentialité réellement implémentées (FR + EN).
  - Nettoyage : 0 erreur / 0 warning / 0 hint sur `npm run check`.
- Décisions prises : les pages EN réutilisent désormais les pages FR via import (source unique de vérité), le contenu restant piloté par l’URL via i18n. Pas d’image stock non vérifiée sur un site d’avocat : emplacements photo propres en attendant les visuels professionnels.
- Blocages rencontrés : impossible de valider visuellement les images (pas d’entrée image) — les visuels stock ne sont pas intégrés en aveugle.
- Prochaine étape : intégrer la photo professionnelle de Maître Diane et les informations administratives `[À COMPLÉTER]`, puis brancher l’endpoint du formulaire (`PUBLIC_CONTACT_ENDPOINT`) et configurer Cal.com.
