import styled from 'styled-components';

export const Container = styled.div`
  display: table;
  table-layout: fixed;
  width: 100%;

  & > * {
    display: table-cell;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
