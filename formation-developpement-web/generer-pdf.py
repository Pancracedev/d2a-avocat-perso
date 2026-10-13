#!/usr/bin/env python3
"""Génère le PDF (2 pages A4 max) du programme de formation développement web."""

from reportlab.lib import colors
from reportlab.lib.enums import TA_JUSTIFY
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)

import os
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                     "programme-developpement-web-6-mois.pdf")

DARK = colors.HexColor("#111827")
ACCENT = colors.HexColor("#1d4ed8")
GREY = colors.HexColor("#4b5563")
LIGHT = colors.HexColor("#eef2ff")
LINE = colors.HexColor("#d1d5db")

W, H = A4
MARGIN = 10.5 * mm
USABLE = W - 2 * MARGIN

style = dict(fontName="Helvetica", fontSize=7.85, leading=9.35, textColor=DARK)

S_TITLE = ParagraphStyle("t", fontName="Helvetica-Bold", fontSize=14.5, leading=15.5, textColor=DARK)
S_SUB = ParagraphStyle("s", fontName="Helvetica-Bold", fontSize=8.6, leading=10,
                       textColor=ACCENT, spaceBefore=1.5)
S_META = ParagraphStyle("m", fontName="Helvetica", fontSize=8.0, leading=9.6, textColor=GREY, spaceBefore=2.5)
S_H2 = ParagraphStyle("h2", fontName="Helvetica-Bold", fontSize=9.3, leading=10.5,
                      textColor=ACCENT, spaceBefore=4, spaceAfter=2)
S_BODY = ParagraphStyle("b", fontName="Helvetica", fontSize=7.85, leading=9.35, textColor=DARK, alignment=TA_JUSTIFY)
S_CELL = ParagraphStyle("c", fontName="Helvetica", fontSize=7.85, leading=9.35, textColor=DARK)
S_CELL_B = ParagraphStyle("cb", fontName="Helvetica-Bold", fontSize=7.85, leading=9.35, textColor=DARK)
S_TH = ParagraphStyle("th", fontName="Helvetica-Bold", fontSize=8.0, leading=9.4,
                      textColor=colors.white)


def P(t, s=S_CELL):
    return Paragraph(t, s)


def section(title):
    return Paragraph(title, S_H2)


def table(data, widths, header=True, zebra=True):
    t = Table(data, colWidths=widths, repeatRows=1 if header else 0)
    cmds = [
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 3.2),
        ("RIGHTPADDING", (0, 0), (-1, -1), 3.2),
        ("TOPPADDING", (0, 0), (-1, -1), 2.6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2.6),
        ("LINEBELOW", (0, 0), (-1, -2), 0.25, LINE),
        ("BOX", (0, 0), (-1, -1), 0.4, LINE),
    ]
    if header:
        cmds += [("BACKGROUND", (0, 0), (-1, 0), DARK),
                 ("TOPPADDING", (0, 0), (-1, 0), 3),
                 ("BOTTOMPADDING", (0, 0), (-1, 0), 3)]
    if zebra:
        for i in range(1 if header else 0, len(data)):
            if (i % 2) == 1:
                cmds.append(("BACKGROUND", (0, i), (-1, i), LIGHT))
    t.setStyle(TableStyle(cmds))
    return t


story = []

# ---------------------------------------------------------------- En-tête
story.append(P("PROGRAMME DE FORMATION — DÉVELOPPEMENT WEB", S_TITLE))
story.append(P("Fondamentaux du web · Conception d'interfaces professionnelles · "
               "Intégration web · Applications dynamiques", S_SUB))
story.append(P("6 mois · 26 semaines · <b>156 heures</b> · 6 h/semaine (2 séances de 3 h) · "
               "centre de formation professionnelle · public débutant ayant des bases informatiques · "
               "12 apprenants maximum · 1 poste par apprenant.", S_META))

