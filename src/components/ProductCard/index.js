import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
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
  PriceBlock,
  Price,
  DiscountPrice,
} from './style';

const ProductCard = ({
  id,
  name,
  rate,
  price,
  loading,
  category,
  discount,
  direction,
}) => {
  const imageRef = useRef(null);

  return (
    <Container>
      <Link to={`/products/${category}/${id}`}>
        <TopBlock>
          {loading && <Skeleton width={24} height={12} />}
          {!loading && <Category>{category || '-'}</Category>}

          {loading && <Skeleton width={24} height={12} />}
          {!loading && (
            <Discount>{renderDiscount(discount) || '無折扣'}</Discount>
          )}
        </TopBlock>

        <BottomBlock direction={direction}>
          <ImageBlock ref={imageRef}>
            {loading && <Skeleton style={{ height: 0, paddingTop: '100%' }} />}
            {!loading && (
              <Image src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" />
            )}
          </ImageBlock>

          <ContentBlock direction={direction}>
            <RateBlock>{!loading && <Rate rate={rate} />}</RateBlock>

            {loading && <Skeleton width={120} />}
            {!loading && (
              <OneLineText>
                <Title>{name || '-'}</Title>
              </OneLineText>
            )}

            {loading && <Skeleton width={120} />}
            {!loading && (
              <PriceBlock>
                <Price discount={discount}>${price ?? '-'}</Price>
                {discount && (
                  <DiscountPrice>
                    ${Number(price * discount).toFixed(2)}
                  </DiscountPrice>
                )}
              </PriceBlock>
            )}
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
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  loading: PropTypes.bool,
  category: PropTypes.string,
  discount: PropTypes.number,
  direction: PropTypes.oneOf(['vertical', 'horizental']),
};

ProductCard.defaultProps = {
  direction: 'vertical',
};

export default ProductCard;
