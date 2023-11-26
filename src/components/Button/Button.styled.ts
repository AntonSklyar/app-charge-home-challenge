import styled, { css } from 'styled-components';
import { Buttons, IButton } from './Button.types';

export const StyledButton = styled.button<IButton>`
  border-radius: 16px;
  border: 0;

  // MainButton styles
  ${({ variant }) =>
    variant === Buttons.MainButton &&
    css`
      border-bottom: 2px solid #4b7625;
      background: linear-gradient(180deg, #83cc4d 0%, #54922f 100%);
      box-shadow: 0 4px 4px 0 rgba(165, 124, 50, 0.8);
      color: ${({ theme }) => theme.colors.darkGreen};
      font-size: ${({ theme }) => theme.fontSizes.medium};
      font-weight: 800;
      padding: 10px 44px;
      width: 100%;

      &:hover {
        background: linear-gradient(180deg, #75b744 0%, #4c832b 100%);
        cursor: pointer;
      }

      @media (min-width: 600px) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 110%);
        width: auto;
      }
    `}

  // SliderButton styles
  ${({ variant }) =>
    variant === Buttons.SliderButton &&
    css`
      border-bottom: 2px solid #c96b15;
      background: ${({ theme }) => theme.colors.orange};
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
      color: ${({ theme }) => theme.colors.darkOrange};
      font-size: ${({ theme }) => theme.fontSizes.medium};
      font-weight: 800;
      padding: 8px 20px;
      width: auto;

      &:hover {
        background: #c96b15;
        cursor: pointer;
      }
    `}
`;
