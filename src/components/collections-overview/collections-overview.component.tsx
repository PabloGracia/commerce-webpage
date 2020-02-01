import React from "react";
import { connect, ConnectedProps } from "react-redux";

import "./collections-overview.styles.scss";

import { CollectionPreview } from "../collection-preview/collection-preview.component";
import { StateType } from "../../redux/root.types";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import { CategoryInterface } from "../../redux/shop/shop.types";

const CollectionsOverview: React.FC<PropsFromRedux> = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = (
  state: StateType
): { collections: CategoryInterface[] } => ({
  collections: selectCollectionsForPreview(state)
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(CollectionsOverview);

/* 

    <div className="collections-overview">
    {Object.getOwnPropertyNames(collections).map((category) => {
      const { id, ...otherCollectionProps } = collections[
        category as AVAILABLE_PAGES
      ];
      return <CollectionPreview key={id} {...otherCollectionProps} />;
    })}
  </div>
  */
