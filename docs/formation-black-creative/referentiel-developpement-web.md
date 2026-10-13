# BLACK CREATIVE
## Référentiel pédagogique — Développement web
**Formation professionnelle • Débutants • 6 mois • 144 heures encadrées**

**Public :** personnes sachant utiliser un ordinateur, gérer des fichiers et naviguer sur Internet. Aucune connaissance en programmation n’est requise.

**Objectif de sortie :** réaliser un site responsive, ajouter des interactions JavaScript et construire une petite application avec base de données, avec accompagnement pour le back-end et le déploiement.

**Méthode :** démonstrations courtes, exercices guidés puis individuels, corrections et mises en pratique. Environ 70 % du temps est consacré à la pratique ; évaluations et reprises sont incluses dans les 144 heures. Les réalisations sont réutilisées d’un module à l’autre ; Git et les bonnes pratiques accompagnent tout le parcours.

## M1 — Fondations du Web et environnement • 6 h

**Objectif :** créer une première page et utiliser les outils de travail.

**Contenus :** navigateur et serveur, requête/réponse, rôle de HTML/CSS/JavaScript ; éditeur, dossiers, chemins relatifs et outils développeur ; structure HTML, styles CSS simples ; Git : status, add, commit et premier envoi guidé sur GitHub.

**Pratique :** vérifier les bases informatiques par quelques manipulations ; créer une page de présentation avec texte, image, lien et feuille CSS ; réparer un chemin incorrect et enregistrer deux versions avec Git.

**Livrable et validation :** page fonctionnelle et dépôt initialisé. L’apprenant retrouve ses fichiers, explique le rôle de HTML/CSS et enregistre une modification avec une fiche d’aide.

## M2 — HTML, CSS, responsive et publication • 36 h

**Objectif :** réaliser et publier un site vitrine simple à partir d’un brief et d’une maquette.

**Contenus :** HTML sémantique, liens, images, listes et formulaires ; titres, textes alternatifs, labels, clavier et focus ; cascade CSS, modèle de boîte, Flexbox, Grid simple, media queries et mobile-first ; lecture d’une maquette fournie, optimisation des images et publication statique. CSS natif uniquement dans le socle obligatoire.

**Exercices :** intégrer une carte, construire une grille responsive, créer un formulaire accessible et reproduire une page depuis une maquette simple.

**Exercice de synthèse :** réaliser un site vitrine de trois pages — accueil, catalogue et contact — en réutilisant les éléments précédents, avec des contenus fictifs fournis. Tester la navigation, le clavier et l’affichage sur mobile et ordinateur, corriger les défauts puis publier le site avec un README court.

**Livrable et validation :** site publié, dépôt et checklist. Vérifier la cohérence visuelle, les liens, le responsive et l’accessibilité ; faire expliquer et modifier une partie du code individuellement. Un formulaire sans traitement doit être présenté comme une maquette, sans prétendre envoyer de message.

---

## M3 — Logique de programmation avec JavaScript • 12 h

**Objectif :** décomposer un problème simple et écrire une solution compréhensible.

**Contenus :** variables, types, conversions, opérateurs, conditions, boucles, fonctions, tableaux et objets simples ; lecture des erreurs et console. Le pseudo-code sert d’aide ponctuelle avant le passage en JavaScript.

**Exercices :** calculer un montant indicatif ; afficher un statut selon une quantité ; parcourir une liste ; vérifier qu’un texte n’est pas vide ; corriger une condition ou une conversion incorrecte.

**Livrable et validation :** scripts courts et valeurs de test. L’apprenant explique une condition, écrit une fonction et corrige une erreur avec documentation, sans recopier une solution complète.

## M4 — JavaScript, DOM et interactions • 24 h

**Objectif :** rendre une page interactive et afficher des données.

**Contenus :** consolidation des fonctions, tableaux et objets ; sélection et modification du DOM ; événements, formulaires et validation client ; JSON, fetch, introduction à async/await et gestion des erreurs. Afficher les textes issus des données avec textContent.

**Exercices :** générer des cartes depuis un tableau ; filtrer une liste ; contrôler les champs d’un formulaire ; afficher les états chargement, succès, absence de résultat et erreur ; charger un fichier JSON ou une API pédagogique préparée par le formateur.

**Livrable et validation :** page interactive avec formulaire et données. Vérifier les comportements attendus et les erreurs ; demander une modification individuelle. À ce stade, les données saisies peuvent rester temporaires ; la validation serveur sera ajoutée ensuite.

## M5 — Back-end avec Node.js et Express • 12 h

**Objectif :** créer et tester une API simple sur des données en mémoire.

**Contenus :** Node.js, npm, scripts, dépendances, HTTP et JSON ; routes GET, POST et PATCH ; paramètres, corps de requête, codes de statut, validation des entrées et gestion des erreurs. Utiliser une structure de fichiers légère et un seul outil de test HTTP.

**Exercices :** lire une liste ; créer un élément ; modifier un élément ; tester les champs manquants, les valeurs invalides et un identifiant inconnu.

**Livrable et validation :** API locale, exemples de requêtes et tableau de tests. L’apprenant explique le parcours d’une requête ; l’API refuse les entrées invalides sans planter et renvoie des réponses cohérentes. Les routes de modification non protégées restent locales.

---

## M6 — Bases de données et SQL • 8 h

**Objectif :** organiser des données dans deux tables liées et écrire des requêtes simples.

