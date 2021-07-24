import React from 'react';
import ProductCard from 'components/ProductCard';
import { Container, Title, ProductList } from './style';

const ProductListPage = () => {
  return (
    <Container>
      <Title>分類</Title>

      <ProductList>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductList>
    </Container>
  );
};

export default ProductListPage;
