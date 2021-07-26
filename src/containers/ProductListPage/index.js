import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { useParams } from 'react-router-dom';
import ProductCard from 'components/ProductCard';
import Breadcrumbs from 'components/Breadcrumbs';
import { Container, Title, ProductList } from './style';

const ProductListPage = () => {
  const { category } = useParams();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const isAll = category === 'all';

  const startLoading = () => {
    setLoading(true);
  };

  const stopLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    startLoading();

    if (isAll) {
      firebase
        .database()
        .ref('/products')
        .once('value', snapshot => {
          const newProducts = Object.values(snapshot.val() || {});

          setProducts(newProducts);
        })
        .finally(stopLoading);
    } else {
      firebase
        .database()
        .ref('/products')
        .orderByChild('category')
        .equalTo(category)
        .once('value', snapshot => {
          const newProducts = Object.values(snapshot.val() || {});

          setProducts(newProducts);
        })
        .finally(stopLoading);
    }
  }, [category, isAll]);

  return (
    <Container>
      <Breadcrumbs
        routes={[
          { name: '首頁', path: '/' },
          { name: isAll ? '商品列表' : category },
        ]}
      />

      <Title>{isAll ? '商品列表' : category}</Title>

      {loading && (
        <ProductList>
          <ProductCard loading />
          <ProductCard loading />
          <ProductCard loading />
          <ProductCard loading />
          <ProductCard loading />
          <ProductCard loading />
        </ProductList>
      )}

      {!loading && (
        <ProductList>
          {products?.map?.(product => (
            <ProductCard key={product?.id} {...product} />
          ))}
        </ProductList>
      )}
    </Container>
  );
};

export default ProductListPage;
