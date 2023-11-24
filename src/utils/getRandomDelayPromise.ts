import { BUNDLES, BundlesType } from '../constants';

function getRandomDelayPromise(): Promise<BundlesType> {
  return new Promise((resolve) => {
    const delay: number = Math.floor(Math.random() * 5000) + 1000;

    setTimeout(() => {
      resolve(BUNDLES);
    }, delay);
  });
}

export default getRandomDelayPromise;
