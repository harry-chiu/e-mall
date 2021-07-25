export const renderDiscount = discount =>
  discount ? `${Number(discount * 100).toFixed(0)} 折` : null;
