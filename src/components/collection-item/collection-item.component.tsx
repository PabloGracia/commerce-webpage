import React from "react";
import { connect } from "react-redux";

import "./collection-item.styles.scss";

import { IShopItem } from "../../pages/shop/shop.data";
import { CustomButton } from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem: React.FC<{ item: IShopItem; addItem: any }> = (props) => {
  const { imageUrl, name, price } = props.item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => props.addItem(props.item)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  addItem: (item: IShopItem) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
