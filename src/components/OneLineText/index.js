import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';

const OneLineText = ({ children }) => <Container>{children}</Container>;

OneLineText.propTypes = {
  children: PropTypes.node,
};

export default OneLineText;
