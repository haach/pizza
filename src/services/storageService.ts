import { CartItem, User } from "../utils/sharedTypes";
// I chose to use local storage as a pseudo backend, because
// it was important for me to persist the application state
// after reload or route change

export const addItemToStorage = (
  item: CartItem | User,
  key: "user" | "cart"
): Promise<string> =>
  new Promise<string>((resolve, reject) => {
    if (item && localStorage) {
      let newVal;
      if (key === "cart") {
        // concat existing items in storage
        let prevVal = localStorage.getItem(key);
        newVal = prevVal ? JSON.parse(prevVal) : [];
        newVal.push(item);
      } else {
        // overwrite user in storage
        newVal = item;
      }
      localStorage.setItem(key, JSON.stringify(newVal));
      resolve("success");
    } else reject("error");
  });
