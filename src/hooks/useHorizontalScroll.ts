import { useEffect, useRef, useState, useCallback } from 'react';

const useHorizontalScroll = (speed: number, distance: number) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState<boolean>(false);

  useEffect(() => {
    const checkOverflow = () => {
      const element = elementRef.current;
      if (element) {
        setIsOverflowing(element.scrollWidth > element.clientWidth);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);

    return () => {
      window.removeEventListener('resize', checkOverflow);
    };
  }, []);

  const handleHorizontalScroll = useCallback(
    (step: number) => {
      const element = elementRef.current;
      if (element) {
        let scrollAmount = 0;

        const slideTimer = setInterval(() => {
          element.scrollLeft += step;
          scrollAmount += Math.abs(step);

          if (scrollAmount >= distance) {
            clearInterval(slideTimer);
          }
        }, speed);
      }
    },
    [speed, distance],
  );

  return { elementRef, handleHorizontalScroll, isOverflowing };
};

export default useHorizontalScroll;
