import { defaultLang, ui, type Lang, type UiKey } from './ui'

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/')
  if (maybeLang === 'en') return 'en'
  return defaultLang
}

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key]
  }
}

export function localizePath(lang: Lang, path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  if (lang === 'en') {
    return normalized === '/' ? '/en' : `/en${normalized}`
  }
  return normalized
}

export function getAlternatePath(pathname: string, target: Lang): string {
  const withoutEn = pathname.replace(/^\/en(?=\/|$)/, '') || '/'
  return localizePath(target, withoutEn)
}

export const routes = {
  home: '/',
  firm: '/cabinet',
  expertise: '/expertises',
  business: '/expertises/droit-des-affaires',
  immigration: '/expertises/droit-des-etrangers',
  family: '/expertises/droit-de-la-famille',
  fees: '/honoraires',
  news: '/actualites',
  contact: '/contact',
  legal: '/mentions-legales',
  privacy: '/politique-confidentialite',
} as const
