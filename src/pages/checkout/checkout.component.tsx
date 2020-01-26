import React from "react";
import { connect } from "react-redux";

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";
import { StateType } from "../../redux/root.types";
import { IShopItem } from "../shop/shop.data";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutPage: React.FC<{ cartItems: IShopItem[]; total: number }> = ({
  cartItems,
  total
}) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
  </div>
);

const mapStateToProps = (state: StateType) => ({
  cartItems: selectCartItems(state),
  total: selectCartTotal(state)
});

export default connect(mapStateToProps, null)(CheckoutPage);
