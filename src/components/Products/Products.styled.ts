import styled from 'styled-components';
import { StyledProductsType } from './Products.types';

export const StyledProducts = styled.div<StyledProductsType>`
  display: flex;
  justify-content: ${({ isOverflowing }) =>
    isOverflowing ? 'flex-start' : 'center'};
  gap: 12px;
  overflow-x: hidden;
  width: 100%;
  margin-left: ${({ isOverflowing }) => (isOverflowing ? '20px' : 0)};
`;
