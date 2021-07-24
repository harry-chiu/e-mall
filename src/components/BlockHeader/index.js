import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Extra } from './style';

const BlockHeader = ({ title, extra }) => {
  return (
    <Container>
      <Title>{title}</Title>

      {extra && <Extra>{extra}</Extra>}
    </Container>
  );
};

BlockHeader.propTypes = {
  title: PropTypes.string,
  extra: PropTypes.node,
};

BlockHeader.defaultProps = {
  title: '標題',
};

export default BlockHeader;
