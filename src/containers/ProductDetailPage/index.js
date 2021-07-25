import React from 'react';
import { useParams } from 'react-router-dom';
import Rate from 'components/Rate';
import Field from 'components/Field';
import Button from 'components/Button';
import Breadcrumbs from 'components/Breadcrumbs';
import NumberInput from 'components/NumberInput';
import BlockHeader from 'components/BlockHeader';
import ButtonSelector from 'components/ButtonSelector';
import mockDatabase from 'mocks/database';
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
  const { categoryId, productId } = useParams();

  const category = mockDatabase?.categories?.[categoryId];
  const product = category?.products?.[productId] || {};

  console.log(category);

  return (
    <Container>
      <Breadcrumbs
        routes={[
          {
            name: '首頁',
            path: '/',
          },
          {
            name: category?.name || '商品列表',
            path: `/products/${categoryId}`,
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
            <Name>{product?.name}</Name>
          </TitleBlock>

          <RateBlock>
            <Rate rate={product?.rate} />
          </RateBlock>

          <PriceBlock>
            <Price>${product?.price || '-'}</Price>
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

        <Description>{product?.description}</Description>
      </ContentBlock>
    </Container>
  );
};

export default ProductDetailPage;
