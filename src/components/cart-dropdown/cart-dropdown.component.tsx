import React from "react";
import { connect } from "react-redux";

import "./cart-dropdown.styles.scss";

import { CustomButton } from "../custom-button/custom-button.component";

import CartItem from "../cart-item/cart-item.component";
import { IShopItem } from "../../pages/shop/shop.data";
import { StateType } from "../../redux/root.types";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartDropdown: React.FC<{ cartItems: IShopItem[] }> = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    {cartItems.map((cartItem) => (
      <CartItem key={cartItem.id} item={cartItem} />
    ))}
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state: StateType): { cartItems: IShopItem[] } => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
