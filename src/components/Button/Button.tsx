import React from 'react';
import { StyledButton } from './Button.styled';
import { IButton } from './Button.types';

const Button = ({ variant, children, onClick }: IButton) => {
  return (
    <StyledButton onClick={onClick} variant={variant}>
      {children}
    </StyledButton>
  );
};

export default Button;
