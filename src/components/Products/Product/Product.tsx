import React from 'react';
import { styles, StyledProduct } from './Product.styled';
import { IProduct } from '../../../constants/bundles.types';

import Image from '../../Image';
import Text from '../../Text';
import { theme } from '../../../styles';

const Product = ({ productImage, amount, productTextColor }: IProduct) => {
  return (
    <StyledProduct>
      <Image
        imageSrc={productImage}
        imageDescription="product-image"
        width="74px"
        height="74px"
        styles={styles}
      />
      <Text
        text={amount}
        color={productTextColor}
        fontSize={theme.fontSizes.large}
        fontWeight="800"
        strokeWidth="1px"
        strokeColor={theme.colors.brown}
      />
    </StyledProduct>
  );
};

export default Product;
