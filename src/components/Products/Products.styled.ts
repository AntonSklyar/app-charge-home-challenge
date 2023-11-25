import styled from 'styled-components';
import { IStyledProducts } from './Products.types';

export const StyledProducts = styled.div<IStyledProducts>`
  display: flex;
  justify-content: ${({ isOverflowing }) =>
    isOverflowing ? 'flex-start' : 'center'};
  gap: 12px;
  overflow-x: hidden;
  width: 100%;
  margin-left: ${({ isOverflowing }) => (isOverflowing ? '32px' : 0)};
`;
