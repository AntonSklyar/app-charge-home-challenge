import { useState, useEffect } from 'react';
import { getRandomDelayPromise } from '../utils';
import { IBundles, IBundle } from '../constants/bundles.types';

function useDataFetcher(): IBundles {
  const [bundles, setBundles] = useState<IBundle[]>([]);

  useEffect(() => {
    getRandomDelayPromise()
      .then((res: IBundles) => {
        setBundles(res.bundles);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return { bundles };
}

export default useDataFetcher;
