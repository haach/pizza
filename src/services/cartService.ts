import { cartItem } from "../utils/sharedTypes";
// I chose to use local storage as a pseudo backend, because
// it was important for me to persist the application state
// after route change

export const addItemToCart = (item: cartItem): Promise<string> =>
  new Promise<string>((resolve, reject) => {
    if (item) {
      let prevCart = localStorage.getItem("cart");
      let cart = prevCart ? JSON.parse(prevCart) : [];
      cart.push(item);
      localStorage.setItem("iconSelection", JSON.stringify(cart));
      resolve("success");
    } else reject("error");
  });
