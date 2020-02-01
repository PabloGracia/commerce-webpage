import React from "react";
import { connect, ConnectedProps } from "react-redux";

import "./checkout-item.styles.scss";
import { ProductInterface } from "../../redux/shop/shop.types";
import { clearItem, addItem, removeItem } from "../../redux/cart/cart.actions";

const CheckoutItem: React.FC<{
  cartItem: ProductInterface;
} & PropsFromRedux> = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  clearItem: (item: ProductInterface) => dispatch(clearItem(item)),
  addItem: (item: ProductInterface) => dispatch(addItem(item)),
  removeItem: (item: ProductInterface) => dispatch(removeItem(item))
});

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(CheckoutItem);
