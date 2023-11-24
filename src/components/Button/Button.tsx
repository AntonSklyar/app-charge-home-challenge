import React from 'react';
import { StyledButton } from './Button.styled';
import { PriceType } from '../../constants';

const Button = ({ amount, currencySymbol }: PriceType) => {
  return (
    <StyledButton>
      {currencySymbol}
      {amount}
    </StyledButton>
  );
};

export default Button;
