import { useEffect } from 'react';

export const useOnScroll = (func: () => void) =>
  useEffect(() => {
    const handleScrollOrBlur = () => {
      func();
    };
    document.addEventListener('scroll', handleScrollOrBlur);

    return () => {
      document.removeEventListener('scroll', handleScrollOrBlur);
    };
  }, [func]);
