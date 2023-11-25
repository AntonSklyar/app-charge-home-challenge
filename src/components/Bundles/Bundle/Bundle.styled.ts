import styled from 'styled-components';

export const styles = {
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const StyledBundle = styled.div`
  background: linear-gradient(
      230deg,
      rgba(248, 204, 100, 0.8) 25.45%,
      rgba(251, 239, 163, 0.8) 125.07%
    ),
    linear-gradient(114deg, #b76f31 0%, #dca143 18.31%);
  box-shadow: 0 5px 0 0 #765018;
  border-radius: 16px;
  padding: 10px;
  position: relative;
`;

export const StyledBundleContainer = styled.div`
  position: absolute;
  display: flex;
  gap: 8px;
  top: -10px;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const StyledBundleInformation = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 8px 6px;
  color: ${({ theme }) => theme.colors.white};
`;
