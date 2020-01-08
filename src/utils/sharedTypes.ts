export type Item = {
  type: "size" | "topping";
  name: string;
  price: number;
};

export interface CartItem {
  id: string;
  size: string;
  toppings: Item[];
}

export type Address = {
  streetName: string;
  houseNumber: string;
  postalCode: number;
  city: string;
};

export interface User {
  name: string;
  address: Address;
  phone: number;
}
