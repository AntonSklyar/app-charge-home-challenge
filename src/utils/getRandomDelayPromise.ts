import { IBundles } from '../constants/bundles.types';
import BUNDLES from '../constants';

function getRandomDelayPromise(): Promise<IBundles> {
  return new Promise((resolve) => {
    const delay: number = Math.floor(Math.random() * 5000) + 1000;

    setTimeout(() => {
      resolve(BUNDLES);
    }, delay);
  });
}

export default getRandomDelayPromise;
