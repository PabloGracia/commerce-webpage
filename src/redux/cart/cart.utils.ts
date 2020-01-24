import { IShopItem } from "../../pages/shop/shop.data";

export const addItemToCart = (
  cartItems: IShopItem[],
  cartItemToAdd: IShopItem
) => {
  // console.log("cartItems: ", cartItems, "cartItemToAdd: ", cartItemToAdd);
  console.log("cartItems: ");
  console.log(cartItems);
  console.log("");
  console.log("cartItemToAdd");
  console.log(cartItemToAdd);
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    console.log("exists");
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: (cartItem.quantity as number) + 1 }
        : cartItem
    );
  }
  console.log("does not exist");
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
