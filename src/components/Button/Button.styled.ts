import styled from 'styled-components';

export const StyledButton = styled.button`
  border-radius: 16px;
  border: 0;
  border-bottom: 2px solid #4b7625;
  background: linear-gradient(180deg, #83cc4d 0%, #54922f 100%);
  box-shadow: 0 4px 4px 0 rgba(165, 124, 50, 0.8);
  color: #14360e;
  font-size: 1.125rem;
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
`;
