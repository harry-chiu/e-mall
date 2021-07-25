import { render, createPortal } from 'react-dom';

const openModal = modal => {
  render(createPortal(modal, document.body), document.createElement('div'));
};

export default openModal;
