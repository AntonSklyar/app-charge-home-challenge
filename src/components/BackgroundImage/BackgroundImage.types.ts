import React from 'react';

export enum BackgroundSize {
  Cover = 'cover',
  Contain = 'contain',
}

export enum BackgroundPosition {
  Top = 'top',
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
  Center = 'center',
}

export enum BackgroundRepeat {
  Repeat = 'repeat',
  NoRepeat = 'no-repeat',
}

export interface IBackgroundImage extends React.PropsWithChildren {
  backgroundImage: string;
  backgroundPosition: BackgroundPosition;
  backgroundSize: BackgroundSize;
  backgroundRepeat: BackgroundRepeat;
  width: string;
  height: string;
  styles?: React.CSSProperties;
  isBundleBackground?: boolean;
}