**Contenus :** tables, types, clés primaires et étrangères, unicité ; CREATE TABLE, INSERT, SELECT, WHERE, ORDER BY, UPDATE, DELETE et jointure simple. MySQL est préparé avant la séance.

**Exercices :** dessiner le schéma, créer les tables, insérer des données fictives, filtrer une liste, modifier un enregistrement et supprimer une donnée de test.

**Livrable et validation :** script SQL réutilisable et requêtes commentées. L’apprenant explique les clés, retrouve une information et modifie uniquement l’enregistrement demandé.

## M7 — Connexion Express–MySQL et intégration • 12 h

**Objectif :** relier une interface, une API et une base de données.

**Contenus :** connexion MySQL, variables d’environnement, .gitignore et .env.example ; requêtes paramétrées, validation serveur, appels fetch et erreurs de connexion.

**Exercices :** afficher les données de la base ; enregistrer un formulaire ; modifier un élément ; vérifier la persistance après redémarrage ; tester une saisie invalide et une API indisponible.

**Livrable et validation :** application locale connectée. Démontrer un parcours complet et retrouver, avec une checklist, si une erreur vient du navigateur, du serveur ou de la base.

## M8 — Tests, sécurité et qualité • 6 h

**Objectif :** vérifier les parcours et corriger les défauts prioritaires.

**Contenus :** tests manuels, cas limites, rapport de bug ; validation serveur, injection SQL, affichage prudent des données, secrets et contrôle d’accès. CORS ne remplace pas une autorisation.

**Exercices :** exécuter 8 à 10 tests ; envoyer directement une requête invalide à l’API ; vérifier les secrets ; documenter un bug, le corriger puis refaire le test.

**Livrable et validation :** plan de test renseigné et checklist de sécurité. Un secret exposé doit être remplacé ; une gestion non protégée ne doit pas être accessible sur Internet. Les tests automatisés restent facultatifs.

## M9 — Déploiement guidé • 6 h

**Objectif :** installer et démontrer une application de façon reproductible.

**Contenus :** local et hébergement, dépendances, configuration, logs et vérifications après installation. Le formateur prépare une seule solution Node.js–MySQL et une solution locale de repli.

**Exercices :** repartir d’une copie propre, initialiser la base, configurer et démarrer l’application ; faire suivre la procédure par un pair ; suivre une démonstration de déploiement complet.

**Livrable et validation :** procédure testée, configuration d’exemple et checklist. Une application locale reproductible est acceptée si l’hébergement n’est pas disponible ; aucune donnée secrète ne doit être envoyée au navigateur.

---

## M10 — Atelier de réalisation et corrections • 16 h

**Objectif :** assembler les acquis et livrer un ensemble fonctionnel à partir d’un besoin simple.

**Travail :** reprendre les réalisations précédentes, établir une courte liste de tâches, compléter les fonctions essentielles, améliorer l’interface et corriger les défauts. Répartition indicative : 2 h de cadrage, 8 h de réalisation, 4 h de tests et 2 h de préparation de livraison.

**Livrable et validation :** version fonctionnelle, liste de tâches et tests à jour. Le formateur vérifie la progression et la compréhension individuelle ; les fonctions secondaires ne passent pas avant les corrections indispensables.

## M11 — Livraison, présentation et portfolio • 6 h

**Objectif :** documenter, démontrer et expliquer son travail.

**Travail :** vérifier l’installation ; finaliser le README commencé pendant les modules ; préparer une présentation courte et une fiche portfolio avec captures, technologies, rôle personnel et limites.

**Livrable et validation :** dépôt organisé, README, démonstration et fiche portfolio. Chaque apprenant explique son code et réalise une petite modification avec documentation autorisée ; certaines observations individuelles peuvent commencer en M10 selon l’effectif.

## Évaluation et moyens

**Évaluation continue :** exercices et livrables de chaque module, avec retour et reprise ciblés. Le formateur distingue travail autonome, travail avec documentation et travail guidé, y compris en binôme.

**Barème de la réalisation livrée :** besoin et organisation 10 % ; interface et accessibilité 20 % ; JavaScript et fonctionnalités 20 % ; API et données 20 % ; tests et sécurité 15 % ; documentation 5 % ; explication individuelle 10 %.

**Moyens :** postes équipés, logiciels testés, maquettes simples, ressources téléchargeables et données fictives. Aucun framework front-end, outil de conception avancé ou hébergement payant n’est exigé des apprenants ; les exercices personnels supplémentaires restent facultatifs.

## Projet final — « Boutique Essentielle »

Réaliser une mini-application de **catalogue et de suivi simplifié des stocks d’une petite boutique**, en réutilisant les travaux des modules. Le visiteur consulte les produits actifs et filtre par catégorie ; le gestionnaire crée et modifie les produits, leur prix, leur quantité et leur état actif/inactif.

**Périmètre :** HTML/CSS/JavaScript, API Express et deux tables MySQL — catégories et produits. Contrôler les champs côté serveur, refuser les prix négatifs et les quantités non entières ou négatives, puis vérifier la persistance ; ni paiement, ni comptes clients, ni historique des mouvements de stock.

**Remise :** code, script SQL, README, tests et démonstration avec données fictives. Par défaut, la gestion reste locale et non exposée au réseau ; toute mise en ligne exige authentification et autorisation côté serveur, avec un socle fourni par le formateur si nécessaire.
