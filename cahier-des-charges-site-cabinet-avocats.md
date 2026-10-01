# Cahier des charges — Site vitrine du cabinet [NOM DU CABINET]

|                 |                                                                        |
| --------------- | ---------------------------------------------------------------------- |
| **Version**     | 1.0 – [date]                                                           |
| **Client**      | [Nom du cabinet], représenté par [Associé / Responsable communication] |
| **Prestataire** | [Nom de l'équipe / société], représenté par [Chef de projet]           |
| **Statut**      | Document de cadrage, à valider conjointement                           |

---

## 1. Contexte et enjeux

[Nom du cabinet] est un cabinet d'avocats reconnu, spécialisé en [droit des affaires, contentieux, fiscalité, etc.]. Il souhaite se doter d'un site vitrine qui reflète son niveau d'exigence, renforce sa crédibilité et facilite la prise de contact par de nouveaux clients et partenaires.

Le site est un outil de **réputation** avant d'être un outil de communication : chaque détail (ton, design, rapidité, sécurité) contribue à la confiance que le visiteur accorde au cabinet.

## 2. Objectifs du projet

1. **Incarner l'image** d'excellence, de sobriété et de rigueur du cabinet.
2. **Présenter clairement** les domaines d'expertise, l'équipe et les valeurs.
3. **Générer des prises de contact qualifiées** (demandes de rendez-vous, sollicitations de dossiers).
4. **Soutenir la visibilité** du cabinet sur les moteurs de recherche (SEO local et thématique).
5. **Valoriser l'expertise** via des publications et actualités juridiques.
6. **Attirer des talents** (page recrutement / candidatures spontanées).

**Indicateurs de succès (KPI)** : nombre de demandes de contact par mois, taux de conversion visite → contact, positionnement sur les requêtes cibles, temps de chargement, taux de rebond.

## 3. Cibles

- Dirigeants d'entreprises, DAF, directeurs juridiques
- Investisseurs, institutions, partenaires et confrères
- Particuliers (selon les domaines de pratique)
- Candidats : avocats, juristes, stagiaires, élèves-avocats
- Journalistes et organisateurs d'événements

## 4. Périmètre fonctionnel

### 4.1 Arborescence proposée

| Page                                             | Contenu principal                                                                                                          |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| **Accueil**                                      | Message d'accroche, présentation synthétique, domaines clés, chiffres/références, dernières publications, appel à l'action |
| **Le cabinet**                                   | Histoire, valeurs, vision, méthode de travail, engagements                                                                 |
| **Domaines d'expertise**                         | Page de liste + une page détaillée par domaine (enjeux, prestations, cas types)                                            |
| **L'équipe**                                     | Fiches des associés et collaborateurs : photo, parcours, spécialités, langues, contact                                     |
| **Publications / Actualités**                    | Articles, analyses juridiques, communiqués, événements, filtres par thème                                                  |
| **Carrières**                                    | Culture du cabinet, offres, formulaire de candidature spontanée                                                            |
| **Contact**                                      | Formulaire, prise de rendez-vous en ligne, coordonnées, carte, horaires, accès                                             |
| **Honoraires et modalités**                      | Déroulement du premier rendez-vous, modes de facturation, convention d'honoraires, questions fréquentes (voir 4.3)         |
| **Mentions légales / Confidentialité / Cookies** | Pages réglementaires                                                                                                       |

### 4.2 Fonctionnalités

**Indispensables (MVP)**

- Navigation claire, menu fixe, fil d'Ariane
- Formulaire de contact sécurisé (nom, email, téléphone, domaine concerné, message, consentement RGPD, anti-spam)
- Notification email au cabinet + accusé de réception au visiteur
- Fiches équipe avec possibilité de téléchargement de profil (vCard / PDF)
- Module publications avec catégories, recherche et partage
- **Prise de rendez-vous en ligne** : choix du domaine, du créneau et du mode (cabinet, visioconférence ou téléphone), confirmation et rappel par email, annulation en un clic, agenda synchronisé avec celui du cabinet
- Page « Honoraires et modalités » (contenu détaillé en 4.3)
- Carte interactive et bouton « Itinéraire »
- Version multilingue (langues à confirmer : [FR / EN / autre])
- Bandeau cookies conforme et gestion du consentement
- Interface d'édition (CMS headless associé à Astro) pour gérer pages, équipe, articles, offres sans intervention technique

**Souhaitables (évolutions)**

- Newsletter juridique avec inscription
- Espace presse / médiathèque
- Intégration LinkedIn
- Espace client sécurisé (hors périmètre initial)

### 4.3 Page « Honoraires et modalités » (proposition à valider par le cabinet)

**Principe retenu** : informer sur la méthode et la transparence, sans afficher de grille tarifaire chiffrée. Les honoraires d'un avocat dépendent de chaque dossier et sont encadrés par la déontologie. Le visiteur doit comprendre comment le cabinet facture, ce qu'il doit attendre et comment obtenir une estimation, sans se voir promettre un prix ni un résultat.

**Informations à afficher**

1. **Le premier rendez-vous** : objet (analyse de la situation, orientation), durée, mode (cabinet, visioconférence), documents à préparer, et s'il est gratuit ou facturé (à préciser par le cabinet)
2. **Les modes de facturation proposés** : forfait pour une mission définie, honoraires au temps passé, formule mixte, abonnement de conseil pour les entreprises. Les honoraires liés au résultat ne figurent que si la réglementation du barreau les autorise
3. **Ce qui fait varier les honoraires** : complexité du dossier, enjeux, urgence, durée prévisible, niveau d'intervention des associés
4. **La convention d'honoraires écrite** : remise avant toute intervention, détaillant la mission, le mode de calcul et les modalités de paiement
5. **L'estimation personnalisée** : le cabinet remet une estimation après l'analyse du dossier, délai annoncé (ex. sous 48 h ouvrées)
6. **Frais, débours et taxes** : distingués des honoraires, TVA mentionnée
7. **Aide juridictionnelle et protection juridique** : rappel de leur existence et des conditions générales, si le cabinet y intervient
8. **Engagements du cabinet** : transparence, absence de promesse de résultat, information en cours de dossier en cas d'évolution des honoraires
9. **Questions fréquentes** : cinq à sept réponses courtes (« Combien coûte un premier rendez-vous ? », « Comment est calculé le temps passé ? », « Puis-je obtenir un forfait ? »)

**À ne pas afficher** : tarifs horaires chiffrés, comparaisons avec d'autres cabinets, formules promotionnelles, promesses de gain ou de délai.

**Option à arbitrer avec le cabinet** : afficher des forfaits « à partir de » pour des prestations standardisées (création de société, rédaction de contrat type), uniquement si la règle du barreau le permet et si le cabinet y est favorable.

**Appel à l'action** : en bas de page, « Demander une estimation » (formulaire) et « Prendre rendez-vous » (agenda en ligne).

## 5. Contraintes déontologiques et juridiques

Le site doit respecter les règles applicables à la **publicité et à la communication des avocats** définies par l'Ordre ou le barreau dont dépend le cabinet.

- Contenus **informatifs, mesurés et sobres** : pas de promesse de résultat, ni de comparaison, ni de démarchage agressif
- Respect strict du **secret professionnel** : aucune référence client sans autorisation écrite
- Mentions obligatoires : identité du cabinet, barreau d'inscription, titres, assurance responsabilité civile professionnelle, éditeur, hébergeur, directeur de publication
- Conformité à la **réglementation applicable en matière de protection des données personnelles** : politique de confidentialité, droits des personnes, durée de conservation, registre des traitements, DPO si applicable
- Mention claire que **l'envoi d'un message via le formulaire ne crée pas de relation avocat-client** et que les informations sensibles ne doivent pas y figurer
- Information sur les **honoraires** conforme aux règles du barreau : pas de tarif chiffré, de comparaison ni de promesse de résultat sans validation écrite du cabinet
- Validation de l'ensemble des contenus par le cabinet avant mise en ligne

## 6. Identité visuelle et expérience utilisateur

- **Positionnement** : élégance, autorité, sobriété, modernité discrète
- **Charte** : reprise de la charte existante (logo, couleurs, typographies) ou création/adaptation si absente
- **Ambiance** : palette restreinte, typographie soignée (sérif pour les titres, sans sérif pour le texte), photographies professionnelles de l'équipe et du cabinet, beaucoup d'espace blanc
- **Animations** : subtiles et fonctionnelles, jamais envahissantes
- **Approche** : _mobile-first_, responsive sur tous les écrans
- **Livrables design** : moodboard, wireframes des pages clés, maquettes haute fidélité (desktop et mobile), design system minimal
- **Accessibilité** : respect des critères WCAG 2.1 niveau AA (contrastes, navigation clavier, textes alternatifs, structure sémantique)

## 7. Contenus

| Élément                                    | Responsable                                                          |
| ------------------------------------------ | -------------------------------------------------------------------- |
| Textes institutionnels et fiches expertise | Cabinet, avec accompagnement rédactionnel du prestataire (en option) |
| Biographies de l'équipe                    | Cabinet                                                              |
| Photographies (portraits, locaux)          | Prestataire (séance photo en option) ou cabinet                      |
| Traductions                                | Cabinet ou prestataire (à préciser)                                  |
| Intégration et optimisation SEO            | Prestataire                                                          |

Le prestataire fournit un **gabarit de contenus** par page (longueur, structure, ton). Le cabinet s'engage à livrer les contenus finalisés selon le calendrier convenu : tout retard décale d'autant la mise en ligne.

## 8. Spécifications techniques

**Architecture**

- **Framework : Astro** (site statique pré-généré, JavaScript minimal côté client, TypeScript), choix retenu à la demande du client pour la performance, la sécurité et le référencement
- **Gestion des contenus** : Astro n'incluant pas d'interface d'administration, les contenus sont gérés via l'une des options suivantes (à valider en phase de cadrage) :
  - _CMS headless SaaS_ (ex. Storyblok, Sanity, Contentful) : édition visuelle, rôles, prévisualisation, workflow de validation
  - _CMS Git-based_ (ex. Keystatic, TinaCMS, Decap) : contenus en Markdown/JSON dans le dépôt, sans base de données, coût réduit
  - _Content Collections Astro_ seules : contenus édités par l'équipe technique (déconseillé si le cabinet souhaite être autonome)
- Rôles : administrateur, éditeur, relecteur (validation déontologique avant publication)
- Déploiement automatisé (CI/CD) : toute publication déclenche une reconstruction du site (quelques minutes), avec environnement de prévisualisation
- Éléments dynamiques (formulaire de contact, newsletter) assurés par des fonctions serverless ou un service tiers sécurisé, avec anti-spam
- Code propre, documenté, versionné (Git)

**Performance**

- Score Lighthouse ≥ 90 (performance, accessibilité, bonnes pratiques, SEO)
- Chargement < 2,5 s sur mobile (LCP)
- Images optimisées (WebP/AVIF), mise en cache, CDN

**Sécurité**

- HTTPS obligatoire (TLS), en-têtes de sécurité (HSTS, CSP)
- Protection anti-spam et anti-force brute, sauvegardes automatiques quotidiennes
- Mises à jour de sécurité régulières, journalisation, environnement de test séparé
- Aucune donnée sensible stockée inutilement ; chiffrement des échanges

**SEO**

- Audit des mots-clés, balisage sémantique, balises title/meta, URLs propres
- Données structurées (_LegalService_, _Attorney_, _Organization_)
- Plan du site XML, robots.txt, redirections, Google Business Profile
- Suivi par outil d'analytics respectueux de la vie privée

**Hébergement et nom de domaine**

- Hébergement fiable, haute disponibilité (≥ 99,9 %), localisation conforme aux exigences de protection des données
- Gestion du nom de domaine au nom du cabinet, emails professionnels

**Compatibilité** : dernières versions de Chrome, Safari, Firefox, Edge ; iOS et Android.

## 9. Organisation et méthodologie

| Phase            | Contenu                                                               | Durée indicative |
| ---------------- | --------------------------------------------------------------------- | ---------------- |
| 1. Cadrage       | Atelier de lancement, audit de l'existant, validation du périmètre    | 1 semaine        |
| 2. Conception    | Arborescence, wireframes, direction artistique, maquettes             | 2 à 3 semaines   |
| 3. Développement | Intégration, CMS, fonctionnalités, intégration des contenus           | 3 à 4 semaines   |
| 4. Recette       | Tests fonctionnels, sécurité, performance, accessibilité, corrections | 1 à 2 semaines   |
| 5. Mise en ligne | Déploiement, redirections, indexation, formation                      | 1 semaine        |
| 6. Suivi         | Garantie, support, mesure des KPI                                     | 1 à 3 mois       |

**Durée totale estimée : 8 à 12 semaines**, sous réserve de la réactivité du cabinet sur les validations et contenus.

**Gouvernance** : un interlocuteur unique côté cabinet, un chef de projet côté prestataire, point hebdomadaire, comité de validation à chaque jalon, délai de retour du client fixé à 5 jours ouvrés.

## 10. Livrables

- Maquettes validées et design system
- Site en production et environnement de recette
- Code source et documentation technique
- Guide d'utilisation du back-office et session de formation
- Rapport d'audit SEO et plan de balisage
- Paramétrage analytics et accès administrateur remis au cabinet

## 11. Recette et critères d'acceptation

Le site est accepté lorsque :

- Toutes les fonctionnalités du MVP sont opérationnelles et conformes aux maquettes
- Les tests de performance, sécurité et accessibilité atteignent les seuils définis
- Aucune anomalie bloquante ou majeure ne subsiste
- Les mentions légales et la conformité RGPD sont validées par le cabinet

## 12. Maintenance et évolutions

- **Garantie** : correction gratuite des anomalies pendant [3] mois après mise en ligne
- **Maintenance (option)** : mises à jour, sauvegardes, supervision, support, avec engagement de délai (ex. intervention sous 4 h ouvrées pour un incident critique)
- **Évolutions** : devis séparé, feuille de route annuelle proposée

## 13. Budget et conditions

- Estimation budgétaire : [à compléter] (design, développement, contenus, SEO, formation)
- Échéancier de paiement : [30 % à la commande / 40 % à la validation des maquettes / 30 % à la livraison]
- Propriété intellectuelle : cession des droits de la création au cabinet après paiement intégral ; licences tierces (polices, photos) listées
- Confidentialité : engagement mutuel de confidentialité (NDA) signé avant le lancement

## 14. Risques identifiés

| Risque                                                          | Mesure                                                                                    |
| --------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Retard de livraison des contenus                                | Calendrier de contenus, jalons contractuels                                               |
| Non-conformité déontologique                                    | Relecture et validation par le cabinet à chaque étape                                     |
| Dérive du périmètre                                             | Procédure de gestion des changements écrite                                               |
| Faille de sécurité                                              | Audit avant mise en ligne, mises à jour planifiées                                        |
| Information sur les honoraires non conforme                     | Contenu validé par le cabinet et son barreau avant publication                            |
| Données du module de rendez-vous (RGPD)                         | Prestataire conforme, minimisation des données, mention d'information, hébergement validé |
| Absence d'autonomie éditoriale (Astro sans interface d'édition) | Intégration d'un CMS headless dès le MVP, formation, documentation                        |
| Dépendance à un service tiers (CMS SaaS, hébergeur)             | Choix de solutions réversibles, contenus exportables, accès au nom du cabinet             |

## 15. Points à valider avec le client

1. Domaines d'expertise à mettre en avant et langues du site
2. Existence d'une charte graphique et de ressources visuelles
3. Niveau d'autonomie souhaité sur la gestion du contenu, et choix du CMS headless associé à Astro (SaaS ou Git-based)
4. Outil de prise de rendez-vous (agenda actuel, visioconférence souhaitée) et besoin de newsletter
5. Validation du contenu de la page « Honoraires et modalités » : premier rendez-vous gratuit ou non, modes de facturation, forfaits « à partir de » ou non
6. Contraintes déontologiques spécifiques du barreau
7. Budget cible et date de mise en ligne souhaitée
8. Sites de référence appréciés (et ceux à éviter)

---

_Document établi à titre de proposition, à adapter après l'atelier de cadrage._
