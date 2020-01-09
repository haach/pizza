import { StepWizardChildProps } from "react-step-wizard";

export type Item = {
  name: string;
  price: number;
};

export interface CartItem {
  id: string;
  selection: {
    size: Item;
    toppings: { [id: string]: Item };
    totalPrice: number;
  };
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

export interface StatefulWizardStepProps extends Partial<StepWizardChildProps> {
  cartState?: CartItem[];
  totalPrice: number;
  updateCartState?: () => void;
}
