import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from 'components/ProductCard';
import Breadcrumbs from 'components/Breadcrumbs';
import mockDatabase from 'mocks/database';
import { Container, Title, ProductList } from './style';

const ProductListPage = () => {
  const { categoryId } = useParams();

  const category = mockDatabase?.categories?.[categoryId];
  const categoryName = category?.name;
  const products = Object.values(
    mockDatabase?.categories?.[categoryId]?.products || {},
  );

  return (
    <Container>
      <Breadcrumbs
        routes={[
          { name: '首頁', path: '/' },
          { name: categoryName || '商品列表' },
        ]}
      />

      <Title>{categoryName || '-'}</Title>

      <ProductList>
        {products?.map?.(product => (
          <ProductCard key={product?.id} category={categoryName} {...product} />
        ))}
      </ProductList>
    </Container>
  );
};

export default ProductListPage;
