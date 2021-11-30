import styled from 'styled-components';
import { di } from '@mdna/di';
import type { Translate } from '@mdna/i18n';
/* eslint-disable-next-line */
export interface UiProps {}
const StyledUi = styled.div`
  color: pink;
`;

export function Ui(props: UiProps) {
  const { t } = di.useContext<Translate>('I18n');
  return (
    <StyledUi>
      {JSON.stringify(process.env)}
      <h1>{t('Welcome to Ui!')}</h1>
      <div className="bg-indigo-300">{t('bg-red-900 if tw scan Ui!')}</div>
    </StyledUi>
  );
}

export default Ui;
