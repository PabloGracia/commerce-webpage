import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collection.styles.scss";
import { StateType } from "../../redux/root.types";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { RoutePropsForPages } from "./collection.types";
import { CategoryInterface } from "../../redux/shop/shop.types";

const CollectionPage: React.FC<PropsFromRedux> = ({ collection }) => {
  if (!collection) {
    return (
      <div className="not-found">
        <h1>PAGE NOT FOUND</h1>
      </div>
    );
  }
  const { title, items } = collection as CategoryInterface;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (
  state: StateType,
  ownProps: RouteComponentProps & RoutePropsForPages
) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(CollectionPage);
