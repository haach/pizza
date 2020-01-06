export type item = {
  name: string;
  price: number;
};

export interface cartItem {
  id: string;
  size: string;
  toppings: item[];
}
