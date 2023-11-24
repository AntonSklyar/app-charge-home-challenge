import { useState, useEffect } from 'react';
import { getRandomDelayPromise } from '../utils';
import { BundlesType, BundleType } from '../constants';

function useDataFetcher(): BundlesType {
  const [bundles, setBundles] = useState<BundleType[]>([]);

  useEffect(() => {
    getRandomDelayPromise()
      .then((res: BundlesType) => {
        setBundles(res.bundles);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return { bundles };
}

export default useDataFetcher;
