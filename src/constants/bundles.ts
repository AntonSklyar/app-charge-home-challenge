import { IBundles } from './bundles.types';

export const BUNDLES: IBundles = {
  bundles: [
    {
      bgImage: './assets/cover.png',
      timeLeftMs: 3600000,
      maxAvailable: 10,
      available: 5,
      price: {
        amount: 99,
        currencySymbol: '$',
      },
      products: [
        {
          productImage: './assets/asset1.png',
          amount: '6,000',
          productTextColor: 'teal',
        },
        {
          productImage: './assets/asset2.png',
          amount: '30M',
          productTextColor: 'gold',
        },
        {
          productImage: './assets/asset3.png',
          amount: '20',
          productTextColor: 'purple',
        },
      ],
    },
    {
      bgImage: './assets/cover.png',
      timeLeftMs: 7200000,
      maxAvailable: 20,
      available: 15,
      price: {
        amount: 149,
        currencySymbol: '$',
      },
      products: [
        {
          productImage: './assets/asset1.png',
          amount: '12,000',
          productTextColor: 'blue',
        },
        {
          productImage: './assets/asset2.png',
          amount: '60M',
          productTextColor: 'gold',
        },
        {
          productImage: './assets/asset3.png',
          amount: '40',
          productTextColor: 'pink',
        },
        {
          productImage: './assets/asset1.png',
          amount: '12,000',
          productTextColor: 'blue',
        },
        {
          productImage: './assets/asset2.png',
          amount: '60M',
          productTextColor: 'gold',
        },
        {
          productImage: './assets/asset3.png',
          amount: '40',
          productTextColor: 'pink',
        },
        {
          productImage: './assets/asset2.png',
          amount: '60M',
          productTextColor: 'gold',
        },
        {
          productImage: './assets/asset3.png',
          amount: '40',
          productTextColor: 'pink',
        },
        {
          productImage: './assets/asset1.png',
          amount: '12,000',
          productTextColor: 'blue',
        },
        {
          productImage: './assets/asset2.png',
          amount: '60M',
          productTextColor: 'gold',
        },
        {
          productImage: './assets/asset3.png',
          amount: '40',
          productTextColor: 'pink',
        },
      ],
    },
    {
      bgImage: './assets/cover.png',
      timeLeftMs: 10800000,
      maxAvailable: 5,
      available: 2,
      price: {
        amount: 199,
        currencySymbol: '$',
      },
      products: [
        {
          productImage: './assets/asset1.png',
          amount: '18,000',
          productTextColor: 'green',
        },
        {
          productImage: './assets/asset2.png',
          amount: '100M',
          productTextColor: 'gold',
        },
        {
          productImage: './assets/asset3.png',
          amount: '60',
          productTextColor: 'red',
        },
      ],
    },
  ],
};
