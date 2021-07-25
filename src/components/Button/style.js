import styled, { css } from 'styled-components';

const styles = {
  primary: css`
    color: #ffffff;
    background: #000000;

    &:hover {
      background: #303030;
    }
  `,
  secondary: css`
    color: #000000;
    background: #ffffff;

    &:hover {
      color: #303030;
    }
  `,
};

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  min-width: ${props => (props?.block ? '100%' : '120px')};
  height: 40px;
  text-align: center;
  border: 1px solid #000000;
  border-radius: 2px;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    border-color: #333333;
  }

  ${props => styles?.[props?.buttonType]}
`;

export const Icon = styled.div`
  margin-right: 8px;
`;

export const Text = styled.span``;
