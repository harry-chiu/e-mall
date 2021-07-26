import React from 'react';
import { Link } from 'react-router-dom';
import LogoPng from 'images/logo.png';
import { PAGE_ROUTES } from 'constants/index';
import Modal from 'components/Modal';
import LoginForm from 'components/LoginForm';
import openModal from 'utils/openModal';
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
  const openLoginModal = () => {
    openModal(
      <Modal>
        <LoginForm />
      </Modal>,
    );
  };

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
        <SignIn onClick={openLoginModal}>登入/註冊</SignIn>
      </RightBlock>
    </Container>
  );
};

export default NaivgationBar;
