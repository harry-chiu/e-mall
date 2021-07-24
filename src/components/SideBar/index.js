import React from 'react';
import { Link } from 'react-router-dom';
import mockDatabase from 'mocks/database';
import { Container, CategoryBlock, Title, List, Item } from './style';

const SideBar = () => (
  <Container>
    <CategoryBlock>
      <Title>分類</Title>

      <List>
        {Object.values(mockDatabase.categories).map(category => (
          <Item key={category?.id}>
            <Link to={`/product/${category?.id}`}>{category?.name}</Link>
          </Item>
        ))}
      </List>
    </CategoryBlock>
  </Container>
);

export default SideBar;
