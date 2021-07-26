import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, ButtonWrapper, Button, CheckIcon } from './style';

const ButtonSelector = ({ mutiple, options }) => {
  const [value, setValue] = useState(mutiple ? [] : '');

  const onClick = event => {
    const selectedValue = event?.target?.value;

    if (mutiple) {
      const newValue = [...value];

      if (!newValue.includes(selectedValue)) {
        newValue.push(selectedValue);
      } else {
        newValue.splice(newValue.indexOf(selectedValue), 1);
      }

      setValue(newValue);
    }

    setValue(selectedValue);
  };

  return (
    <Container>
      {options?.map?.(option => (
        <ButtonWrapper key={option?.value}>
          <Button
            active={value.includes(option?.value)}
            value={option?.value}
            onClick={onClick}
          >
            {option?.label}
          </Button>

          {value.includes(option?.value) && <CheckIcon />}
        </ButtonWrapper>
      ))}
    </Container>
  );
};

ButtonSelector.propTypes = {
  mutiple: PropTypes.bool,
  options: PropTypes.array,
};

ButtonSelector.defaultProps = {
  mutiple: false,
};

export default ButtonSelector;
