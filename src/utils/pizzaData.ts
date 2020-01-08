import { Item } from "./sharedTypes";

// This data would come typically from BE

export const sizes: { [id: string]: Item } = {
  small: {
    name: "small",
    price: 15
  },
  medium: {
    name: "medium",
    price: 20
  },
  large: {
    name: "large",
    price: 25
  }
};

export const toppings: { [id: string]: Item } = {
  olives: {
    name: "Olives",
    price: 3
  },
  pepperoni: {
    name: "Pepperoni",
    price: 4
  },
  mushrooms: {
    name: "Mushrooms",
    price: 2
  },
  pepper: {
    name: "Pepper",
    price: 2
  }
};