# ---------------------------------------------------------------- Cadrage
story.append(section("Cadrage"))
cadrage = [
    ["Public", "Débutants complets en développement, ayant des bases informatiques : gestion de fichiers et "
               "dossiers, navigation web, bureautique."],
    ["Prérequis", "Utiliser un ordinateur et une arborescence de fichiers ; lire et exécuter une consigne écrite ; "
                  "notions d'anglais technique (souhaitable, non exigé)."],
    ["Moyens", "VS Code, Git/GitHub, Figma, navigateurs et DevTools, API publiques, Netlify/Vercel, MDN ; "
               "1 formateur développeur en activité + 1 tuteur pour les revues de code."],
    ["Modalités", "70 % de pratique machine, 20 % de démonstration et d'analyse, 10 % de théorie et d'évaluation. "
                  "<b>Aucune séance sans production.</b>"],
    ["Évaluation", "Formative et continue : checkpoints hebdomadaires (30–45 min), revues de code croisées, "
                   "entretiens individuels en S9 et S18. Sommative : 3 jalons (fin M3, fin M5, M8) et grille de "
                   "12 compétences."],
    ["Validation", "<b>10/12 compétences « acquises »</b>, dont obligatoirement Responsive, DOM/événements, "
                   "Intégration et Déploiement, + projet final validé par un jury. Rattrapage : 3 h de remédiation "
                   "puis nouvelle présentation sous 3 semaines. Assiduité requise : 80 %."],
]
story.append(table([[P(a, S_CELL_B), P(b)] for a, b in cadrage], [58, USABLE - 58], header=False))

# ---------------------------------------------------------------- Objectifs
story.append(section("Objectifs de sortie (compétences visées)"))
story.append(P(
    "À l'issue des six mois, l'apprenant sait : <b>1)</b> structurer un contenu en HTML sémantique, accessible et "
    "bien référencé ; <b>2)</b> styliser et rendre responsive une interface en CSS (Flexbox, Grid, variables, "
    "mobile-first) ; <b>3)</b> concevoir une interface professionnelle (wireframe, maquette Figma hi-fi, design "
    "system léger) ; <b>4)</b> programmer en JavaScript (logique, DOM, événements, données, API asynchrone) ; "
    "<b>5)</b> intégrer une maquette au pixel et au comportement près, avec un niveau de qualité mesuré ; "
    "<b>6)</b> développer une application web dynamique (composants, pages, données distantes, persistance) et la "
    "déployer ; <b>7)</b> travailler avec les outils et méthodes du métier (Git/GitHub, debug, documentation, revue "
    "de code, veille) ; <b>8)</b> livrer et présenter un projet complet documenté.", S_BODY))

# ---------------------------------------------------------------- Choix pédagogiques
story.append(section("1. Choix pédagogiques et justification"))
choix = [
    ("1. Fil rouge unique décliné sur 6 mois",
     "Site vitrine d'une activité professionnelle (M2→M6), puis application dynamique de prise de contact et de "
     "rendez-vous (M7→M8) ; chaque module réinjecte le précédent.",
     "Aucun exercice hors-sol : l'apprenant voit son produit évoluer et mesure sa progression ; le réinvestissement "
     "immédiat consolide les acquis."),
    ("2. Progression en spirale + consolidation obligatoire",
     "1 h de travail de consolidation par séance, non noté mais vérifié ; chaque notion est revue dans un contexte "
     "nouveau 2 à 3 fois.",
     "Le code s'apprend par répétition espacée : on consolide avant d'empiler une notion supplémentaire."),
    ("3. Plus de 70 % du temps sur machine, rituel de séance stable",
     "20 min quiz/rappel · 30 min démonstration commentée · 100 min atelier · 30 min revue collective.",
     "Attention soutenue, feedback immédiat et trace d'avancement à chaque séance ; le formateur fait faire plutôt "
     "qu'il ne décrit."),
    ("4. Difficulté croissante et sécurisée",
     "Atelier guidé (pas à pas) → atelier autonome (objectif + ressources) → défi libre, à chaque module.",
     "Évite la double peine « syntaxe + logique » chez le débutant ; l'autonomie s'installe sans rupture ni "
     "décrochage."),
    ("5. Évaluation par compétences, formative et continue",
     "Checkpoints, revues de code croisées, auto-évaluation, grille de 12 compétences ; notes limitées aux jalons.",
     "On évalue ce que l'apprenant sait faire, pas ce qu'il récite ; l'erreur devient un objet d'analyse "
     "(console → hypothèse → test), cœur du métier."),
    ("6. Outils réels du marché, aucun outil pédagogique isolé",
     "VS Code, Git, Figma, DevTools, hébergement en ligne ; publication du premier site dès la 4e semaine.",
     "Transfert direct en entreprise ou en agence ; l'apprenant quitte la formation avec des preuves publiques "
     "de ses compétences."),
    ("7. Qualité traitée dès le début, pas en fin de parcours",
     "Responsive mobile-first, accessibilité (contrastes, clavier, labels), performance, SEO technique, "
     "mentions et RGPD répartis sur M2, M3 et M6.",
     "Ce sont des exigences non négociables des commanditaires ; traitées après coup, elles coûtent cher et sont "
     "rarement maîtrisées."),
    ("8. Différenciation et autonomisation",
     "Socle obligatoire + défi d'approfondissement dans chaque atelier ; binômes de remédiation ; méthode de "
     "recherche imposée (MDN → console → hypothèse → test) ; veille de 5 min par séance.",
     "Gère l'hétérogénéité sans ralentir le groupe ; les frameworks changeront, la capacité à apprendre et à se "
     "documenter restera."),
]
story.append(table(
    [[P("Choix pédagogique", S_TH), P("Mise en œuvre", S_TH), P("Justification", S_TH)]]
    + [[P(a, S_CELL_B), P(b), P(c)] for a, b, c in choix],
    [104, 190, USABLE - 294]))

