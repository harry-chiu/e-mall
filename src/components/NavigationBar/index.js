import React from 'react';
import { Link } from 'react-router-dom';
import LogoPng from 'images/logo.png';
import { PAGE_ROUTES } from 'constants/index';
import {
  Container,
  LeftBlock,
  MiddleBlock,
  RightBlock,
  Logo,
  SignIn,
  List,
  Item,
} from './style';

const NaivgationBar = () => {
  return (
    <Container>
      <LeftBlock>
        <Link to="/">
          <Logo src={LogoPng} alt="brand logo" />
        </Link>
      </LeftBlock>

      <MiddleBlock>
        <List>
          {PAGE_ROUTES?.map?.(route => (
            <Item key={route?.label}>
              <Link to={route?.path}>{route?.label}</Link>
            </Item>
          ))}
        </List>
      </MiddleBlock>

      <RightBlock>
        <SignIn>登入/註冊</SignIn>
      </RightBlock>
    </Container>
  );
};

export default NaivgationBar;
