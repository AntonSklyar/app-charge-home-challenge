import React from 'react';
import {
  StyledProduct,
  StyledProductAmount,
  StyledProductImg,
  StyledProductImgContainer,
} from './Product.styled';

import { ProductType } from '../../../constants';

const Product = ({ productImage, amount, productTextColor }: ProductType) => {
  return (
    <StyledProduct>
      <StyledProductImgContainer>
        <StyledProductImg src={productImage} alt="product-image" />
      </StyledProductImgContainer>
      <StyledProductAmount productTextColor={productTextColor}>
        {amount}
      </StyledProductAmount>
    </StyledProduct>
  );
};

export default Product;
