export type AVAILABLE_PAGES =
  | "hats"
  | "sneakers"
  | "jackets"
  | "womens"
  | "mens";

export type RoutePropsForPages = {
  match: {
    params: {
      collectionId: AVAILABLE_PAGES;
    };
  };
};
