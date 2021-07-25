import React from 'react';
import PropTypes from 'prop-types';
import { Container, Icon, Text } from './style';

const Button = ({ icon, type, htmlType, children, ...props }) => (
  <Container type={htmlType} buttonType={type} {...props}>
    {icon && <Icon>{icon}</Icon>}

    <Text>{children}</Text>
  </Container>
);

Button.propTypes = {
  icon: PropTypes.node,
  type: PropTypes.string,
  htmlType: PropTypes.oneOf(['button', 'reset', 'submit']),
  children: PropTypes.node,
};

Button.defaultProps = {
  htmlType: 'button,',
};

export default Button;
