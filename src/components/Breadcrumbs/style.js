import styled from 'styled-components';
import { NavigateNext } from '@styled-icons/material/NavigateNext';

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  line-height: 1;

  & > * {
    margin-left: 4px;

    &:first-child {
      margin-left: 0;
    }
  }

  & > a {
    color: #007bff;
    text-decoration: none;
  }
`;

export const Divider = styled(NavigateNext)`
  width: 16px;
  height: 16px;
  color: #606060;

  &:hover {
    color: #606060;
  }
`;

export const Text = styled.span``;
