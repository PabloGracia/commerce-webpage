import React from "react";

import "./collection-preview.styles.scss";

import { IShopData } from "../../redux/shop/shop.types";
import CollectionItem from "../collection-item/collection-item.component";

export const CollectionPreview: React.FC<Pick<
  IShopData,
  "items" | "title"
>> = ({ title, items }) => (
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
