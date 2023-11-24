import React from 'react';
import { StyledProducts } from './Products.styled';
import { ProductsType } from './Products.types';

import Product from './Product';

const Products = ({ products }: ProductsType) => {
  return (
    <StyledProducts>
      {products.map(({ productImage, amount, productTextColor }, i) => (
        <Product
          key={i}
          productImage={productImage}
          amount={amount}
          productTextColor={productTextColor}
        />
      ))}
    </StyledProducts>
  );
};

export default Products;
