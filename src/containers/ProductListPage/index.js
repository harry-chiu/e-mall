import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from 'components/ProductCard';
import mockDatabase from 'mocks/database';
import { Container, Title, ProductList } from './style';

const ProductListPage = () => {
  const { categoryId } = useParams();

  const category = mockDatabase?.categories?.[categoryId]?.name;
  const products = Object.values(
    mockDatabase?.categories?.[categoryId]?.products || {},
  );

  return (
    <Container>
      <Title>{category || '-'}</Title>

      <ProductList>
        {products?.map?.(product => (
          <ProductCard key={product?.id} category={category} {...product} />
        ))}
      </ProductList>
    </Container>
  );
};

export default ProductListPage;
