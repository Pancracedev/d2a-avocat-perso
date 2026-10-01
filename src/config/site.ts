export const site = {
  name: 'D2A Avocat',
  url: 'https://d2a-avocat.fr',
  email: 'diane@d2a-avocat.fr',
  /**
   * Endpoint du service de formulaire (Formspree, Web3Forms…).
   * Le définir dans les variables d'environnement (PUBLIC_CONTACT_ENDPOINT).
   * En son absence, le formulaire bascule sur une redirection mailto.
   */
  formEndpoint: import.meta.env.PUBLIC_CONTACT_ENDPOINT as string | undefined,
  partner: {
    name: 'SCP AD2A',
    url: 'https://scpad2a.org/fr',
    city: 'Cotonou',
    country: 'Bénin',
  },
} as const