# ---------------------------------------------------------------- Programme détaillé
story.append(section("2. Programme détaillé"))

modules = [
    ("M1 · Socle : web, poste de travail, Git<br/>(S1–2 · 12 h)",
     "Comprendre client/serveur, DNS, HTTP ; organiser un projet (arborescence, nommage) ; installer et utiliser "
     "VS Code, le terminal et Git ; lire la console et une requête réseau ; chercher dans la documentation.",
     "Installation et configuration du poste, compte GitHub ; ateliers terminal (navigation, fichiers) ; premier "
     "dépôt, 5 commits ; lecture d'une requête HTTP dans l'onglet Réseau ; exercices « quelle balise / quelle "
     "erreur ? » ; recherche guidée sur MDN.",
     "Dépôt GitHub « journal de bord » (README + 5 commits) ; fiche « anatomie d'une page web »."),
    ("M2 · HTML5 sémantique &amp; accessibilité<br/>(S3–5 · 18 h)",
     "Structurer un contenu (header, nav, main, section, article, footer), images et médias, liens, listes, "
     "tableaux ; construire un formulaire accessible ; respecter alt, labels, hiérarchie de titres et contrastes ; "
     "bases du référencement naturel.",
     "6 pages écrites en séance ; correction d'une page « div-soup » ; audit accessibilité au clavier et des "
     "contrastes ; formulaire de contact avec labels et messages d'erreur ; contrôle W3C ; mise en ligne sur "
     "Netlify.",
     "<b>Site vitrine 3 pages</b> (HTML seul, sémantique et accessible), en ligne ; checkpoint 1 : page inédite "
     "codée en 45 min."),
    ("M3 · CSS &amp; interfaces responsive<br/>(S6–9 · 24 h)",
     "Maîtriser le modèle de boîte, les sélecteurs et les priorités ; Flexbox et Grid ; unités relatives, "
     "typographie et espacements ; mobile-first et media queries ; variables CSS et design tokens ; nommage "
     "maintenable (BEM) ; transitions simples.",
     "Reproduction chronométrée de composants (navbar, carte, grille d'articles, footer) ; quiz de priorité et de "
     "calcul de tailles ; refonte d'une mise en page en Grid ; adaptation du même écran en 3 tailles ; création "
     "d'un mini design system en variables CSS.",
     "4 écrans responsives du fil rouge (CSS sans framework) + bibliothèque « 15 composants » ; checkpoint 2 : "
     "composant à reproduire en 1 h."),
    ("M4 · UI/UX &amp; maquettage<br/>(S10–11 · 12 h)",
     "Wireframes ; hiérarchie visuelle, grille, échelle typographique ; couleur et contraste (AA) ; composants et "
     "états (survol, focus, erreur) ; maquette Figma hi-fi desktop et mobile, prototype cliquable ; passation "
     "(tokens, annotations).",
     "Audit UI de 2 sites (grille, lisibilité, états) ; wireframes papier puis Figma ; maquette des 4 écrans avec "
     "styles partagés ; prototype cliquable ; critique de pairs à l'aide d'une grille ; export des tokens "
     "(couleurs, typographies, espacements).",
     "<b>Maquette Figma hi-fi</b> de 4 écrans (états inclus) + prototype cliquable + fichier de tokens réutilisé "
     "en M6."),
    ("M5 · JavaScript &amp; DOM<br/>(S12–16 · 30 h)",
     "Logique (types, conditions, boucles, fonctions, tableaux et objets) ; manipuler le DOM (sélection, création, "
     "classes) ; gérer les événements ; valider un formulaire ; stocker localement ; consommer une API en "
     "asynchrone (fetch, JSON, async/await, try/catch) ; organiser en modules.",
     "Katas quotidiens de 10 min (boucles, tableaux) ; menu mobile déroulant ; annuaire filtrable généré depuis un "
     "tableau d'objets ; validateur de formulaire avec messages d'erreur ; application « API du jour » avec états "
     "chargement et erreur ; cache en localStorage ; debug guidé aux points d'arrêt ; refactorisation en modules.",
     "12 exercices versionnés + application « annuaire filtrable » + application « données distantes » ; "
     "checkpoint 3 : 30 lignes de JS en 45 min ; contrôle de logique écrit (30 min)."),
    ("M6 · Intégration web professionnelle<br/>(S17–19 · 18 h)",
     "Intégrer une maquette Figma complète (desktop, tablette, mobile) au pixel près ; découper en composants CSS "
     "réutilisables ; micro-animations ; optimiser le poids et les images ; atteindre Lighthouse 90 et plus "
     "(performance, accessibilité, SEO) ; SEO technique (balises, sitemap, données structurées) ; mettre en ligne "
     "avec domaine et HTTPS ; mentions et consentement RGPD.",
     "Sprint d'intégration de 3 séances sur maquette fournie, en binômes alternés ; audit et optimisation d'un "
     "site dégradé (images, polices, contrastes) ; déploiement Netlify/Vercel, nom de domaine et HTTPS ; tests sur "
     "3 navigateurs et 2 tailles ; revue croisée « conformité maquette » (écart ≤ 5 %) ; mesures Lighthouse "
     "avant/après.",
     "<b>Site multipage responsive déployé</b>, conforme à la maquette (écart visuel ≤ 5 %), Lighthouse ≥ 90 en "
     "performance, accessibilité et SEO ; rapport d'optimisation d'une page (avant/après)."),
    ("M7 · Applications web dynamiques<br/>(S20–23 · 24 h)",
     "Notions de composant, de props et d'état ; structurer une application en pages et routes ; interroger une API "
     "et présenter des données ; formulaires et états d'interface (chargement, vide, erreur, succès) ; persistance "
     "des données ; build et mise en production ; refactorisation.",
     "Conversion des composants de M6 en composants réutilisables ; pages liste et détail avec filtres et recherche "
     "connectées à une API ; formulaire de contact ou de rendez-vous fonctionnel ; favoris persistants ; gestion "
     "des cas d'erreur et de l'accessibilité clavier ; revue de code et refactorisation guidée ; déploiement du "
     "build.",
     "<b>Application dynamique déployée</b> (3 routes minimum, données distantes, formulaire fonctionnel, "
     "persistance, erreurs gérées) + README technique (installation, variables, déploiement)."),
    ("M8 · Projet final, portfolio &amp; insertion<br/>(S24–26 · 18 h)",
     "Conduire un projet de bout en bout : cadrage, backlog et découpage, cahier des charges, délais, suivi ; "
     "produire du code lisible et documenté ; préparer l'insertion (portfolio, GitHub, CV, LinkedIn) ; présenter "
     "et défendre ses choix techniques.",
     "2 séances de cadrage (périmètre, backlog, maquette validée) + 3 séances de développement encadré + 1 séance "
     "de revue de code finale ; atelier portfolio (3 projets en ligne), CV et LinkedIn ; simulation d'entretien "
     "technique (explication de code, justification d'un choix) ; soutenance de 15 min (démonstration, "
     "justification, axes d'amélioration).",
     "<b>Projet final fonctionnel</b> (site + application) documenté et déployé ; <b>portfolio en ligne</b> ; "
     "support de soutenance ; grille de 12 compétences auto-évaluée puis validée par le jury."),
]
story.append(table(
    [[P("Module (semaines · heures)", S_TH), P("Objectifs opérationnels", S_TH),
      P("Activités pratiques", S_TH), P("Livrables et évaluation", S_TH)]]
    + [[P(m, S_CELL_B), P(o), P(a), P(l)] for m, o, a, l in modules],
    [80, 138, 172, USABLE - 390]))

