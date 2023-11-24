import React from 'react';
import {
  StyledProduct,
  StyledProductAmount,
  StyledProductImg,
} from './Product.styled';

import { ProductType } from '../../../constants';

const Product = ({ productImage, amount, productTextColor }: ProductType) => {
  return (
    <StyledProduct>
      <StyledProductImg src={productImage} alt="product-image" />
      <StyledProductAmount productTextColor={productTextColor}>
        {amount}
      </StyledProductAmount>
    </StyledProduct>
  );
};

export default Product;
