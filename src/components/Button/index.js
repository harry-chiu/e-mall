import React from 'react';
import PropTypes from 'prop-types';
import { Container, Icon, Text } from './style';

const Button = ({ icon, children, ...props }) => (
  <Container {...props}>
    {icon && <Icon>{icon}</Icon>}

    <Text>{children}</Text>
  </Container>
);

Button.propTypes = {
  icon: PropTypes.node,
  children: PropTypes.node,
};

export default Button;
