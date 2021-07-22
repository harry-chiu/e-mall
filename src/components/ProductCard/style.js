import styled, { css } from 'styled-components';
import { Star as StarFilled } from '@styled-icons/boxicons-solid/Star';
import { Star as StarOutlined } from '@styled-icons/boxicons-regular/Star';
import { StarHalf } from '@styled-icons/boxicons-solid/StarHalf';

const StarIconStyle = css`
  width: 16px;
  height: 16px;
  color: #000000;
`;

export const Container = styled.div`
  position: relative;
  padding: 8px;
  border-radius: 4px;
  color: #303030;
  background: #ffffff;
  cursor: pointer;

  & > * {
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

export const Discount = styled.span``;

export const Image = styled.img`
  width: 100%;
  max-width: 100%;
`;

export const RateBlock = styled.div``;

export const Title = styled.span`
  font-size: 13px;
`;

export const Price = styled.span`
  font-size: 14px;
`;

export const StarFilledIcon = styled(StarFilled)`
  ${StarIconStyle}
`;

export const StarOutlinedIcon = styled(StarOutlined)`
  ${StarIconStyle}
`;

export const StarHalfIcon = styled(StarHalf)`
  ${StarIconStyle}
`;
