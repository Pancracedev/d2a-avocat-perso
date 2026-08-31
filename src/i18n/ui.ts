export const languages = {
  fr: 'Français',
  en: 'English',
} as const

export type Lang = keyof typeof languages

export const defaultLang: Lang = 'fr'

export const ui = {
  fr: {
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

    'hero.title': 'Le droit qui vous ressemble',
    'hero.subtitle':
      'Un accompagnement juridique clair, humain et exigeant — en droit des affaires, des étrangers et de la famille. En France, au Bénin et en Côte d’Ivoire.',
    'hero.ctaPrimary': 'Prendre rendez-vous',
    'hero.ctaSecondary': 'Nos expertises',

    'cabinet.title': 'Le cabinet',
    'cabinet.description':
      'Rencontrez Maître Diane et découvrez l’approche du cabinet D2A Avocat.',
    'cabinet.intro':
      'D2A Avocat est un cabinet généraliste, premium et accessible, pensé pour vous accompagner avec précision — sans jargon inutile, sans distance inutile.',

    'expertises.title': 'Expertises',
    'expertises.description':
      'Trois domaines d’intervention : droit des affaires, droit des étrangers, droit de la famille.',
    'expertises.intro':
      'Nous intervenons là où les décisions comptent vraiment : votre entreprise, votre parcours migratoire, votre famille.',
    'expertises.business': 'Droit des affaires',
    'expertises.immigration': 'Droit des étrangers',
    'expertises.family': 'Droit de la famille',

    'expertise.business.title': 'Droit des affaires',
    'expertise.business.description':
      'Conseil et contentieux pour dirigeants, entrepreneurs et sociétés.',
    'expertise.business.intro':
      'Nous vous aidons à structurer, protéger et faire avancer vos projets d’entreprise, en France et à l’international.',

    'expertise.immigration.title': 'Droit des étrangers',
    'expertise.immigration.description':
      'Titres de séjour, regroupement familial, naturalisation et recours.',
    'expertise.immigration.intro':
      'Des démarches migratoires claires, suivies de près, pour avancer avec un dossier solide et un interlocuteur unique.',

    'expertise.family.title': 'Droit de la famille',
    'expertise.family.description':
      'Divorce, résidence des enfants, pensions et questions patrimoniales.',
    'expertise.family.intro':
      'Un accompagnement ferme et humain, pour défendre vos intérêts et préserver ce qui doit l’être.',

    'fees.title': 'Honoraires',
    'fees.description':
      'Une politique tarifaire lisible : forfait, temps passé ou résultat, selon votre dossier.',
    'fees.intro':
      'La transparence fait partie du mandat. Nous expliquons le cadre, le rythme et le coût avant d’engager le travail.',

    'news.title': 'Actualités',
    'news.description': 'Notes, éclairages et actualités du cabinet.',
    'news.intro':
      'Les premiers articles arriveront ici. En attendant, n’hésitez pas à nous écrire pour une question précise.',

    'contact.title': 'Contact',
    'contact.description': 'Prendre rendez-vous ou écrire au cabinet D2A Avocat.',
    'contact.intro':
      'Choisissez un appel découverte, une consultation, ou laissez-nous un message. Nous revenons vers vous rapidement.',

    'legal.title': 'Mentions légales',
    'legal.description': 'Mentions légales du site d2a-avocat.fr.',
    'legal.intro':
      'Éditeur, hébergeur, barreau, RPVA et assurance RC Pro : [À COMPLÉTER].',

    'privacy.title': 'Politique de confidentialité',
    'privacy.description':
      'Traitement des données personnelles et politique de confidentialité.',
    'privacy.intro':
      'Cette page détaillera les traitements RGPD du site. Contenu réglementaire : [À COMPLÉTER].',

    'footer.tagline': 'Le droit qui vous ressemble',
    'footer.address': 'Adresse professionnelle : [À COMPLÉTER]',
    'footer.email': 'diane@d2a-avocat.fr',
    'footer.legal': 'Mentions légales',
    'footer.privacy': 'Politique de confidentialité',
    'footer.rights': 'Tous droits réservés.',
  },
  en: {
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

    'hero.title': 'The law that feels like you',
    'hero.subtitle':
      'Clear, human and exacting legal support — in business, immigration and family law. In France, Benin and Côte d’Ivoire.',
    'hero.ctaPrimary': 'Book an appointment',
    'hero.ctaSecondary': 'Our practice areas',

    'cabinet.title': 'The firm',
    'cabinet.description': 'Meet Maître Diane and discover how D2A Avocat works.',
    'cabinet.intro':
      'D2A Avocat is a general practice firm — premium, warm and precise. No unnecessary jargon. No unnecessary distance.',

    'expertises.title': 'Practice areas',
    'expertises.description':
      'Three practice areas: business law, immigration law, family law.',
    'expertises.intro':
      'We work where the decisions matter: your company, your immigration path, your family.',
    'expertises.business': 'Business law',
    'expertises.immigration': 'Immigration law',
    'expertises.family': 'Family law',

    'expertise.business.title': 'Business law',
    'expertise.business.description':
      'Counsel and disputes for founders, executives and companies.',
    'expertise.business.intro':
      'We help you structure, protect and move your ventures forward, in France and internationally.',

    'expertise.immigration.title': 'Immigration law',
    'expertise.immigration.description':
      'Residence permits, family reunification, citizenship and appeals.',
    'expertise.immigration.intro':
      'Clear immigration steps, closely followed, with a solid file and a single point of contact.',

    'expertise.family.title': 'Family law',
    'expertise.family.description':
      'Divorce, residence of children, support and property questions.',
    'expertise.family.intro':
      'Firm, human support — to defend your interests and protect what should be protected.',

    'fees.title': 'Fees',
    'fees.description':
      'A readable fee policy: flat fee, hourly, or success-based, depending on the matter.',
    'fees.intro':
      'Transparency is part of the brief. We explain the frame, the pace and the cost before work begins.',

    'news.title': 'Insights',
    'news.description': 'Notes, briefings and news from the firm.',
    'news.intro':
      'The first articles will appear here. In the meantime, write to us with a precise question.',

    'contact.title': 'Contact',
    'contact.description': 'Book an appointment or write to D2A Avocat.',
    'contact.intro':
      'Choose a discovery call, a consultation, or leave a message. We will get back to you promptly.',

    'legal.title': 'Legal notice',
    'legal.description': 'Legal notice for d2a-avocat.fr.',
    'legal.intro':
      'Publisher, host, bar association, RPVA and professional indemnity insurance: [À COMPLÉTER].',

    'privacy.title': 'Privacy policy',
    'privacy.description': 'Personal data processing and privacy policy.',
    'privacy.intro':
      'This page will detail the site’s GDPR processing. Regulatory content: [À COMPLÉTER].',

    'footer.tagline': 'The law that feels like you',
    'footer.address': 'Professional address: [À COMPLÉTER]',
    'footer.email': 'diane@d2a-avocat.fr',
    'footer.legal': 'Legal notice',
    'footer.privacy': 'Privacy policy',
    'footer.rights': 'All rights reserved.',
  },
} as const

export type UiKey = keyof typeof ui.fr
