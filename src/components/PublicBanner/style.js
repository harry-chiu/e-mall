import styled, { css } from 'styled-components';
import { NavigateNext } from '@styled-icons/material/NavigateNext';
import { NavigateBefore } from '@styled-icons/material/NavigateBefore';

const IconStyle = css`
  width: 32px;
  height: 32px;
  color: #ffffff;
  z-index: 9;

  &:hover {
    color: #ffffff;
  }
`;

export const Container = styled.div`
  min-width: 0; // fix react-slick unexpect width problem

  // fix react-slick unexpect height problem
  .slick-slider,
  .slick-list,
  .slick-track,
  .slick-slide,
  .slick-slide > div {
    height: 100%;
  }
`;

export const Image = styled.img`
  height: 100%;
`;

export const NextIcon = styled(NavigateNext)`
  ${IconStyle}
  right: 4px;
`;

export const PreviousIcon = styled(NavigateBefore)`
  ${IconStyle}
  left: 4px;
`;

export const DotBlock = styled.div`
  position: absolute;
  bottom: 8px;
`;
