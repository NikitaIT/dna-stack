import { di } from '@mdna/di';
import { render } from '@testing-library/react';
import { createContext } from 'react';

import Ui from './ui';

describe('Ui', () => {
  it('should render successfully', () => {
    di.provideContext('I18n', createContext({ t: () => 'lalala' }));
    const { baseElement } = render(<Ui />);
    expect(baseElement).toBeTruthy();
  });
});
