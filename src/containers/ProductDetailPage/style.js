import styled from 'styled-components';
import { CartPlus } from '@styled-icons/bootstrap/CartPlus';
import { DEVICE } from 'constants/index';

export const Container = styled.div`
  padding: 24px 24px 72px 24px;

  & > * {
    margin-top: 24px;

    &:first-child {
      margin-top: 0;
    }
  }
`;

export const SpecBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
  padding: 16px;
  background: #ffffff;
  border-radius: 2px;

  @media ${DEVICE.LAPTOP} {
    grid-template-columns: 2fr 3fr;
  }
`;

export const ImageBlock = styled.div``;

export const InfoBlock = styled.div`
  & > * {
    margin-top: 16px;

    &:first-child {
      margin-top: 0;
    }
  }
`;

export const TitleBlock = styled.div``;

export const RateBlock = styled.div``;

export const PriceBlock = styled.div`
  padding: 16px;
  background: #f9f9f9;
`;

export const FormBlock = styled.div`
  & > * {
    margin-top: 16px;

    &:first-child {
      margin-top: 0;
    }
  }
`;

export const ActionBlock = styled.div`
  display: flex;
  align-items: center;
  margin-top: 48px;

  & > * {
    margin-left: 16px;

    &:first-child {
      margin-left: 0;
    }
  }
`;

export const ContentBlock = styled.div`
  padding: 16px;
  background: #ffffff;
  border-radius: 2px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  object-fit: cover;
`;

export const Name = styled.h1`
  margin: 0;
  color: #606060;
  font-weight: 400;
`;

export const Price = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export const CartIcon = styled(CartPlus)`
  width: 16px;
  height: 16px;
  color: #000000;

  &:hover {
    color: #000000;
  }
`;

export const Description = styled.p`
  padding: 0 8px;
  color: #606060;
`;
