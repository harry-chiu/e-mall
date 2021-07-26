import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import Skeleton from 'react-loading-skeleton';
import { Container, CategoryBlock, Title, List, Item } from './style';

const SideBar = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  const stopLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    firebase
      .database()
      .ref('/categories')
      .once('value', snapshot => {
        const newCategories = Object.values(snapshot.val() || {});

        setCategories(newCategories);
      })
      .finally(stopLoading);
  }, []);

  return (
    <Container>
      <CategoryBlock>
        {loading && <Skeleton width={120} />}
        {!loading && <Title>分類</Title>}

        {loading && <Skeleton count={5} />}
        {!loading && (
          <List>
            {categories?.map?.(category => (
              <Item key={category?.name}>
                <Link to={`/products/${category?.name}`}>{category?.name}</Link>
              </Item>
            ))}
          </List>
        )}
      </CategoryBlock>
    </Container>
  );
};

export default SideBar;
