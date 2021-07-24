import faker from 'faker';

const generateProduct = ({ index }) => ({
  id: index,
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  price: faker.commerce.price(),
  rate: faker.datatype.float({ min: 0.0, max: 5.0, precision: 0.1 }),
  discount: faker.datatype.float({ min: 0.0, max: 1.0, precision: 0.01 }),
});

const generateProducts = ({ count }) => {
  const products = {};

  Array(count)
    .fill()
    .forEach((_, index) => (products[index] = generateProduct({ index })));

  return products;
};

const database = {
  categories: {
    all: {
      id: 'all',
      name: '所有商品',
      products: generateProducts({ count: 24 }),
    },
    '3c': {
      id: '3c',
      name: '3C',
      products: generateProducts({ count: 16 }),
    },
    cloth: {
      id: 'cloth',
      name: '衣服',
      products: generateProducts({ count: 16 }),
    },
    shoes: {
      id: 'shoes',
      name: '鞋子',
      products: generateProducts({ count: 16 }),
    },
    sport: {
      id: 'sport',
      name: '運動',
      products: generateProducts({ count: 16 }),
    },
    book: {
      id: 'book',
      name: '書籍',
      products: generateProducts({ count: 16 }),
    },
    pet: {
      id: 'pet',
      name: '寵物',
      products: generateProducts({ count: 16 }),
    },
    life: {
      id: 'life',
      name: '生活',
      products: generateProducts({ count: 16 }),
    },
    food: {
      id: 'food',
      name: '美食',
      products: generateProducts({ count: 16 }),
    },
  },
};

export default database;
