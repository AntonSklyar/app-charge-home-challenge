export interface IPrice {
  amount: number;
  currencySymbol: string;
}

export interface IProduct {
  productImage: string;
  amount: string;
  productTextColor: string;
}

export interface IBundle {
  bgImage: string;
  timeLeftMs: number;
  maxAvailable: number;
  available: number;
  price: IPrice;
  products: IProduct[];
}

export interface IBundles {
  bundles: IBundle[];
}
