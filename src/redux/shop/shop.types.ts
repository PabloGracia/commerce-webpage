export interface IShopItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity?: number;
}

export interface IShopData {
  id: number;
  title: string;
  routeName: string;
  items: IShopItem[];
}

export type ShopStateType = {
  collections: IShopData[];
};

interface EmptyAction {
  type: any;
}

export type ShopActionTypes = EmptyAction;
