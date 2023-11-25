import React from 'react';
import { StyledButton } from './Button.styled';
import { IButton } from './Button.types';

const Button = ({ buttonStyle, children, onClick }: IButton) => {
  return (
    <StyledButton onClick={onClick} buttonStyle={buttonStyle}>
      {children}
    </StyledButton>
  );
};

export default Button;
