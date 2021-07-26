import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 100%;
  color: #ffffff;
  background: #232e3b;
`;

export const LeftBlock = styled.div`
  min-width: 120px;
`;

export const MiddleBlock = styled.div`
  flex: 1;
`;

export const RightBlock = styled.div`
  height: 100%;
`;

export const Logo = styled.img`
  width: 100%;
  height: auto;
  max-width: 56px;
  cursor: pointer;
`;

export const SignIn = styled.button`
  display: inline-block;
  height: 100%;
  color: #ffffff;
  font-size: 14px;
  letter-spacing: 2px;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  & > li {
    margin-left: 24px;

    &:first-child {
      margin-left: 0;
    }
  }
`;

export const Item = styled.li`
  color: #ffffff;

  & > a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: #ffe200;
    }
  }
`;
