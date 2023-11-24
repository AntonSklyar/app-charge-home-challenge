export type PriceType = {
  amount: number;
  currencySymbol: string;
};

export type ProductType = {
  productImage: string;
  amount: string;
  productTextColor: string;
};

export type BundleType = {
  bgImage: string;
  timeLeftMs: number;
  maxAvailable: number;
  available: number;
  price: PriceType;
  products: ProductType[];
};

export type BundlesType = {
  bundles: BundleType[];
};
