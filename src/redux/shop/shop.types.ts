export interface ProductInterface {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity?: number;
}

export interface CategoryInterface {
  id: number;
  title: string;
  routeName: string;
  items: ProductInterface[];
}

export interface ShopDataInterface {
  hats: CategoryInterface;
  sneakers: CategoryInterface;
  jackets: CategoryInterface;
  mens: CategoryInterface;
  womens: CategoryInterface;
}

export type ShopStateType = {
  collections: ShopDataInterface;
};

interface EmptyAction {
  type: any;
}

export type ShopActionTypes = EmptyAction;
