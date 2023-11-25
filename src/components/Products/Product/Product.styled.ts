import styled from 'styled-components';
import { StyledProductAmountType } from './Product.types';

export const StyledProduct = styled.div`
  text-align: center;
`;

export const StyledProductImgContainer = styled.div`
  width: 74px;
  height: 74px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledProductImg = styled.img``;

export const StyledProductAmount = styled.div<StyledProductAmountType>`
  color: ${({ productTextColor }) => productTextColor || 'white'};
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #633724;
  font-size: 1.375rem;
  font-weight: 800;
`;
