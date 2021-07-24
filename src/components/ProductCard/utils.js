import React from 'react';
import { StarFilledIcon, StarOutlinedIcon, StarHalfIcon } from './style';

const MAX_STAR = 5;

export const renderStars = rate => {
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
  if (hasHalfStar) stars.push(<StarHalfIcon />);

  // Add outlined stars
  Array(MAX_STAR - stars.length)
    .fill()
    .forEach((_, index) =>
      stars.push(<StarOutlinedIcon key={`outlined-star-${index}`} />),
    );

  return stars;
};
