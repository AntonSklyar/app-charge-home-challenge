import React from 'react';

export enum Buttons {
  MainButton = 'mainButton',
  SliderButton = 'sliderButton',
}

export interface IButton extends React.PropsWithChildren {
  buttonStyle: Buttons;
  onClick?: () => void;
}
