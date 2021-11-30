import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { I18nContext, appI18n } from './i18n';
import ctx from './i18n/I18nContext';
import { Provider } from 'react-redux';
import { di } from '@mdna/di';

// todo: scan with require.context by *Context.ts
di.provideContext(ctx.name, ctx.value);

export const AppProvider: React.FC = ({ children }) => (
  <StrictMode>
    <I18nContext.Provider value={appI18n}>
      {/* <Provider store={store}> */}
      <BrowserRouter>{children}</BrowserRouter>
      {/* </Provider> */}
    </I18nContext.Provider>
  </StrictMode>
);
