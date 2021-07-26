import React from 'react';
import PropTypes from 'prop-types';
import { Container, Label, Placeholder } from './style';

const Field = ({ label, children }) => (
  <Container>
    <Label>{label}</Label>

    {children || <Placeholder />}
  </Container>
);

Field.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
};

export default Field;
