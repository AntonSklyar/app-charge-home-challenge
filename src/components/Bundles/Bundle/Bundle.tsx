import React from 'react';
import { IBundle } from '../../../constants/bundles.types';
import {
  StyledBundle,
  StyledBundleContainer,
  StyledBundleInformation,
  styles,
} from './Bundle.styled';
import { getTimeLeft } from '../../../utils';
import { BackgroundImage, Button, Products, Text } from '../../index';
import {
  BackgroundPosition,
  BackgroundRepeat,
  BackgroundSize,
} from '../../BackgroundImage/BackgroundImage.types';
import { Buttons } from '../../Button/Button.types';
import { theme } from '../../../styles';
import { useHorizontalScroll } from '../../../hooks';
import Image from '../../Image';

const Bundle = ({
  bgImage,
  timeLeftMs,
  maxAvailable,
  available,
  price,
  products,
}: IBundle) => {
  const { amount, currencySymbol } = price;
  const { elementRef, handleHorizontalScroll, isOverflowing } =
    useHorizontalScroll(25, 100);

  const svgArrowLeft = './assets/svg/iconmonstr-arrow-left-alt-filled.svg';
  const svgArrowRight = './assets/svg/iconmonstr-arrow-right-alt-filled.svg';

  const PRICE = `${currencySymbol}${amount}`;
  const ITEMS_AVAILABLE = `Available: ${available}/${maxAvailable}`;

  return (
    <StyledBundle>
      {isOverflowing && (
        <StyledBundleContainer>
          <Button
            onClick={() => handleHorizontalScroll(-10)}
            buttonStyle={Buttons.SliderButton}
          >
            <Image
              imageDescription="left-arrow"
              imageSrc={svgArrowLeft}
              width="24px"
              height="24px"
            />
          </Button>
          <Button
            onClick={() => handleHorizontalScroll(10)}
            buttonStyle={Buttons.SliderButton}
          >
            <Image
              imageDescription="right-arrow"
              imageSrc={svgArrowRight}
              width="24px"
              height="24px"
            />
          </Button>
        </StyledBundleContainer>
      )}
      <BackgroundImage
        backgroundImage={bgImage}
        backgroundPosition={BackgroundPosition.Center}
        backgroundSize={BackgroundSize.Cover}
        backgroundRepeat={BackgroundRepeat.NoRepeat}
        width="320px"
        height="120px"
        styles={styles}
        isBundleBackground
      >
        <Products
          products={products}
          elementRef={elementRef}
          isOverflowing={isOverflowing}
        />
      </BackgroundImage>
      <StyledBundleInformation>
        <Text
          text={ITEMS_AVAILABLE}
          fontSize={theme.fontSizes.normal}
          fontWeight="800"
          strokeWidth="1px"
          strokeColor={theme.colors.black}
        />
        <Text
          text={getTimeLeft(timeLeftMs)}
          fontSize={theme.fontSizes.normal}
          fontWeight="800"
          strokeWidth="1px"
          strokeColor={theme.colors.black}
        />
      </StyledBundleInformation>
      <Button buttonStyle={Buttons.MainButton}>{PRICE}</Button>
    </StyledBundle>
  );
};

export default Bundle;
