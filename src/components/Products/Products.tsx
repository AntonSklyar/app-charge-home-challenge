import React from 'react';
import { StyledProducts } from './Products.styled';
import { IProducts } from './Products.types';
import Product from './Product';

const Products = ({ products, elementRef, isOverflowing }: IProducts) => {
  return (
    <StyledProducts ref={elementRef} isOverflowing={isOverflowing}>
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
