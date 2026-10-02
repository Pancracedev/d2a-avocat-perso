export const languages = {
  fr: 'Français',
  en: 'English',
} as const

export type Lang = keyof typeof languages

export const defaultLang: Lang = 'fr'

export const ui = {
  fr: {
    // ─── Meta & navigation ────────────────────────────────────────────────
    'meta.siteName': 'D2A Avocat',
    'meta.defaultDescription':
      'Cabinet d’avocat dirigé par Maître Diane. Droit des affaires, des étrangers et de la famille. France, Bénin, Côte d’Ivoire.',

    'nav.home': 'Accueil',
    'nav.firm': 'Cabinet',
    'nav.expertise': 'Expertises',
    'nav.fees': 'Honoraires',
    'nav.news': 'Actualités',
    'nav.contact': 'Contact',
    'nav.book': 'Prendre rendez-vous',
    'nav.openMenu': 'Ouvrir le menu',
    'nav.closeMenu': 'Fermer le menu',
    'nav.langLabel': 'Langue',

    // ─── Héro ─────────────────────────────────────────────────────────────
    'hero.title': 'Le droit qui vous ressemble',
    'hero.subtitle':
      'Un accompagnement juridique clair pour vos affaires, votre parcours migratoire et vos enjeux familiaux entre la France et l’Afrique de l’Ouest.',
    'hero.ctaPrimary': 'Prendre rendez-vous',
    'hero.ctaSecondary': 'Nos expertises',

    // ─── Footer ───────────────────────────────────────────────────────────
    'footer.tagline': 'Le droit qui vous ressemble',
    'footer.address': 'Adresse professionnelle : sur demande',
    'footer.phone': 'Téléphone : sur demande',
    'footer.email': 'diane@d2a-avocat.fr',
    'footer.legal': 'Mentions légales',
    'footer.privacy': 'Politique de confidentialité',
    'footer.partner': 'Partenaire au Bénin',
    'footer.rights': 'Tous droits réservés.',

    // ─── 404 ──────────────────────────────────────────────────────────────
    'notFound.title': 'Page introuvable',
    'notFound.description': 'La page que vous cherchez n’existe pas ou a été déplacée.',
    'notFound.ctaHome': 'Retour à l’accueil',
    'notFound.ctaExpertise': 'Voir nos expertises',

    // ─── Accueil ──────────────────────────────────────────────────────────
    'home.highlights.eyebrow': 'D2A en bref',
    'home.highlights.title': 'Trois domaines, trois pays, une méthode',
    'home.highlights.text':
      'Un cabinet généraliste qui allie précision juridique et proximité humaine.',
    'home.highlight.0.title': '3 domaines',
    'home.highlight.0.text': 'Droit des affaires, des étrangers et de la famille.',
    'home.highlight.1.title': '3 pays',
    'home.highlight.1.text':
      'France, Bénin et Côte d’Ivoire — avec SCP AD2A pour partenaire.',
    'home.highlight.2.title': '48 h',
    'home.highlight.2.text':
      'Un retour sous 48 heures ouvrées après votre premier message.',

    'home.guide.eyebrow': 'Vous êtes au bon endroit si…',
    'home.guide.title': 'Un premier repère pour votre situation',
    'home.guide.text':
      'Choisissez le sujet qui se rapproche le plus de votre besoin. Nous préciserons ensemble la suite lors du premier échange.',
    'home.guide.0.title': 'Vous dirigez une entreprise',
    'home.guide.0.text':
      'Vous créez, développez ou sécurisez une activité et cherchez un conseil juridique qui reste lisible et opérationnel.',
    'home.guide.1.title': 'Votre parcours concerne la France',
    'home.guide.1.text':
      'Vous avez une question de séjour, de nationalité, de regroupement familial ou de recours administratif.',
    'home.guide.2.title': 'Votre famille traverse une étape',
    'home.guide.2.text':
      'Vous avez besoin d’un cadre clair pour une séparation, les enfants, une pension ou une situation internationale.',
    'home.guide.cta': 'Voir ce domaine',
    'home.expertises.eyebrow': 'Expertises',
    'home.expertises.title': 'Trois champs d’action complémentaires',
    'home.expertises.text':
      'Nous intervenons là où les décisions comptent : votre entreprise, votre parcours migratoire, votre famille.',

    'home.international.eyebrow': 'Présence internationale',
    'home.international.title': 'Un ancrage en France, un pont vers l’Afrique de l’Ouest',
    'home.international.text':
      'Le cabinet intervient en France et accompagne ses clients au Bénin et en Côte d’Ivoire avec l’appui de son partenaire.',
    'home.intl.country.0.code': 'FR',
    'home.intl.country.0.name': 'France',
    'home.intl.country.0.text': 'Marché principal — droit français et conseil européen.',
    'home.intl.country.1.code': 'BJ',
    'home.intl.country.1.name': 'Bénin',
    'home.intl.country.1.text':
      'Présence sur place via le partenaire SCP AD2A à Cotonou.',
    'home.intl.country.2.code': 'CI',
    'home.intl.country.2.name': 'Côte d’Ivoire',
    'home.intl.country.2.text':
      'Interventions ponctuelles et conseil des affaires ouest-africaines.',
    'home.intl.partner.title': 'SCP AD2A · Bénin',
    'home.intl.partner.text':
      'Le cabinet s’appuie sur un partenaire de confiance à Cotonou pour vos dossiers au Bénin.',
    'home.intl.partner.link': 'Découvrir le partenaire',

    'home.method.eyebrow': 'Notre méthode',
    'home.method.title': 'Comment nous travaillons',
    'home.method.text': 'Un cadre clair, du premier échange jusqu’au suivi du dossier.',
    'home.method.0.title': 'Premier échange',
    'home.method.0.text':
      'Nous écoutons votre situation et vous orientons, sans jargon inutile.',
    'home.method.1.title': 'Analyse du dossier',
    'home.method.1.text':
      'Nous examinons les pièces et construisons la stratégie la plus adaptée.',
    'home.method.2.title': 'Cadre clair',
    'home.method.2.text':
      'Convention d’honoraires établie avant toute intervention, sans surprise.',
    'home.method.3.title': 'Accompagnement',
    'home.method.3.text':
      'Un interlocuteur unique et des retours réguliers jusqu’à la résolution du dossier.',

    'home.consult.eyebrow': 'Consultations',
    'home.consult.title': 'Quatre façons de vous accompagner',
    'home.consult.text':
      'Choisissez le format qui vous convient. Un appel découverte gratuit permet toujours de commencer.',
    'home.consult.0.title': 'Appel découverte',
    'home.consult.0.format': 'Audio · 15 min',
    'home.consult.0.price': 'Gratuit',
    'home.consult.0.note':
      'Un premier échange pour clarifier votre besoin et la suite à donner.',
    'home.consult.1.title': 'Consultation vidéo',
    'home.consult.1.format': 'Visioconférence',
    'home.consult.1.price': 'Sur demande',
    'home.consult.1.note': 'Un entretien sécurisé, où que vous soyez.',
    'home.consult.2.title': 'Consultation écrite',
    'home.consult.2.format': 'Réponse écrite sous 48–72 h',
    'home.consult.2.price': '150 €',
    'home.consult.2.note':
      'Une analyse écrite de votre situation, idéale pour les questions précises.',
    'home.consult.3.title': 'Consultation présentielle',
    'home.consult.3.format': 'Sur site',
    'home.consult.3.price': 'Sur demande',
    'home.consult.3.note':
      'Un rendez-vous au cabinet pour les dossiers qui méritent un échange direct.',
    'home.consult.disclaimer':
      'Paiement par virement bancaire uniquement. Le RIB est communiqué après réservation.',

    'home.news.eyebrow': 'Actualités',
    'home.news.title': 'Dernières notes du cabinet',
    'home.news.text':
      'Éclairages pratiques sur vos droits et nos domaines d’intervention.',
    'home.news.all': 'Toutes les actualités',

    'home.cta.eyebrow': 'Un dossier ?',
    'home.cta.title': 'Vous avez besoin d’un éclairage juridique ?',
    'home.cta.text':
      'Contactez le cabinet : nous revenons vers vous sous 48 heures ouvrées.',
    'home.cta.primary': 'Prendre rendez-vous',
    'home.cta.secondary': 'Nous écrire',

    // ─── Le cabinet ───────────────────────────────────────────────────────
    'cabinet.eyebrow': 'Le cabinet',
    'cabinet.title': 'Le cabinet',
    'cabinet.description':
      'Rencontrez Maître Diane et découvrez l’approche du cabinet D2A Avocat.',
    'cabinet.intro':
      'D2A Avocat est un cabinet généraliste, premium et accessible, pensé pour vous accompagner avec précision — sans jargon inutile, sans distance inutile.',
    'cabinet.quote': 'Le droit qui vous ressemble.',
    'cabinet.photo.alt': 'Espace réservé au portrait de Maître Diane',
    'cabinet.photo.pending': 'Portrait de Maître Diane à venir',
    'cabinet.bio.title': 'Maître Diane',
    'cabinet.bio.text':
      'Maître Diane dirige D2A Avocat avec une ambition simple : rendre le droit plus clair, plus humain et plus utile dans les moments où les décisions comptent.',
    'cabinet.timeline.title': 'Parcours & formation',
    'cabinet.timeline.0.date': '[Année]',
    'cabinet.timeline.0.title': 'Formation en droit',
    'cabinet.timeline.0.text':
      'Diplôme en droit et spécialisation. Information to be finalised before publication.',
    'cabinet.timeline.1.date': '[Année]',
    'cabinet.timeline.1.title': 'Prestation de serment',
    'cabinet.timeline.1.text':
      'Inscription et prestation de serment au barreau. Information to be finalised before publication.',
    'cabinet.timeline.2.date': '[Année]',
    'cabinet.timeline.2.title': 'Fondation de D2A Avocat',
    'cabinet.timeline.2.text':
      'Création d’un cabinet généraliste et premium. Information to be finalised before publication.',
    'cabinet.timeline.3.date': '[Année]',
    'cabinet.timeline.3.title': 'Partenaire au Bénin',
    'cabinet.timeline.3.text':
      'Partenariat avec SCP AD2A pour les dossiers ouest-africains. Information to be finalised before publication.',

    'cabinet.values.title': 'Ce que vous pouvez attendre de nous',
    'cabinet.values.text': 'Quatre engagements simples, tenus sur chaque dossier.',
    'cabinet.values.0.title': 'Clarté',
    'cabinet.values.0.text':
      'Expliquer le droit sans jargon, pour des décisions éclairées.',
    'cabinet.values.1.title': 'Exigence',
    'cabinet.values.1.text': 'Une rigueur technique et un suivi sans faille.',
    'cabinet.values.2.title': 'Humanité',
    'cabinet.values.2.text': 'Une écoute attentive, sans distance inutile.',
    'cabinet.values.3.title': 'Engagement',
    'cabinet.values.3.text':
      'Un interlocuteur unique, des réponses sous 48 heures ouvrées.',

    'cabinet.benin.title': 'Le cabinet au Bénin',
    'cabinet.benin.text':
      'Pour vos questions au Bénin ou en Afrique de l’Ouest, D2A Avocat s’appuie sur un partenaire de confiance : SCP AD2A, à Cotonou.',
    'cabinet.benin.link': 'Site de SCP AD2A',

    'cabinet.cta.title': 'Rencontrons-nous',
    'cabinet.cta.text':
      'Commencez par un appel découverte gratuit pour parler de votre situation.',
    'cabinet.cta.primary': 'Prendre rendez-vous',

    // ─── Expertises (page mère) ───────────────────────────────────────────
    'expertises.eyebrow': 'Expertises',
    'expertises.title': 'Expertises',
    'expertises.description':
      'Trois domaines d’intervention : droit des affaires, droit des étrangers, droit de la famille.',
    'expertises.intro':
      'Nous intervenons là où les décisions comptent vraiment : votre entreprise, votre parcours migratoire, votre famille.',
    'expertises.business': 'Droit des affaires',
    'expertises.immigration': 'Droit des étrangers',
    'expertises.family': 'Droit de la famille',
    'expertises.card.cta': 'Découvrir le domaine',

    // ─── Droit des affaires ───────────────────────────────────────────────
    'expert.business.eyebrow': 'Droit des affaires',
    'expert.business.title': 'Droit des affaires',
    'expert.business.description':
      'Conseil et contentieux pour dirigeants, entrepreneurs et sociétés.',
    'expert.business.intro':
      'Nous vous aidons à structurer, protéger et faire avancer vos projets d’entreprise, en France et à l’international.',
    'expert.business.situations.title': 'Les situations que nous traitons',
    'expert.business.sit.0': 'Création de société et choix de la structure juridique',
    'expert.business.sit.1': 'Rédaction et négociation de contrats commerciaux',
    'expert.business.sit.2': 'Relations avec les partenaires, clients et fournisseurs',
    'expert.business.sit.3':
      'Contentieux commercial : recouvrement, inexécution, responsabilité',
    'expert.business.sit.4': 'Conseil quotidien aux dirigeants, en forfait',
    'expert.business.sit.5':
      'Opérations internationales et implantation en Afrique de l’Ouest',
    'expert.business.sit.6': 'Transmission, cession et restructuration d’entreprise',
    'expert.business.method.title': 'Notre méthode',
    'expert.business.met.0.title': 'Écouter',
    'expert.business.met.0.text':
      'Comprendre votre activité, vos enjeux et vos contraintes opérationnelles.',
    'expert.business.met.1.title': 'Proposer',
    'expert.business.met.1.text':
      'Définir une stratégie adaptée — préventive ou contentieuse — et la cadre écrite.',
    'expert.business.met.2.title': 'Structurer',
    'expert.business.met.2.text':
      'Mettre en place les contrats, statuts et procédures qui sécurisent vos opérations.',
    'expert.business.met.3.title': 'Suivre',
    'expert.business.met.3.text':
      'Rester à vos côtés au fil de la vie de l’entreprise, avec un interlocuteur unique.',
    'expert.business.faq.title': 'Questions fréquentes',
    'expert.business.faq.0.q': 'Combien coûte une création de société ?',
    'expert.business.faq.0.a':
      'Chaque dossier est unique : tout dépend de la structure et de la complexité. Après analyse, une estimation claire vous est remise, généralement sous 48 heures ouvrées.',
    'expert.business.faq.1.q': 'Proposez-vous un accompagnement préventif pour les PME ?',
    'expert.business.faq.1.a':
      'Oui. Le conseil régulier aux dirigeants fait partie de nos missions, au forfait ou au temps passé, selon les besoins de votre entreprise.',
    'expert.business.faq.2.q': 'Intervenez-vous pour des sociétés présentes en Afrique ?',
    'expert.business.faq.2.a':
      'Oui, en lien avec notre partenaire SCP AD2A au Bénin, pour accompagner vos opérations en Afrique de l’Ouest.',
    'expert.business.faq.3.q': 'Les honoraires sont-ils fixés à l’avance ?',
    'expert.business.faq.3.a':
      'Une convention d’honoraires est remise avant toute intervention : mission, mode de calcul, montant et modalités de paiement.',
    'expert.business.faq.4.q': 'Comment se déroule une première consultation ?',
    'expert.business.faq.4.a':
      'Un appel découverte gratuit pour cerner le besoin, puis le format qui vous convient : vidéo, écrit ou au cabinet.',

    // ─── Droit des étrangers ──────────────────────────────────────────────
    'expert.immigration.eyebrow': 'Droit des étrangers',
    'expert.immigration.title': 'Droit des étrangers',
    'expert.immigration.description':
      'Titres de séjour, regroupement familial, naturalisation et recours.',
    'expert.immigration.intro':
      'Des démarches migratoires claires, suivies de près, pour avancer avec un dossier solide et un interlocuteur unique.',
    'expert.immigration.situations.title': 'Les situations que nous traitons',
    'expert.immigration.sit.0': 'Demandes de titres de séjour et de visas',
    'expert.immigration.sit.1':
      'Regroupement familial et droit à la vie privée et familiale',
    'expert.immigration.sit.2': 'Naturalisation et accès à la nationalité',
    'expert.immigration.sit.3':
      'Recours contre les refus de titre et les obligations de quitter le territoire',
    'expert.immigration.sit.4': 'Changements de statut (salarié, entrepreneur…)',
    'expert.immigration.sit.5':
      'Conseil pour les mobilités entre la France et l’Afrique de l’Ouest',
    'expert.immigration.sit.6': 'Préparation aux entretiens en préfecture',
    'expert.immigration.method.title': 'Notre méthode',
    'expert.immigration.met.0.title': 'Écouter',
    'expert.immigration.met.0.text':
      'Comprendre votre parcours, votre situation administrative et votre projet.',
    'expert.immigration.met.1.title': 'Étudier',
    'expert.immigration.met.1.text':
      'Vérifier vos droits et identifier la voie de régularisation la plus solide.',
    'expert.immigration.met.2.title': 'Construire',
    'expert.immigration.met.2.text':
      'Constituer un dossier exemplaire et anticiper les questions de l’administration.',
    'expert.immigration.met.3.title': 'Défendre',
    'expert.immigration.met.3.text':
      'Assurer le suivi et engager les recours dans les délais, si nécessaire.',
    'expert.immigration.faq.title': 'Questions fréquentes',
    'expert.immigration.faq.0.q':
      'Quelle est la durée d’obtention d’un titre de séjour ?',
    'expert.immigration.faq.0.a':
      'Les délais varient selon la préfecture et le type de demande. Nous vous informons sur les délais réels et les recours si ceux-ci sont dépassés.',
    'expert.immigration.faq.1.q': 'Mon dossier a été refusé, que faire ?',
    'expert.immigration.faq.1.a':
      'Un recours est possible dans des délais stricts. Contactez le cabinet rapidement pour évaluer vos options et agir dans les temps.',
    'expert.immigration.faq.2.q': 'Puis-je travailler avec mon titre actuel ?',
    'expert.immigration.faq.2.a':
      'Tout dépend du statut porté par votre titre. Nous vérifions vos droits au regard de votre situation précise.',
    'expert.immigration.faq.3.q':
      'Accompagnez-vous des ressortissants d’Afrique de l’Ouest ?',
    'expert.immigration.faq.3.a':
      'Oui. Le cabinet suit les parcours entre la France, le Bénin et la Côte d’Ivoire, avec notre partenaire sur place.',
    'expert.immigration.faq.4.q': 'Où se déroulent les rendez-vous ?',
    'expert.immigration.faq.4.a':
      'En audio, en vidéo, par écrit ou au cabinet — le format s’adapte à votre situation et à vos contraintes.',

    // ─── Droit de la famille ──────────────────────────────────────────────
    'expert.family.eyebrow': 'Droit de la famille',
    'expert.family.title': 'Droit de la famille',
    'expert.family.description':
      'Divorce, résidence des enfants, pensions et questions patrimoniales.',
    'expert.family.intro':
      'Un accompagnement ferme et humain, pour défendre vos intérêts et préserver ce qui doit l’être.',
    'expert.family.situations.title': 'Les situations que nous traitons',
    'expert.family.sit.0': 'Divorce et séparation, y compris par consentement mutuel',
    'expert.family.sit.1': 'Autorité parentale et résidence des enfants',
    'expert.family.sit.2': 'Pension alimentaire et contribution à l’entretien',
    'expert.family.sit.3': 'Pacte civil de solidarité et concubinage',
    'expert.family.sit.4': 'Successions et questions patrimoniales',
    'expert.family.sit.5':
      'Dossiers familiaux avec une dimension internationale (France, Bénin, Côte d’Ivoire)',
    'expert.family.sit.6': 'Convention parentale et médiation',
    'expert.family.method.title': 'Notre méthode',
    'expert.family.met.0.title': 'Écouter',
    'expert.family.met.0.text':
      'Comprendre votre situation, vos priorités et ce qui est en jeu pour vos proches.',
    'expert.family.met.1.title': 'Éclairer',
    'expert.family.met.1.text':
      'Expliquer clairement les options possibles et leurs conséquences concrètes.',
    'expert.family.met.2.title': 'Privilégier l’amiable',
    'expert.family.met.2.text':
      'Rechercher une solution négociée chaque fois qu’elle protège mieux vos intérêts.',
    'expert.family.met.3.title': 'Défendre',
    'expert.family.met.3.text':
      'Vous représenter devant le juge si la voie judiciaire est nécessaire.',
    'expert.family.faq.title': 'Questions fréquentes',
    'expert.family.faq.0.q': 'Combien de temps dure un divorce ?',
    'expert.family.faq.0.a':
      'Cela dépend de la forme choisie, amiable ou contentieuse. Nous vous donnons un calendrier réaliste dès le premier entretien.',
    'expert.family.faq.1.q': 'Un divorce impliquant un pays étranger est-il possible ?',
    'expert.family.faq.1.a':
      'Oui. Pour les situations présentant un lien avec le Bénin ou la Côte d’Ivoire, nous travaillons en lien avec notre partenaire SCP AD2A.',
    'expert.family.faq.2.q': 'Comment est fixée la pension alimentaire ?',
    'expert.family.faq.2.a':
      'Elle dépend des revenus des parents et des besoins des enfants. Nous vous aidons à préparer les justificatifs nécessaires.',
    'expert.family.faq.3.q': 'Peut-on se séparer sans passer par le tribunal ?',
    'expert.family.faq.3.a':
      'Très souvent, oui : divorce par consentement mutuel, médiation, convention parentale. Nous vous orientons vers la voie la plus adaptée.',
    'expert.family.faq.4.q': 'Une première consultation est-elle possible à distance ?',
    'expert.family.faq.4.a':
      'Oui, par audio ou en vidéo, pour faire le point en toute confidentialité et commencer sereinement.',

    // ─── Zones d’intervention (commun aux expertises) ────────────────────
    'expert.zones.title': 'Zones d’intervention',
    'expert.zones.intro':
      'Nous intervenons en France et, pour les dossiers ouest-africains, avec l’appui de notre partenaire SCP AD2A au Bénin.',
    'expert.zones.france': 'France',
    'expert.zones.benin': 'Bénin — via SCP AD2A',
    'expert.zones.civ': 'Côte d’Ivoire',

    'expert.cta.title': 'Parlons de votre dossier',
    'expert.cta.text':
      'Décrivez votre situation : nous revenons vers vous sous 48 heures ouvrées.',
    'expert.cta.primary': 'Prendre rendez-vous',

    // ─── Honoraires ───────────────────────────────────────────────────────
    'honor.eyebrow': 'Honoraires',
    'fees.title': 'Honoraires',
    'fees.description':
      'Une politique tarifaire lisible : forfait, temps passé ou résultat, selon votre dossier.',
    'fees.intro':
      'La transparence fait partie du mandat. Nous expliquons le cadre, le rythme et le coût avant d’engager le travail.',
    'honor.philosophy.title': 'Une transparence totale',
    'honor.philosophy.0':
      'Les honoraires sont encadrés par la déontologie et dépendent de chaque dossier : complexité, enjeux, urgence et temps prévisible.',
    'honor.philosophy.1':
      'Avant toute mission, une convention d’honoraires écrite fixe le cadre — mission, mode de calcul, montant et modalités de paiement. Aucune surprise, aucune promesse de résultat.',
    'honor.modes.title': 'Trois modes de facturation',
    'honor.modes.text':
      'Nous choisissons avec vous le mode le plus adapté à votre dossier.',
    'honor.modes.0.title': 'Forfait',
    'honor.modes.0.text':
      'Un prix fixe pour une mission clairement définie : création de société, rédaction d’un contrat type, procédure standardisée.',
    'honor.modes.1.title': 'Temps passé',
    'honor.modes.1.text':
      'Une facturation au temps passé, selon des taux convenus à l’avance et actualisée régulièrement en cours de dossier.',
    'honor.modes.2.title': 'Au résultat',
    'honor.modes.2.text':
      'Dans les seuls cas autorisés par les règles professionnelles, des honoraires peuvent être liés au résultat. Selon le cadre applicable.',
    'honor.grid.title': 'Les consultations',
    'honor.grid.text': 'Quatre formats, un même niveau d’exigence.',
    'honor.grid.disclaimer':
      'Paiement par virement bancaire uniquement. Le RIB est communiqué par email après réservation.',
    'honor.payment.title': 'Paiement par virement',
    'honor.payment.text':
      'Le règlement s’effectue par virement bancaire, une fois la convention d’honoraires acceptée. Le RIB complet est transmis par email — aucun paiement en ligne.',
    'honor.aj.title': 'Aide juridictionnelle',
    'honor.aj.text':
      'Le cabinet se réserve la possibilité de traiter des dossiers au titre de l’aide juridictionnelle, selon les conditions de recevabilité. Information to be finalised before publication.',
    'honor.cta.title': 'Besoin d’une estimation ?',
    'honor.cta.text':
      'Décrivez votre situation : nous revenons vers vous sous 48 heures ouvrées avec une orientation claire.',
    'honor.cta.primary': 'Demander une estimation',
    'honor.cta.secondary': 'Nous écrire',

    // ─── Actualités ───────────────────────────────────────────────────────
    'news.eyebrow': 'Actualités',
    'news.title': 'Actualités',
    'news.description': 'Notes, éclairages et actualités du cabinet.',
    'news.intro':
      'Les premiers articles arriveront ici. En attendant, n’hésitez pas à nous écrire pour une question précise.',
    'news.filter.all': 'Tous',
    'news.filter.business': 'Affaires',
    'news.filter.immigration': 'Étrangers',
    'news.filter.family': 'Famille',
    'news.empty': 'Aucune publication pour ce filtre pour le moment.',
    'news.read': 'Lire l’article',
    'news.published': 'Publié le',
    'news.updated': 'Mis à jour le',
    'news.article.disclaimer':
      'Cet article est fourni à titre informatif et ne remplace pas l’analyse personnalisée de votre situation.',
    'news.back': 'Toutes les actualités',
    'news.cta.title': 'Une question qui mérite un éclairage ?',
    'news.cta.text':
      'Les articles ne remplacent pas un conseil personnalisé. Contactez le cabinet.',
    'news.cta.primary': 'Contacter le cabinet',

    // ─── Contact ──────────────────────────────────────────────────────────
    'contact.eyebrow': 'Contact',
    'contact.title': 'Contact',
    'contact.description': 'Prendre rendez-vous ou écrire au cabinet D2A Avocat.',
    'contact.intro':
      'Choisissez un appel découverte, une consultation, ou laissez-nous un message. Nous revenons vers vous rapidement.',
    'contact.form.title': 'Écrivez-nous',
    'contact.form.intro':
      'Présentez votre situation en quelques lignes. Nous revenons vers vous sous 48 heures ouvrées.',
    'contact.before.title': 'Avant de nous écrire',
    'contact.before.text':
      'Pour nous aider à vous orienter rapidement, indiquez le domaine concerné, les dates importantes et la question qui vous amène.',
    'contact.before.0': 'Votre situation en quelques lignes',
    'contact.before.1': 'Les échéances ou urgences à connaître',
    'contact.before.2': 'Les pièces déjà disponibles, sans donnée confidentielle inutile',
    'contact.form.name': 'Nom complet',
    'contact.form.email': 'Adresse e-mail',
    'contact.form.phone': 'Téléphone (optionnel)',
    'contact.form.domain': 'Domaine concerné',
    'contact.form.domain.business': 'Droit des affaires',
    'contact.form.domain.immigration': 'Droit des étrangers',
    'contact.form.domain.family': 'Droit de la famille',
    'contact.form.domain.other': 'Autre',
    'contact.form.message': 'Votre message',
    'contact.form.consent':
      'J’accepte que mes informations soient utilisées pour être recontacté(e).',
    'contact.form.consent.link': 'Politique de confidentialité',
    'contact.form.submit': 'Envoyer le message',
    'contact.form.sending': 'Envoi en cours…',
    'contact.form.success':
      'Merci, votre message a bien été envoyé. Nous vous répondons sous 48 heures ouvrées.',
    'contact.form.error':
      'Une erreur est survenue lors de l’envoi. Écrivez-nous directement à diane@d2a-avocat.fr.',
    'contact.form.legalNote':
      'Les informations transmises ne constituent pas une consultation juridique et ne créent pas de relation avocat-client.',
    'contact.direct.title': 'Vous préférez écrire directement ?',
    'contact.direct.text':
      'Envoyez-nous un e-mail avec une présentation courte de votre situation.',
    'contact.coords.title': 'Coordonnées',
    'contact.coords.address': 'Adresse professionnelle : sur demande',
    'contact.coords.email': 'diane@d2a-avocat.fr',
    'contact.coords.phone': 'Téléphone : sur demande',
    'contact.coords.hours': 'Réponse sous 48 heures ouvrées',
    'contact.benin.title': 'Bureau partenaire au Bénin',
    'contact.benin.text':
      'Pour les situations au Bénin, le cabinet s’appuie sur SCP AD2A, à Cotonou.',
    'contact.benin.link': 'Site de SCP AD2A',

    // ─── Mentions légales ─────────────────────────────────────────────────
    'legal.eyebrow': 'Mentions légales',
    'legal.title': 'Mentions légales',
    'legal.description': 'Mentions légales du site d2a-avocat.fr.',
    'legal.intro':
      'Éditeur, hébergeur, barreau, RPVA et assurance RC Pro. Les informations réglementaires manquantes sont signalées.',
    'legal.s.0.title': 'Éditeur du site',
    'legal.s.0.body':
      'Le site d2a-avocat.fr est édité par D2A Avocat, cabinet d’avocat.\nForme juridique : Information to be finalised before publication.\nAdresse professionnelle : sur demande\nE-mail : diane@d2a-avocat.fr',
    'legal.s.1.title': 'Directeur de la publication',
    'legal.s.1.body':
      'Directeur de la publication : Information to be finalised before publication.',
    'legal.s.2.title': 'Hébergeur',
    'legal.s.2.body':
      'Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.\nLe site est déployé automatiquement depuis le dépôt Git du projet.',
    'legal.s.3.title': 'Avocat',
    'legal.s.3.body':
      'D2A Avocat est un cabinet d’avocat inscrit au barreau de Information to be finalised before publication..\nNuméro RPVA : Information to be finalised before publication.\nAssurance responsabilité civile professionnelle : Information to be finalised before publication.\nL’avocat exerce sa profession dans le respect du règlement intérieur national (RIN) du barreau.',
    'legal.s.4.title': 'Propriété intellectuelle',
    'legal.s.4.body':
      'L’ensemble des contenus de ce site (textes, structure, identité visuelle) est protégé par le droit de la propriété intellectuelle. Toute reproduction sans autorisation préalable est interdite.',
    'legal.s.5.title': 'Responsabilité',
    'legal.s.5.body':
      'Les informations publiées sur ce site sont fournies à titre informatif et ne constituent pas un conseil juridique.\nL’envoi d’un message via le formulaire ne crée pas de relation avocat-client.\nPour toute question, contactez le cabinet à diane@d2a-avocat.fr.',
    'legal.s.6.title': 'Contact',
    'legal.s.6.body': 'diane@d2a-avocat.fr — réponse sous 48 heures ouvrées.',

    // ─── Politique de confidentialité ─────────────────────────────────────
    'privacy.eyebrow': 'Confidentialité',
    'privacy.title': 'Politique de confidentialité',
    'privacy.description':
      'Traitement des données personnelles et politique de confidentialité.',
    'privacy.intro':
      'Cette page décrit la manière dont le site d2a-avocat.fr traite vos données personnelles, conformément au RGPD.',
    'privacy.s.0.title': 'Données collectées',
    'privacy.s.0.body':
      'Le site collecte uniquement les données que vous transmettez via le formulaire de contact : nom, adresse e-mail, téléphone éventuel et contenu de votre message.\nCe site ne dépose pas de cookie publicitaire ni d’outil de mesure d’audience tiers.',
    'privacy.s.1.title': 'Finalités',
    'privacy.s.1.body':
      'Vos données sont utilisées pour traiter votre demande, vous répondre et organiser une éventuelle consultation.',
    'privacy.s.2.title': 'Base légale',
    'privacy.s.2.body':
      'Le traitement repose sur votre consentement explicite et sur la légitimité de la réponse à votre demande.',
    'privacy.s.3.title': 'Destinataires et hébergement',
    'privacy.s.3.body':
      'Les données transmises sont destinées au cabinet D2A Avocat et, le cas échéant, au prestataire technique nécessaire à l’envoi des messages.\nLe site est hébergé par Vercel Inc., aux États-Unis.',
    'privacy.s.4.title': 'Durée de conservation',
    'privacy.s.4.body':
      'Les messages sont conservés le temps nécessaire au traitement de votre demande, puis archivés ou supprimés dans le respect des obligations légales et déontologiques.',
    'privacy.s.5.title': 'Vos droits',
    'privacy.s.5.body':
      'Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’effacement, de portabilité et d’opposition sur vos données.\nVous pouvez l’exercer à tout moment : diane@d2a-avocat.fr.\nVous pouvez également introduire une réclamation auprès de la CNIL (cnil.fr).',
    'privacy.s.6.title': 'Cookies',
    'privacy.s.6.body':
      'Le site n’utilise pas de cookies de mesure ou de publicité. Seuls les cookies techniques strictement nécessaires au fonctionnement peuvent être déposés.',
  },
  en: {
    // ─── Meta & navigation ────────────────────────────────────────────────
    'meta.siteName': 'D2A Avocat',
    'meta.defaultDescription':
      'Law firm led by Maître Diane. Business, immigration and family law. France, Benin, Côte d’Ivoire.',

    'nav.home': 'Home',
    'nav.firm': 'The firm',
    'nav.expertise': 'Practice areas',
    'nav.fees': 'Fees',
    'nav.news': 'Insights',
    'nav.contact': 'Contact',
    'nav.book': 'Book an appointment',
    'nav.openMenu': 'Open menu',
    'nav.closeMenu': 'Close menu',
    'nav.langLabel': 'Language',

    // ─── Héro ─────────────────────────────────────────────────────────────
    'hero.title': 'The law that feels like you',
    'hero.subtitle':
      'Clear legal support for your business, immigration journey and family matters between France and West Africa.',
    'hero.ctaPrimary': 'Book an appointment',
    'hero.ctaSecondary': 'Our practice areas',

    // ─── Footer ───────────────────────────────────────────────────────────
    'footer.tagline': 'The law that feels like you',
    'footer.address': 'Professional address: available on request',
    'footer.phone': 'Phone: available on request',
    'footer.email': 'diane@d2a-avocat.fr',
    'footer.legal': 'Legal notice',
    'footer.privacy': 'Privacy policy',
    'footer.partner': 'Partner in Benin',
    'footer.rights': 'All rights reserved.',

    // ─── 404 ──────────────────────────────────────────────────────────────
    'notFound.title': 'Page not found',
    'notFound.description': 'The page you are looking for does not exist or has moved.',
    'notFound.ctaHome': 'Back to home',
    'notFound.ctaExpertise': 'See our practice areas',

    // ─── Accueil ──────────────────────────────────────────────────────────
    'home.highlights.eyebrow': 'D2A at a glance',
    'home.highlights.title': 'Three practice areas, three countries, one method',
    'home.highlights.text':
      'A general practice firm combining legal precision with human warmth.',
    'home.highlight.0.title': '3 practice areas',
    'home.highlight.0.text': 'Business, immigration and family law.',
    'home.highlight.1.title': '3 countries',
    'home.highlight.1.text':
      'France, Benin and Côte d’Ivoire — with SCP AD2A as partner.',
    'home.highlight.2.title': '48 h',
    'home.highlight.2.text': 'A reply within 48 business hours after your first message.',

    'home.guide.eyebrow': 'You are in the right place if…',
    'home.guide.title': 'A first point of reference for your situation',
    'home.guide.text':
      'Choose the topic closest to your need. We will clarify the next step together during the first conversation.',
    'home.guide.0.title': 'You run a business',
    'home.guide.0.text':
      'You are setting up, growing or securing an activity and need legal advice that stays clear and operational.',
    'home.guide.1.title': 'Your journey involves France',
    'home.guide.1.text':
      'You have a question about residence, nationality, family reunification or an administrative appeal.',
    'home.guide.2.title': 'Your family is facing a turning point',
    'home.guide.2.text':
      'You need a clear framework for separation, children, maintenance or an international situation.',
    'home.guide.cta': 'Explore this area',
    'home.expertises.eyebrow': 'Practice areas',
    'home.expertises.title': 'Three complementary areas',
    'home.expertises.text':
      'We work where decisions matter: your business, your immigration path, your family.',

    'home.international.eyebrow': 'International presence',
    'home.international.title': 'Rooted in France, a bridge to West Africa',
    'home.international.text':
      'The firm practises in France and supports clients in Benin and Côte d’Ivoire with its partner.',
    'home.intl.country.0.code': 'FR',
    'home.intl.country.0.name': 'France',
    'home.intl.country.0.text': 'Main market — French law and European advice.',
    'home.intl.country.1.code': 'BJ',
    'home.intl.country.1.name': 'Benin',
    'home.intl.country.1.text':
      'On-the-ground presence through partner SCP AD2A in Cotonou.',
    'home.intl.country.2.code': 'CI',
    'home.intl.country.2.name': 'Côte d’Ivoire',
    'home.intl.country.2.text': 'Targeted advice for West African business matters.',
    'home.intl.partner.title': 'SCP AD2A · Benin',
    'home.intl.partner.text':
      'The firm relies on a trusted partner in Cotonou for your matters in Benin.',
    'home.intl.partner.link': 'Discover the partner',

    'home.method.eyebrow': 'Our method',
    'home.method.title': 'How we work',
    'home.method.text':
      'A clear framework, from the first conversation to the final follow-up.',
    'home.method.0.title': 'First conversation',
    'home.method.0.text':
      'We listen to your situation and guide you, without unnecessary jargon.',
    'home.method.1.title': 'Case review',
    'home.method.1.text':
      'We examine the documents and build the most suitable strategy.',
    'home.method.2.title': 'Clear framework',
    'home.method.2.text':
      'A written fee agreement before any work begins, with no surprises.',
    'home.method.3.title': 'Support',
    'home.method.3.text':
      'A single point of contact and regular updates until the matter is resolved.',

    'home.consult.eyebrow': 'Consultations',
    'home.consult.title': 'Four ways to work together',
    'home.consult.text':
      'Choose the format that suits you. A free discovery call is the usual way to start.',
    'home.consult.0.title': 'Discovery call',
    'home.consult.0.format': 'Audio · 15 min',
    'home.consult.0.price': 'Free',
    'home.consult.0.note':
      'A first conversation to clarify your needs and the next steps.',
    'home.consult.1.title': 'Video consultation',
    'home.consult.1.format': 'Video call',
    'home.consult.1.price': 'Sur demande',
    'home.consult.1.note': 'A secure meeting, wherever you are.',
    'home.consult.2.title': 'Written consultation',
    'home.consult.2.format': 'Written answer within 48–72 h',
    'home.consult.2.price': '€150',
    'home.consult.2.note':
      'A written analysis of your situation, ideal for precise questions.',
    'home.consult.3.title': 'In-person consultation',
    'home.consult.3.format': 'At the office',
    'home.consult.3.price': 'Sur demande',
    'home.consult.3.note':
      'An office meeting for matters that deserve a direct conversation.',
    'home.consult.disclaimer':
      'Payment by bank transfer only. The bank details are shared after booking.',

    'home.news.eyebrow': 'Insights',
    'home.news.title': 'Latest notes from the firm',
    'home.news.text': 'Practical guidance on your rights and our practice areas.',
    'home.news.all': 'All insights',

    'home.cta.eyebrow': 'A matter?',
    'home.cta.title': 'Need legal guidance?',
    'home.cta.text': 'Get in touch: we reply within 48 business hours.',
    'home.cta.primary': 'Book an appointment',
    'home.cta.secondary': 'Write to us',

    // ─── Le cabinet ───────────────────────────────────────────────────────
    'cabinet.eyebrow': 'The firm',
    'cabinet.title': 'The firm',
    'cabinet.description': 'Meet Maître Diane and discover how D2A Avocat works.',
    'cabinet.intro':
      'D2A Avocat is a general practice firm — premium, warm and precise. No unnecessary jargon. No unnecessary distance.',
    'cabinet.quote': 'The law that feels like you.',
    'cabinet.photo.alt': 'Space reserved for Maître Diane’s portrait',
    'cabinet.photo.pending': 'Maître Diane’s portrait coming soon',
    'cabinet.bio.title': 'Maître Diane',
    'cabinet.bio.text':
      'Maître Diane leads D2A Avocat with a simple ambition: to make the law clearer, more human and more useful when decisions matter.',
    'cabinet.timeline.title': 'Background & education',
    'cabinet.timeline.0.date': '[Year]',
    'cabinet.timeline.0.title': 'Law degree',
    'cabinet.timeline.0.text':
      'Law degree and specialisation. Information to be finalised before publication.',
    'cabinet.timeline.1.date': '[Year]',
    'cabinet.timeline.1.title': 'Called to the bar',
    'cabinet.timeline.1.text':
      'Admission and oath before the bar association. Information to be finalised before publication.',
    'cabinet.timeline.2.date': '[Year]',
    'cabinet.timeline.2.title': 'Founding of D2A Avocat',
    'cabinet.timeline.2.text':
      'Creation of a general, premium practice. Information to be finalised before publication.',
    'cabinet.timeline.3.date': '[Year]',
    'cabinet.timeline.3.title': 'Partner in Benin',
    'cabinet.timeline.3.text':
      'Partnership with SCP AD2A for West African matters. Information to be finalised before publication.',

    'cabinet.values.title': 'What you can expect from us',
    'cabinet.values.text': 'Four simple commitments, kept on every case.',
    'cabinet.values.0.title': 'Clarity',
    'cabinet.values.0.text': 'Explaining the law without jargon, for informed decisions.',
    'cabinet.values.1.title': 'Exactingness',
    'cabinet.values.1.text': 'Technical rigour and faultless follow-up.',
    'cabinet.values.2.title': 'Humanity',
    'cabinet.values.2.text': 'Attentive listening, without unnecessary distance.',
    'cabinet.values.3.title': 'Commitment',
    'cabinet.values.3.text':
      'A single point of contact, replies within 48 business hours.',

    'cabinet.benin.title': 'The firm in Benin',
    'cabinet.benin.text':
      'For your matters in Benin or West Africa, D2A Avocat relies on a trusted partner: SCP AD2A, in Cotonou.',
    'cabinet.benin.link': 'SCP AD2A website',

    'cabinet.cta.title': 'Let us meet',
    'cabinet.cta.text': 'Start with a free discovery call to discuss your situation.',
    'cabinet.cta.primary': 'Book an appointment',

    // ─── Expertises (page mère) ───────────────────────────────────────────
    'expertises.eyebrow': 'Practice areas',
    'expertises.title': 'Practice areas',
    'expertises.description':
      'Three practice areas: business law, immigration law, family law.',
    'expertises.intro':
      'We work where the decisions really matter: your company, your immigration path, your family.',
    'expertises.business': 'Business law',
    'expertises.immigration': 'Immigration law',
    'expertises.family': 'Family law',
    'expertises.card.cta': 'Discover the area',

    // ─── Business law ─────────────────────────────────────────────────────
    'expert.business.eyebrow': 'Business law',
    'expert.business.title': 'Business law',
    'expert.business.description':
      'Counsel and disputes for founders, executives and companies.',
    'expert.business.intro':
      'We help you structure, protect and move your ventures forward, in France and internationally.',
    'expert.business.situations.title': 'Situations we handle',
    'expert.business.sit.0': 'Company formation and choice of legal structure',
    'expert.business.sit.1': 'Drafting and negotiating commercial contracts',
    'expert.business.sit.2': 'Relations with partners, clients and suppliers',
    'expert.business.sit.3': 'Commercial disputes: recovery, breach, liability',
    'expert.business.sit.4': 'Ongoing counsel for directors, on a flat-fee basis',
    'expert.business.sit.5': 'International operations and setting up in West Africa',
    'expert.business.sit.6': 'Transmission, sale and restructuring of companies',
    'expert.business.method.title': 'Our method',
    'expert.business.met.0.title': 'Listen',
    'expert.business.met.0.text':
      'Understand your activity, your stakes and your operational constraints.',
    'expert.business.met.1.title': 'Propose',
    'expert.business.met.1.text':
      'Define a suitable strategy — preventive or litigation — set out in writing.',
    'expert.business.met.2.title': 'Structure',
    'expert.business.met.2.text':
      'Put in place the contracts, articles and procedures that secure your operations.',
    'expert.business.met.3.title': 'Follow through',
    'expert.business.met.3.text':
      'Stay at your side through the life of the business, with a single point of contact.',
    'expert.business.faq.title': 'Frequently asked questions',
    'expert.business.faq.0.q': 'How much does company formation cost?',
    'expert.business.faq.0.a':
      'Every matter is unique: it depends on the structure and complexity. After review, we provide a clear estimate, usually within 48 business hours.',
    'expert.business.faq.1.q': 'Do you offer preventive support for SMEs?',
    'expert.business.faq.1.a':
      'Yes. Ongoing counsel for directors is part of our work, on a flat-fee or hourly basis, depending on your needs.',
    'expert.business.faq.2.q': 'Do you assist companies operating in Africa?',
    'expert.business.faq.2.a':
      'Yes, in liaison with our partner SCP AD2A in Benin, to support your operations in West Africa.',
    'expert.business.faq.3.q': 'Are fees set in advance?',
    'expert.business.faq.3.a':
      'A written fee agreement is provided before any work: scope, method of calculation, amount and payment terms.',
    'expert.business.faq.4.q': 'How does a first consultation work?',
    'expert.business.faq.4.a':
      'A free discovery call to understand your needs, then the format that suits you: video, written or at the office.',

    // ─── Immigration law ──────────────────────────────────────────────────
    'expert.immigration.eyebrow': 'Immigration law',
    'expert.immigration.title': 'Immigration law',
    'expert.immigration.description':
      'Residence permits, family reunification, citizenship and appeals.',
    'expert.immigration.intro':
      'Clear immigration steps, closely followed, with a solid file and a single point of contact.',
    'expert.immigration.situations.title': 'Situations we handle',
    'expert.immigration.sit.0': 'Residence permit and visa applications',
    'expert.immigration.sit.1':
      'Family reunification and the right to private and family life',
    'expert.immigration.sit.2': 'Naturalisation and nationality procedures',
    'expert.immigration.sit.3': 'Appeals against refusals and removal orders',
    'expert.immigration.sit.4': 'Status changes (employee, entrepreneur…)',
    'expert.immigration.sit.5': 'Advice on moves between France and West Africa',
    'expert.immigration.sit.6': 'Preparation for prefecture interviews',
    'expert.immigration.method.title': 'Our method',
    'expert.immigration.met.0.title': 'Listen',
    'expert.immigration.met.0.text':
      'Understand your background, your administrative situation and your project.',
    'expert.immigration.met.1.title': 'Review',
    'expert.immigration.met.1.text':
      'Check your rights and identify the strongest route to regularisation.',
    'expert.immigration.met.2.title': 'Build',
    'expert.immigration.met.2.text':
      'Prepare an airtight file and anticipate the administration’s questions.',
    'expert.immigration.met.3.title': 'Defend',
    'expert.immigration.met.3.text':
      'Ensure follow-up and file appeals within the deadlines, if needed.',
    'expert.immigration.faq.title': 'Frequently asked questions',
    'expert.immigration.faq.0.q': 'How long does a residence permit take?',
    'expert.immigration.faq.0.a':
      'Timeframes vary by prefecture and application type. We inform you of real timelines and remedies if they are exceeded.',
    'expert.immigration.faq.1.q': 'My application was refused, what now?',
    'expert.immigration.faq.1.a':
      'Appeals are subject to strict deadlines. Contact the firm quickly to assess your options and act in time.',
    'expert.immigration.faq.2.q': 'Can I work with my current permit?',
    'expert.immigration.faq.2.a':
      'It depends on the status on your permit. We check your rights according to your precise situation.',
    'expert.immigration.faq.3.q': 'Do you assist nationals from West Africa?',
    'expert.immigration.faq.3.a':
      'Yes. The firm follows paths between France, Benin and Côte d’Ivoire, with our on-the-ground partner.',
    'expert.immigration.faq.4.q': 'Where do appointments take place?',
    'expert.immigration.faq.4.a':
      'By audio, video, in writing or at the office — the format adapts to your situation.',

    // ─── Family law ───────────────────────────────────────────────────────
    'expert.family.eyebrow': 'Family law',
    'expert.family.title': 'Family law',
    'expert.family.description':
      'Divorce, residence of children, support and property questions.',
    'expert.family.intro':
      'Firm, human support — to defend your interests and protect what should be protected.',
    'expert.family.situations.title': 'Situations we handle',
    'expert.family.sit.0': 'Divorce and separation, including by mutual consent',
    'expert.family.sit.1': 'Parental authority and residence of children',
    'expert.family.sit.2': 'Maintenance and contribution to child support',
    'expert.family.sit.3': 'Civil partnership (PACS) and cohabitation',
    'expert.family.sit.4': 'Succession and property matters',
    'expert.family.sit.5':
      'Family matters with an international dimension (France, Benin, Côte d’Ivoire)',
    'expert.family.sit.6': 'Parental agreements and mediation',
    'expert.family.method.title': 'Our method',
    'expert.family.met.0.title': 'Listen',
    'expert.family.met.0.text':
      'Understand your situation, your priorities and what is at stake for your loved ones.',
    'expert.family.met.1.title': 'Clarify',
    'expert.family.met.1.text':
      'Explain the available options clearly and their concrete consequences.',
    'expert.family.met.2.title': 'Prefer agreement',
    'expert.family.met.2.text':
      'Seek a negotiated solution whenever it better protects your interests.',
    'expert.family.met.3.title': 'Defend',
    'expert.family.met.3.text': 'Represent you before the judge when court is necessary.',
    'expert.family.faq.title': 'Frequently asked questions',
    'expert.family.faq.0.q': 'How long does a divorce take?',
    'expert.family.faq.0.a':
      'It depends on the chosen route, amicable or contested. We give you a realistic timeline from the first meeting.',
    'expert.family.faq.1.q': 'Is a divorce involving a foreign country possible?',
    'expert.family.faq.1.a':
      'Yes. For situations connected to Benin or Côte d’Ivoire, we work with our partner SCP AD2A.',
    'expert.family.faq.2.q': 'How is child support determined?',
    'expert.family.faq.2.a':
      'It depends on parents’ income and the children’s needs. We help you prepare the required evidence.',
    'expert.family.faq.3.q': 'Can we separate without going to court?',
    'expert.family.faq.3.a':
      'Very often, yes: consent divorce, mediation, parental agreement. We guide you to the most suitable route.',
    'expert.family.faq.4.q': 'Is a first consultation possible remotely?',
    'expert.family.faq.4.a':
      'Yes, by audio or video, to review the situation confidentially and start serenely.',

    // ─── Zones d’intervention (commun aux expertises) ────────────────────
    'expert.zones.title': 'Where we work',
    'expert.zones.intro':
      'We practise in France and, for West African matters, with the support of our partner SCP AD2A in Benin.',
    'expert.zones.france': 'France',
    'expert.zones.benin': 'Benin — via SCP AD2A',
    'expert.zones.civ': 'Côte d’Ivoire',

    'expert.cta.title': 'Let us discuss your matter',
    'expert.cta.text':
      'Describe your situation: we get back to you within 48 business hours.',
    'expert.cta.primary': 'Book an appointment',

    // ─── Honoraires ───────────────────────────────────────────────────────
    'honor.eyebrow': 'Fees',
    'fees.title': 'Fees',
    'fees.description':
      'A readable fee policy: flat fee, hourly, or success-based, depending on the matter.',
    'fees.intro':
      'Transparency is part of the brief. We explain the frame, the pace and the cost before work begins.',
    'honor.philosophy.title': 'Total transparency',
    'honor.philosophy.0':
      'Fees are governed by professional ethics and depend on each matter: complexity, stakes, urgency and expected time.',
    'honor.philosophy.1':
      'Before any engagement, a written fee agreement sets the frame — scope, method of calculation, amount and payment terms. No surprises, no promise of results.',
    'honor.modes.title': 'Three fee arrangements',
    'honor.modes.text': 'We choose with you the arrangement that fits your matter.',
    'honor.modes.0.title': 'Flat fee',
    'honor.modes.0.text':
      'A fixed price for a clearly defined mission: company formation, standard contract drafting, standardised procedure.',
    'honor.modes.1.title': 'Time-based',
    'honor.modes.1.text':
      'Billing by time spent, at rates agreed in advance and updated regularly during the matter.',
    'honor.modes.2.title': 'Success-based',
    'honor.modes.2.text':
      'Only where professional rules allow it, fees may be linked to the outcome. Selon le cadre applicable.',
    'honor.grid.title': 'Consultations',
    'honor.grid.text': 'Four formats, one standard of exactingness.',
    'honor.grid.disclaimer':
      'Payment by bank transfer only. The bank details are shared by email after booking.',
    'honor.payment.title': 'Payment by bank transfer',
    'honor.payment.text':
      'Payment is made by bank transfer once the fee agreement is accepted. The full bank details are sent by email — no online payment.',
    'honor.aj.title': 'Legal aid',
    'honor.aj.text':
      'The firm may handle matters under the legal aid scheme, subject to eligibility conditions. Information to be finalised before publication.',
    'honor.cta.title': 'Need an estimate?',
    'honor.cta.text':
      'Describe your situation: we get back to you within 48 business hours with clear guidance.',
    'honor.cta.primary': 'Request an estimate',
    'honor.cta.secondary': 'Write to us',

    // ─── Actualités ───────────────────────────────────────────────────────
    'news.eyebrow': 'Insights',
    'news.title': 'Insights',
    'news.description': 'Notes, briefings and news from the firm.',
    'news.intro':
      'The first articles will appear here. In the meantime, write to us with a precise question.',
    'news.filter.all': 'All',
    'news.filter.business': 'Business',
    'news.filter.immigration': 'Immigration',
    'news.filter.family': 'Family',
    'news.empty': 'No publication for this filter at the moment.',
    'news.read': 'Read the article',
    'news.published': 'Published',
    'news.updated': 'Updated',
    'news.article.disclaimer':
      'This article is for information only and does not replace a personalised review of your situation.',
    'news.back': 'All insights',
    'news.cta.title': 'A question worth answering?',
    'news.cta.text': 'Articles do not replace personal advice. Contact the firm.',
    'news.cta.primary': 'Contact the firm',

    // ─── Contact ──────────────────────────────────────────────────────────
    'contact.eyebrow': 'Contact',
    'contact.title': 'Contact',
    'contact.description': 'Book an appointment or write to D2A Avocat.',
    'contact.intro':
      'Choose a discovery call, a consultation, or leave a message. We will get back to you promptly.',
    'contact.form.title': 'Write to us',
    'contact.form.intro':
      'Describe your situation in a few lines. We will get back to you within 48 business hours.',
    'contact.before.title': 'Before you write',
    'contact.before.text':
      'To help us guide you quickly, mention the area concerned, important dates and the question bringing you to us.',
    'contact.before.0': 'Your situation in a few lines',
    'contact.before.1': 'Any deadlines or urgent points',
    'contact.before.2':
      'Documents already available, without unnecessary confidential data',
    'contact.form.name': 'Full name',
    'contact.form.email': 'E-mail address',
    'contact.form.phone': 'Phone (optional)',
    'contact.form.domain': 'Area concerned',
    'contact.form.domain.business': 'Business law',
    'contact.form.domain.immigration': 'Immigration law',
    'contact.form.domain.family': 'Family law',
    'contact.form.domain.other': 'Other',
    'contact.form.message': 'Your message',
    'contact.form.consent': 'I agree to my information being used to contact me back.',
    'contact.form.consent.link': 'Privacy policy',
    'contact.form.submit': 'Send the message',
    'contact.form.sending': 'Sending…',
    'contact.form.success':
      'Thank you, your message has been sent. We reply within 48 business hours.',
    'contact.form.error':
      'Something went wrong while sending. Write to us directly at diane@d2a-avocat.fr.',
    'contact.form.legalNote':
      'The information provided does not constitute legal advice and does not create a lawyer-client relationship.',
    'contact.direct.title': 'Prefer to write directly?',
    'contact.direct.text':
      'Send us an e-mail with a short description of your situation.',
    'contact.coords.title': 'Contact details',
    'contact.coords.address': 'Professional address: available on request',
    'contact.coords.email': 'diane@d2a-avocat.fr',
    'contact.coords.phone': 'Phone: available on request',
    'contact.coords.hours': 'Reply within 48 business hours',
    'contact.benin.title': 'Partner office in Benin',
    'contact.benin.text':
      'For matters in Benin, the firm relies on SCP AD2A, in Cotonou.',
    'contact.benin.link': 'SCP AD2A website',

    // ─── Mentions légales ─────────────────────────────────────────────────
    'legal.eyebrow': 'Legal notice',
    'legal.title': 'Legal notice',
    'legal.description': 'Legal notice for d2a-avocat.fr.',
    'legal.intro':
      'Publisher, host, bar association, RPVA and professional indemnity insurance. Missing regulatory details are flagged.',
    'legal.s.0.title': 'Publisher of the site',
    'legal.s.0.body':
      'The website d2a-avocat.fr is published by D2A Avocat, a law firm.\nLegal form: Information to be finalised before publication.\nProfessional address: available on request\nE-mail: diane@d2a-avocat.fr',
    'legal.s.1.title': 'Publication director',
    'legal.s.1.body':
      'Publication director: Information to be finalised before publication.',
    'legal.s.2.title': 'Host',
    'legal.s.2.body':
      'The site is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.\nThe site is deployed automatically from the project’s Git repository.',
    'legal.s.3.title': 'Lawyer',
    'legal.s.3.body':
      'D2A Avocat is a law firm admitted to the bar association of Information to be finalised before publication..\nRPVA number: Information to be finalised before publication.\nProfessional indemnity insurance: Information to be finalised before publication.\nThe lawyer practises in accordance with the national internal rules (RIN) of the French bar.',
    'legal.s.4.title': 'Intellectual property',
    'legal.s.4.body':
      'All content of this site (texts, structure, visual identity) is protected by intellectual property law. Any reproduction without prior authorisation is prohibited.',
    'legal.s.5.title': 'Liability',
    'legal.s.5.body':
      'The information published on this site is provided for information purposes only and does not constitute legal advice.\nSending a message through the form does not create a lawyer-client relationship.\nFor any question, contact the firm at diane@d2a-avocat.fr.',
    'legal.s.6.title': 'Contact',
    'legal.s.6.body': 'diane@d2a-avocat.fr — reply within 48 business hours.',

    // ─── Politique de confidentialité ─────────────────────────────────────
    'privacy.eyebrow': 'Privacy',
    'privacy.title': 'Privacy policy',
    'privacy.description': 'Personal data processing and privacy policy.',
    'privacy.intro':
      'This page describes how d2a-avocat.fr processes your personal data, in line with the GDPR.',
    'privacy.s.0.title': 'Data collected',
    'privacy.s.0.body':
      'The site only collects the data you send through the contact form: name, e-mail address, optional phone number and the content of your message.\nThis site uses no advertising cookies and no third-party audience measurement tool.',
    'privacy.s.1.title': 'Purposes',
    'privacy.s.1.body':
      'Your data is used to process your request, reply to you and organise a possible consultation.',
    'privacy.s.2.title': 'Legal basis',
    'privacy.s.2.body':
      'Processing is based on your explicit consent and on the legitimacy of answering your request.',
    'privacy.s.3.title': 'Recipients and hosting',
    'privacy.s.3.body':
      'The data is intended for the firm D2A Avocat and, where applicable, for the technical provider needed to send messages.\nThe site is hosted by Vercel Inc., in the United States.',
    'privacy.s.4.title': 'Retention period',
    'privacy.s.4.body':
      'Messages are kept for as long as needed to handle your request, then archived or deleted in line with legal and ethical obligations.',
    'privacy.s.5.title': 'Your rights',
    'privacy.s.5.body':
      'Under the GDPR, you have the right to access, rectify, erase, port and object to your data.\nYou may exercise these rights at any time: diane@d2a-avocat.fr.\nYou may also lodge a complaint with the CNIL (cnil.fr).',
    'privacy.s.6.title': 'Cookies',
    'privacy.s.6.body':
      'The site uses no tracking or advertising cookies. Only strictly necessary technical cookies may be set.',
  },
} as const

export type UiKey = keyof typeof ui.fr
