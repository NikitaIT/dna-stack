import { i18n, TFunction } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

export interface Translate {
  t: TFunction;
}
export class I18n {
  constructor(private i18n: i18n) {}
  initI18n(loadPath: string, defaultLanguage: string) {
    return this.i18n
      .use(LanguageDetector)
      .use(initReactI18next)
      .use(HttpApi)
      .init({
        backend: { loadPath },
        fallbackLng: defaultLanguage,
        load: 'currentOnly',
        debug: process.env.NODE_ENV === 'development',
      });
  }

  t = this.i18n.t;

  get language(): string {
    return this.i18n.language;
  }

  changeLanguage(language: string) {
    return this.i18n.changeLanguage(language);
  }

  onLanguageChanged(callback: (language: string) => void) {
    return this.i18n.on('languageChanged', callback);
  }
}
