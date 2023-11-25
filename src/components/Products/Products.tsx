import React from 'react';
import { StyledProducts } from './Products.styled';
import { ProductsType } from './Products.types';

import Product from './Product';
import { useHorizontalScroll } from '../../hooks';

const Products = ({ products }: ProductsType) => {
  const { elementRef, handleHorizontalScroll, isOverflowing } =
    useHorizontalScroll(25, 100);

  return (
    <>
      {isOverflowing && (
        <div style={{ position: 'absolute', top: '-2px' }}>
          <button onClick={() => handleHorizontalScroll(-10)} type="submit">
            Left
          </button>
          <button onClick={() => handleHorizontalScroll(10)} type="submit">
            Right
          </button>
        </div>
      )}
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
    </>
  );
};

export default Products;
