export interface ProductInterfacePage {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
}

export const productApple: ProductInterfacePage = {
  id: 2,
  name: 'Apple',
  price: 12,
  description: 'Apple is good for health',
  category: 'Fruits',
};

export const productOrange: ProductInterfacePage = {
  id: 3,
  name: 'Orange',
  price: 4,
  description: 'Orange is rich in vitamin C',
  category: 'Fruits',
};
