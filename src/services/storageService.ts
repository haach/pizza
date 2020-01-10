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
    } else
      reject("There was an error while trying to add this item to the storage");
  });

export const deleteItemFromStorage = (id: string): Promise<string> =>
  new Promise<string>((resolve, reject) => {
    if (id && localStorage && localStorage.getItem("cart")) {
      let updatedCart = JSON.parse(localStorage.getItem("cart") || "").filter(
        (item: CartItem) => item.id !== id
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      resolve("success");
    } else
      reject(
        "There was an error while trying to delete this item from the storage"
      );
  });

export const readCartFromStorage = (): CartItem[] =>
  JSON.parse(localStorage.getItem("cart") || "[]");

export const readUserFromStorage = (): User | undefined =>
  localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "")
    : undefined;
