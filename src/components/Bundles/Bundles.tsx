import React from 'react';
import { useDataFetcher } from '../../hooks';
import { StyledBundles } from './Bundles.styled';

import Bundle from './Bundle';

const Bundles = () => {
  const { bundles } = useDataFetcher();

  return (
    <StyledBundles>
      {bundles.map((bundle, i) => (
        <Bundle key={i} {...bundle} />
      ))}
    </StyledBundles>
  );
};

export default Bundles;
