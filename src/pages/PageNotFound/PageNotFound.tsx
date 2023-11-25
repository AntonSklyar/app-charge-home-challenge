import React from 'react';
import {
  StyledErrorContainer,
  StyledErrorMessage,
  StyledErrorNumber,
} from './PageNotFound.styled';

const PageNotFound = () => {
  return (
    <StyledErrorContainer>
      <StyledErrorNumber>404</StyledErrorNumber>
      <StyledErrorMessage>Page not found</StyledErrorMessage>
    </StyledErrorContainer>
  );
};

export default PageNotFound;
