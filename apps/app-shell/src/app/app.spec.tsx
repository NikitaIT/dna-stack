import { render } from '@testing-library/react';

import App from './app';
import { AppProvider } from '../AppProvider';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <AppProvider>
        <App />
      </AppProvider>
    );

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(
      <AppProvider>
        <App />
      </AppProvider>
    );

    expect(getByText('Welcome to app-shell!')).toBeTruthy();
  });
});
