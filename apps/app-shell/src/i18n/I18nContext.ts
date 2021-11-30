import i18next from 'i18next';
import { createContext } from 'react';
import { AppI18n } from './AppI18n';

export const appI18n = new AppI18n(i18next);
export const I18nContext = createContext(appI18n);
export default {
  name: 'I18n',
  value: I18nContext,
};
