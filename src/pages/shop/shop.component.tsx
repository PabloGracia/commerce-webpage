import React from "react";

import { IShopData, SHOP_DATA } from "./shop.data";
import { CollectionPreview } from "../../components/collection-preview/collection-preview.component";

interface IProps {}
interface IState {
  collections: IShopData[];
}

export class ShopPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map((collectionProps) => (
          <CollectionPreview key={collectionProps.id} {...collectionProps} />
        ))}
      </div>
    );
  }
}
