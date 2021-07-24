import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px 24px 72px 24px;
  height: 100%;

  & > * {
    margin-top: 24px;

    &:first-child {
      margin-top: 0;
    }
  }
`;

export const BannerBlock = styled.div`
  display: flex;
  font-size: 0;

  & > * {
    margin-left: 16px;

    &:first-child {
      margin-left: 0;
    }
  }

  & > :nth-child(1) {
    flex: 2;
    max-width: 100%;
  }

  & > :nth-child(2) {
    flex: 1;
    max-width: 100%;
  }
`;

export const ProductBlock = styled.div`
  & > * {
    margin-top: 16px;

    &:first-child {
      margin-top: 0;
    }
  }
`;

export const PopularList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 16px;
`;

export const HighlightList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
`;
