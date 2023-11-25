import React from 'react';
import { IProduct } from '../../constants/bundles.types';

export interface IProducts {
  products: IProduct[];
  elementRef: React.RefObject<HTMLDivElement>;
  isOverflowing: boolean;
}

export interface IStyledProducts {
  isOverflowing: boolean;
}
