import { I18n } from '@mdna/i18n';
import { i18n } from 'i18next';
export class AppI18n extends I18n {
  defaultLanguage = 'en-GB';
  supportedLanguages = [this.defaultLanguage, 'zh-CN'];
  constructor(i18next: i18n) {
    super(i18next);
    this.initI18n('./assets/i18n/{{lng}}.json', this.defaultLanguage);
  }
}
