import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding: 8px;
  border-radius: 4px;
  color: #303030;
  background: #ffffff;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 8px 4px #d0d0d0;
  }

  & > a {
    display: inherit;
    text-decoration: none;
    color: inherit;
  }

  & > a > * {
    margin-top: 8px;

    &:first-child {
      margin-top: 0;
    }
  }
`;

export const TopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
`;

export const BottomBlock = styled.div`
  display: flex;
  flex-direction: ${props =>
    props?.direction === 'vertical' ? 'column' : 'row'};
  align-items: center;

  & > * {
    width: 100%;
    margin-top: ${props => (props?.direction === 'vertical' ? '8px' : '0')};
    margin-left: ${props => (props?.direction === 'horizental' ? '8px' : '0')};

    &:first-child {
      margin-top: 0;
      margin-left: 0;
    }
  }
`;

export const ImageBlock = styled.div``;

export const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props =>
    props?.direction === 'vertical' ? 'center' : 'flex-start'};
  text-align: ${props => (props?.direction === 'vertical' ? 'center' : 'left')};

  & > * {
    margin-top: 8px;

    &:first-child {
      margin-top: 0;
    }
  }
`;

export const Category = styled.span``;

export const Discount = styled.span`
  padding: 4px 6px;
  border-radius: 2px;
  color: #ffffff;
  background: #000000;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 100%;
`;

export const RateBlock = styled.div``;

export const Title = styled.span`
  font-size: 13px;
`;

export const PriceBlock = styled.div`
  & > * {
    margin-left: 4px;

    &:first-child {
      margin-left: 0;
    }
  }
`;

export const Price = styled.span`
  color: ${props => (props?.discount ? '#606060' : 'inherit')};
  font-size: ${props => (props?.discount ? '13px' : '14px')};
  text-decoration: ${props => (props?.discount ? 'line-through' : 'none')};
`;

export const DiscountPrice = styled.span`
  color: #000000;
  font-size: 16px;
  font-weight: 500;
`;
