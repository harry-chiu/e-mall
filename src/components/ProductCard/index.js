import React from 'react';
import PropTypes from 'prop-types';
import OneLineText from 'components/OneLineText';
import { renderStars } from './utils';
import {
  Container,
  TopBlock,
  BottomBlock,
  ImageBlock,
  ContentBlock,
  Category,
  Discount,
  Image,
  RateBlock,
  Title,
  Price,
} from './style';

const ProductCard = ({ direction }) => {
  return (
    <Container>
      <TopBlock>
        <Category>分類</Category>

        <Discount>-50%</Discount>
      </TopBlock>

      <BottomBlock direction={direction}>
        <ImageBlock>
          <Image src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" />
        </ImageBlock>

        <ContentBlock direction={direction}>
          <RateBlock>{renderStars(3.5)}</RateBlock>

          <OneLineText>
            <Title>商品</Title>
          </OneLineText>

          <OneLineText>
            <Price>$100</Price>
          </OneLineText>
        </ContentBlock>
      </BottomBlock>
    </Container>
  );
};

ProductCard.propTypes = {
  direction: PropTypes.oneOf(['vertical', 'horizental']),
};

ProductCard.defaultProps = {
  direction: 'vertical',
};

export default ProductCard;
