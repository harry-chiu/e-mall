export const renderDiscount = discount =>
  discount ? `-${Number((1 - discount) * 100).toFixed(0)}%` : null;
