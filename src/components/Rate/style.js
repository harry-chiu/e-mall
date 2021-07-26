import styled, { css } from 'styled-components';
import { Star as StarFilled } from '@styled-icons/boxicons-solid/Star';
import { Star as StarOutlined } from '@styled-icons/boxicons-regular/Star';
import { StarHalf } from '@styled-icons/boxicons-solid/StarHalf';

const StarIconStyle = css`
  width: 16px;
  height: 16px;
  color: #000000;
`;

export const StarFilledIcon = styled(StarFilled)`
  ${StarIconStyle}
`;

export const StarOutlinedIcon = styled(StarOutlined)`
  ${StarIconStyle}
`;

export const StarHalfIcon = styled(StarHalf)`
  ${StarIconStyle}
`;