# ---------------------------------------------------------------- Grille / équilibre
story.append(section("3. Grille de compétences, équilibre horaire et suite de parcours"))
story.append(P(
    "<b>Grille de 12 compétences :</b> 1 HTML sémantique · 2 Accessibilité · 3 CSS (Flexbox, Grid) · "
    "4 Responsive mobile-first · 5 Git/GitHub · 6 Logique JavaScript · 7 DOM et événements · 8 Données et API "
    "asynchrone · 9 UI et maquettage · 10 Intégration d'une maquette · 11 Application dynamique (composants, "
    "routage) · 12 Déploiement, documentation et présentation.", S_BODY))
story.append(P(
    "<b>Validation :</b> 10 compétences sur 12 « acquises », dont obligatoirement 3, 4, 7, 10 et 12 ; projet final "
    "évalué par un jury (fonctionnalité, qualité du code, conformité au cahier des charges, autonomie, "
    "présentation).", S_BODY))
story.append(Spacer(1, 2))
story.append(P(
    "<b>Équilibre horaire :</b> pratique machine 108 h (69 %) · démonstrations et analyses 24 h (15 %) · théorie, "
    "évaluation et professionnalisation 24 h (16 %) ; chacune des 52 séances produit un livrable. <b>Vigilance :</b> "
    "6 h par semaine supposent 1 à 2 h de pratique personnelle entre les séances.", S_BODY))
