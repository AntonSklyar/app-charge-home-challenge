import React from 'react';
import { BundleType } from '../../../constants';
import {
  StyledBundle,
  StyledBundleBackGround,
  StyledBundleInformation,
  StyledBundleItem,
} from './Bundle.styled';
import { getTimeLeft } from '../../../utils';

import { Products, Button } from '../../index';

const Bundle = ({
  bgImage,
  timeLeftMs,
  maxAvailable,
  available,
  price,
  products,
}: BundleType) => {
  return (
    <StyledBundle>
      <StyledBundleBackGround bgImage={bgImage}>
        <Products products={products} />
      </StyledBundleBackGround>
      <StyledBundleInformation>
        <StyledBundleItem>
          Available: {available}/{maxAvailable}
        </StyledBundleItem>

        <StyledBundleItem>{getTimeLeft(timeLeftMs)}</StyledBundleItem>
      </StyledBundleInformation>
      <Button {...price} />
    </StyledBundle>
  );
};

export default Bundle;
