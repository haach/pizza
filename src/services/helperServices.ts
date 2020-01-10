import { CartItem } from "../utils/sharedTypes";

export const calculateTotalPrice = (cartState: CartItem[]): number =>
  cartState.reduce((a, b) => a + b.selection.totalPrice, 0);

export const generateList = (arr: string[]) =>
  arr.reduce((acc: string, e: string, idx: number) => {
    return `${acc}${
      idx < arr.length - 2 ? `${e}, ` : idx < arr.length - 1 ? `${e} & ` : e
    }`;
  }, "");