story.append(P(
    "<b>Débouchés :</b> intégrateur web, développeur front-end junior, assistant chef de projet web, créateur de "
    "sites pour TPE et indépendants. <b>Poursuite :</b> stage de 4 à 8 semaines (optionnel) et spécialisation de "
    "24 à 40 h (back-end/API, CMS, framework, WordPress).", S_BODY))
story.append(section("4. Séquence type d'une séance de 3 h (rythme identique de S1 à S26)"))
seq = [
    ("Accueil et rappel · 20 min", "Quiz de 5 questions sur les acquis, tour des blocages de la consolidation, annonce de l'objectif de la séance."),
    ("Démonstration commentée · 30 min", "Le formateur code devant le groupe et verbalise ses décisions, ses "
     "erreurs et sa lecture des DevTools ; les apprenants reproduisent en direct."),
    ("Atelier pratique · 100 min", "Étape guidée (pas à pas) puis autonome (objectif + ressources) puis défi "
     "facultatif ; formateur en circulation, soutien de 5 min maximum par blocage."),
    ("Revue collective · 30 min", "Deux travaux projetés et commentés, erreurs types analysées, dépôt du code, consolidation annoncée pour la "
     "séance suivante."),
]
story.append(table([[P(a, S_CELL_B), P(b)] for a, b in seq], [110, USABLE - 110], header=False))
story.append(Spacer(1, 2))
story.append(P(
    "<b>Dossier remis au jury :</b> 3 projets en ligne (site vitrine, site intégré responsive, application "
    "dynamique) ; dépôts Git et historique de commits ; portfolio ; grille de 12 compétences auto-évaluée ; "
    "support de soutenance.", S_BODY))

def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("Helvetica", 6.4)
    canvas.setFillColor(GREY)
    canvas.drawString(MARGIN, 6 * mm,
                      "Programme de formation — Développement web · 156 h / 26 semaines · formation professionnelle "
                      "pour débutants")
    canvas.drawRightString(W - MARGIN, 6 * mm, "Page %d/2" % doc.page)
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.4)
    canvas.line(MARGIN, 8.4 * mm, W - MARGIN, 8.4 * mm)
    canvas.restoreState()


doc = BaseDocTemplate(
    OUT, pagesize=A4, leftMargin=MARGIN, rightMargin=MARGIN,
    topMargin=MARGIN, bottomMargin=10.5 * mm,
    title="Programme de formation — Développement web (156 h / 6 mois)",
    author="Centre de formation professionnelle", subject="Ingénierie pédagogique",
)
frame = Frame(MARGIN, 10.5 * mm, USABLE, H - MARGIN - 10.5 * mm, id="main",
              leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
doc.addPageTemplates([PageTemplate(id="page", frames=[frame], onPage=footer)])
doc.build(story)

import subprocess  # noqa: E402

pages = subprocess.run(["grep", "-c", "/Type /Page$", OUT], capture_output=True, text=True)
print("PDF écrit :", OUT)
print("Pages (/Type /Page) :", pages.stdout.strip())
