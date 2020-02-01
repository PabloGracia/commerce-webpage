import { ProductInterface } from "../shop/shop.types";

export const addItemToCart = (
  cartItems: ProductInterface[],
  cartItemToAdd: ProductInterface
) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: (cartItem.quantity as number) + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const clearItemFromCart = (
  cartItems: ProductInterface[],
  cartItemToClear: ProductInterface
): ProductInterface[] =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const removeItemFromCart = (
  cartItems: ProductInterface[],
  cartItemToRemove: ProductInterface
): ProductInterface[] =>
  cartItems
    .map((cartItem) =>
      cartItem.id === cartItemToRemove.id // && cartItem.quantity !== 1
        ? { ...cartItem, quantity: (cartItem.quantity as number) - 1 }
        : cartItem
    )
    .filter((cartItem) => cartItem.quantity !== 0); // Comment this line and uncomment the above if you want the amount not to go lower than 1
