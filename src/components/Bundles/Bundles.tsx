import React from 'react';
import { useDataFetcher } from '../../hooks';
import { StyledBundles, StyledBundlesContainer } from './Bundles.styled';

import Bundle from './Bundle';
import Loader from '../Loader';

const Bundles = () => {
  const { bundles, loading } = useDataFetcher();

  if (loading) {
    return <Loader />;
  }

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
