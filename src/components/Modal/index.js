import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Mask } from './style';

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  const [visible, setVisible] = useState(true);

  const closeModal = () => {
    setVisible(false);

    setTimeout(() => {
      modalRef?.current?.remove?.();
    }, 250);
  };

  return (
    <Container ref={modalRef} visible={visible}>
      <Mask onClick={closeModal} />

      <Content>{children}</Content>
    </Container>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
};

export default Modal;
