import styled from 'styled-components';
import { Check } from '@styled-icons/boxicons-regular/Check';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ButtonWrapper = styled.div`
  position: relative;
  margin-right: 8px;
  margin-bottom: 8px;
  width: 80px;
`;

export const Button = styled.button`
  display: inline-block;
  width: 100%;
  padding: 8px;
  font-size: 12px;
  color: #606060;
  border: 1px solid ${props => (props?.active ? '#000000' : '#d0d0d0')};
  border-radius: 2px;
  background: transparent;
  cursor: pointer;

  &:hover {
    border-color: #000000;
  }
`;

export const CheckIcon = styled(Check)`
  position: absolute;
  top: 0;
  right: 0;
  width: 16px;
  height: 16px;
  color: #000000;

  &:hover {
    color: #000000;
  }
`;
