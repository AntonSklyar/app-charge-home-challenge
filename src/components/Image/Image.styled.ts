import styled from 'styled-components';
import { IImageContainer } from './Image.types';

export const StyledImageContainer = styled.div<IImageContainer>`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  ${({ styles }) => ({ ...styles })}
`;

export const StyledImage = styled.img``;
