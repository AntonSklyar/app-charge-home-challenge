import React from 'react';
import { useDataFetcher } from '../../hooks';
import { StyledBundles, StyledBundlesContainer } from './Bundles.styled';

import Bundle from './Bundle';

const Bundles = () => {
  const { bundles } = useDataFetcher();

  return (
    <StyledBundles>
      <StyledBundlesContainer>
        {bundles.map((bundle, i) => (
          <Bundle key={i} {...bundle} />
        ))}
      </StyledBundlesContainer>
    </StyledBundles>
  );
};

export default Bundles;
