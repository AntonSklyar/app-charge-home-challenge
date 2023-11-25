import { useState, useEffect } from 'react';
import { getRandomDelayPromise } from '../utils';
import { IBundles, IBundle } from '../constants/bundles.types';

interface IDataFetcher extends IBundles {
  loading: boolean;
}

function useDataFetcher(): IDataFetcher {
  const [bundles, setBundles] = useState<IBundle[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getRandomDelayPromise()
      .then((res: IBundles) => {
        setBundles(res.bundles);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return { bundles, loading };
}

export default useDataFetcher;
