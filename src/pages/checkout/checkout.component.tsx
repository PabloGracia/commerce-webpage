import React from "react";
import { connect, ConnectedProps } from "react-redux";

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";
import { StateType } from "../../redux/root.types";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartStateType } from "../../redux/cart/cart.types";

const CheckoutPage: React.FC<PropsFromRedux> = ({ cartItems, total }) => (
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

const mapStateToProps = (
  state: StateType
): Pick<CartStateType, "cartItems"> & { total: number } => ({
  cartItems: selectCartItems(state),
  total: selectCartTotal(state)
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connect(mapStateToProps, null)(CheckoutPage);
