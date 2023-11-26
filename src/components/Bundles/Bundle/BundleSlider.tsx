import React from 'react';
import { Button } from '../../index';
import { Buttons } from '../../Button/Button.types';
import Image from '../../Image';
import { StyledBundleSlider } from './Bundle.styled';
import { IBundleSlider } from './Bundle.types';

const BundleSlider = ({ handleHorizontalScroll }: IBundleSlider) => {
  const svgArrowLeft: string =
    './assets/svg/iconmonstr-arrow-left-alt-filled.svg';
  const svgArrowRight: string =
    './assets/svg/iconmonstr-arrow-right-alt-filled.svg';

  return (
    <StyledBundleSlider>
      <Button
        onClick={() => handleHorizontalScroll(-10)}
        variant={Buttons.SliderButton}
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
        variant={Buttons.SliderButton}
      >
        <Image
          imageDescription="right-arrow"
          imageSrc={svgArrowRight}
          width="24px"
          height="24px"
        />
      </Button>
    </StyledBundleSlider>
  );
};

export default BundleSlider;
