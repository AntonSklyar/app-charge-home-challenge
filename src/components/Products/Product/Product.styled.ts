import styled from 'styled-components';
import { StyledProductAmountType } from './Product.types';

export const StyledProduct = styled.div`
  text-align: center;
`;

export const StyledProductImg = styled.img``;

export const StyledProductAmount = styled.div<StyledProductAmountType>`
  color: ${({ productTextColor }) => productTextColor || 'white'};
`;
