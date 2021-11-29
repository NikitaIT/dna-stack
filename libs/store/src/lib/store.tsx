import styled from 'styled-components';

/* eslint-disable-next-line */
export interface StoreProps {}

const StyledStore = styled.div`
  color: pink;
`;

export function Store(props: StoreProps) {
  return (
    <StyledStore>
      <h1>Welcome to Store!</h1>
    </StyledStore>
  );
}

export default Store;
