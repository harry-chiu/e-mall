import React from 'react';
import { MAX_STAR } from './constants';
import { StarFilledIcon, StarOutlinedIcon, StarHalfIcon } from './style';

const Rate = ({ rate }) => {
  if (!rate || Number.isNaN(rate)) return '-';

  const [filledStarCount, hasHalfStar] = String(rate)
    ?.split?.('.')
    ?.map(Number);

  const stars = [];

  // Add filled stars
  Array(filledStarCount)
    .fill()
    .forEach((_, index) =>
      stars.push(<StarFilledIcon key={`filled-star-${index}`} />),
    );

  // Add half star
  if (hasHalfStar) stars.push(<StarHalfIcon key="half-star" />);

  // Add outlined stars
  Array(MAX_STAR - stars.length)
    .fill()
    .forEach((_, index) =>
      stars.push(<StarOutlinedIcon key={`outlined-star-${index}`} />),
    );

  return stars;
};

export default Rate;
