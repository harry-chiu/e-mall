import React from 'react';
import LogoPng from 'images/logo.png';
import {
  Container,
  LeftBlock,
  MiddleBlock,
  RightBlock,
  Logo,
  SignIn,
} from './style';

const NaivgationBar = () => {
  return (
    <Container>
      <LeftBlock>
        <Logo src={LogoPng} alt="brand logo" />
      </LeftBlock>

      <MiddleBlock></MiddleBlock>

      <RightBlock>
        <SignIn>登入/註冊</SignIn>
      </RightBlock>
    </Container>
  );
};

export default NaivgationBar;
