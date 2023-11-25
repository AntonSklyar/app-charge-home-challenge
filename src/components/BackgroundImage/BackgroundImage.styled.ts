import styled, { css } from 'styled-components';
import { IBackgroundImage } from './BackgroundImage.types';

export const StyledBackgroundImage = styled.div<IBackgroundImage>`
  background-image: url(${({ backgroundImage }) => backgroundImage || ''});
  background-position: ${({ backgroundPosition }) => backgroundPosition || ''};
  background-size: ${({ backgroundSize }) => backgroundSize || ''};
  background-repeat: ${({ backgroundRepeat }) => backgroundRepeat || ''};
  height: ${({ height }) => height || 'auto'};
  width: ${({ width }) => width || 'auto'};

  ${({ styles }) => ({ ...styles })}

  ${({ isBundleBackground }) =>
    isBundleBackground &&
    css`
      @media (min-width: 600px) {
        width: 450px;
        height: 160px;
      }
    `}
`;
