import styled from 'styled-components';
import { IStyledText } from './Text.types';

export const StyledText = styled.p<IStyledText>`
  margin: 0;
  color: ${({ color }) => color || 'white'};
  -webkit-text-stroke-width: ${({ strokeWidth }) => strokeWidth || 0};
  -webkit-text-stroke-color: ${({ strokeColor }) => strokeColor || 'none'};
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
`;
