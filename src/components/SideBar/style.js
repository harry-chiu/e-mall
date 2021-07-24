import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px 24px;
`;

export const CategoryBlock = styled.div`
  color: #303030;
`;

export const Title = styled.span`
  display: block;
  padding: 8px 0;
  border-bottom: 1px solid #e0e0e0;
  color: #606060;
  cursor: default;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 16px 0;

  & > * {
    margin-top: 8px;

    &:first-child {
      margin-top: 0;
    }
  }
`;

export const Item = styled.li`
  padding: 8px 0;
  cursor: pointer;

  & > a {
    display: block;
    width: 100%;
    height: 100%;
    color: inherit;
    text-decoration: none;

    &:hover {
      color: #007bff;
    }
  }
`;
