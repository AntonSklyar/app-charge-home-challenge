import styled from 'styled-components';
import { BundleBackGroundType } from './Bundle.types';

export const StyledBundle = styled.div`
  background: linear-gradient(
      230deg,
      rgba(248, 204, 100, 0.8) 25.45%,
      rgba(251, 239, 163, 0.8) 125.07%
    ),
    linear-gradient(114deg, #b76f31 0%, #dca143 18.31%);
  border-radius: 16px;
  padding: 10px;
  position: relative;
`;

export const StyledBundleBackGround = styled.div<BundleBackGroundType>`
  background-image: url(${({ bgImage }) => bgImage || ''});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 450px;
  height: 160px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledBundleInformation = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 12px 12px;
  color: white;
`;

export const StyledBundleItem = styled.p`
  font-size: 1rem;
  font-weight: bolder;
  margin: 0;
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
`;
