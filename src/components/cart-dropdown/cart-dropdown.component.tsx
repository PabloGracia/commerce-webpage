import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";

import "./cart-dropdown.styles.scss";

import { CustomButton } from "../custom-button/custom-button.component";

import CartItem from "../cart-item/cart-item.component";
import { StateType } from "../../redux/root.types";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { CartStateType } from "../../redux/cart/cart.types";

const CartDropdown: React.FC<Pick<CartStateType, "cartItems"> &
  RouteComponentProps &
  PropsFromRedux> = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = (
  state: StateType
): Pick<CartStateType, "cartItems"> => ({
  cartItems: selectCartItems(state)
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default withRouter(connector(CartDropdown));
