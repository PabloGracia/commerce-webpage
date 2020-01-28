import { DirectoryStateType, DirectoryActionTypes } from "./directory.types";

const INITIAL_STATE: DirectoryStateType = {
  sections: [
    {
      title: "HATS",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "hats"
    },
    {
      title: "JACKETS",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "jackets"
    },
    {
      title: "SNEAKERS",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "sneakers"
    },
    {
      title: "WOMEN",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      linkUrl: "women"
    },
    {
      title: "MEN",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
      linkUrl: "men"
    }
  ]
};

const directoryReducer = (
  state: DirectoryStateType = INITIAL_STATE,
  action: DirectoryActionTypes
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;