import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import Rate from 'components/Rate';
import OneLineText from 'components/OneLineText';
import { renderDiscount } from './utils';
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

const ProductCard = ({
  id,
  name,
  rate,
  price,
  category,
  discount,
  direction,
}) => {
  const { categoryId } = useParams();

  return (
    <Container>
      <Link to={`/product/${categoryId}/${id}`}>
        <TopBlock>
          <Category>{category || '-'}</Category>

          <Discount>{renderDiscount(discount) || '無折扣'}</Discount>
        </TopBlock>

        <BottomBlock direction={direction}>
          <ImageBlock>
            <Image src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" />
          </ImageBlock>

          <ContentBlock direction={direction}>
            <RateBlock>
              <Rate rate={rate} />
            </RateBlock>

            <OneLineText>
              <Title>{name || '-'}</Title>
            </OneLineText>

            <OneLineText>
              <Price>${price ?? '-'}</Price>
            </OneLineText>
          </ContentBlock>
        </BottomBlock>
      </Link>
    </Container>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  rate: PropTypes.number,
  price: PropTypes.number,
  category: PropTypes.string,
  discount: PropTypes.number,
  direction: PropTypes.oneOf(['vertical', 'horizental']),
};

ProductCard.defaultProps = {
  direction: 'vertical',
};

export default ProductCard;
