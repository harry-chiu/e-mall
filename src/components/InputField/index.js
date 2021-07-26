import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';
import { Container, Input, ErrorText } from './style';

const InputField = props => {
  const { touched, errors } = useFormikContext();

  const showError = touched?.[props?.name] && errors?.[props?.name];
  const errorMessage = errors?.[props?.name];

  return (
    <Container>
      <Input showError={showError} {...props} />
      <ErrorText>{showError && errorMessage}</ErrorText>
    </Container>
  );
};

InputField.propTypes = {
  name: PropTypes.string,
};

export default InputField;
