import React from "react";

import "./collection-preview.styles.scss";

import { IShopData } from "../../pages/shop/shop.data";
import CollectionItem from "../collection-item/collection-item.component";

export const CollectionPreview: React.FC<IShopData> = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((items, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);
