import React from 'react';
import { Link } from 'react-router-dom';
import mockCategories from 'mocks/categories';
import { Container, CategoryBlock, Title, List, Item } from './style';

const SideBar = () => (
  <Container>
    <CategoryBlock>
      <Title>分類</Title>

      <List>
        {mockCategories?.map?.(category => (
          <Item key={category?.value}>
            <Link to={`/${category?.value}`}>{category?.label}</Link>
          </Item>
        ))}
      </List>
    </CategoryBlock>
  </Container>
);

export default SideBar;
