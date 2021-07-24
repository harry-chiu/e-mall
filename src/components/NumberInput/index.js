import React, { useRef, useState } from 'react';
import { Container, Decrease, Increase, Input } from './style';

const NumberInput = () => {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');

  const increase = () => {
    const newValue = Number(inputRef.current.value) + 1;

    inputRef.current.value = newValue;
    setValue(newValue);
  };

  const decrease = () => {
    const newValue = Number(inputRef.current.value) - 1;

    if (newValue >= 1) {
      inputRef.current.value = newValue;
      setValue(newValue);
    }
  };

  const onChange = event => {
    const newValue = Number(event?.target?.value);

    if (newValue >= 1) setValue(newValue);
  };

  const onBlur = event => {
    const newValue = Number(event?.target?.value);

    if (newValue >= 1) inputRef.current.value = newValue;
    else inputRef.current.value = value;
  };

  return (
    <Container>
      <Decrease onClick={decrease}>-</Decrease>
      <Input ref={inputRef} onChange={onChange} onBlur={onBlur} />
      <Increase onClick={increase}>+</Increase>
    </Container>
  );
};

export default NumberInput;
