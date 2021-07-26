import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import firebase from 'firebase/app';
import Skeleton from 'react-loading-skeleton';
import Rate from 'components/Rate';
import Field from 'components/Field';
import Button from 'components/Button';
import Breadcrumbs from 'components/Breadcrumbs';
import NumberInput from 'components/NumberInput';
import BlockHeader from 'components/BlockHeader';
import ButtonSelector from 'components/ButtonSelector';
import {
  Container,
  SpecBlock,
  ImageBlock,
  InfoBlock,
  TitleBlock,
  RateBlock,
  PriceBlock,
  FormBlock,
  ActionBlock,
  ContentBlock,
  Image,
  Name,
  Price,
  CartIcon,
  Description,
} from './style';

const ProductDetailPage = () => {
  const { category, productId } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  const startLoading = () => {
    setLoading(true);
  };

  const stopLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    startLoading();

    firebase
      .database()
      .ref(`/products/${productId}`)
      .once('value', snapshot => {
        const newProduct = snapshot.val() || {};

        setProduct(newProduct);
      })
      .finally(stopLoading);
  }, []);

  return (
    <Container>
      <Breadcrumbs
        routes={[
          {
            name: '首頁',
            path: '/',
          },
          {
            name: category || '商品列表',
            path: `/products/${category}`,
          },
          {
            name: product?.name || '-',
          },
        ]}
      />

      <SpecBlock>
        <ImageBlock>
          <Image src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" />
        </ImageBlock>

        <InfoBlock>
          <TitleBlock>
            {loading && <Skeleton width={120} />}
            {!loading && <Name>{product?.name}</Name>}
          </TitleBlock>

          <RateBlock>
            <Rate rate={product?.rate || 0} />
          </RateBlock>

          <PriceBlock>
            {!loading && <Price>${product?.price || '-'}</Price>}
          </PriceBlock>

          <FormBlock>
            <Field label="顏色">
              <ButtonSelector
                options={[
                  { label: '黑色', value: 'black' },
                  { label: '白色', value: 'white' },
                ]}
              />
            </Field>
            <Field label="尺寸">
              <ButtonSelector
                options={[
                  { label: '大', value: 'big' },
                  { label: '中', value: 'middle' },
                  { label: '小', value: 'little' },
                ]}
              />
            </Field>
            <Field label="數量">
              <NumberInput />
            </Field>
          </FormBlock>

          <ActionBlock>
            <Button type="primary">直接購買</Button>
            <Button type="secondary" icon={<CartIcon />}>
              加入購物車
            </Button>
          </ActionBlock>
        </InfoBlock>
      </SpecBlock>

      <ContentBlock>
        <BlockHeader title="商品介紹" />

        <Description>
          {loading && <Skeleton width={120} />}
          {loading && <Skeleton count={5} />}
          {!loading && product?.description}
        </Description>
      </ContentBlock>
    </Container>
  );
};

export default ProductDetailPage;
