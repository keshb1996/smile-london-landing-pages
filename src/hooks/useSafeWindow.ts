import { useEffect, useState } from 'react';

// Safe window access hook with error handling
export const useSafeWindow = () => {
  const [windowAvailable, setWindowAvailable] = useState(false);

  useEffect(() => {
    setWindowAvailable(typeof window !== 'undefined');
  }, []);

  const safeWindowAccess = {
    scrollTo: (x: number, y: number) => {
      if (windowAvailable && window.scrollTo) {
        try {
          window.scrollTo(x, y);
        } catch (error) {
          console.warn('Failed to scroll window:', error);
        }
      }
    },
    
    getLocation: () => {
      if (windowAvailable && window.location) {
        try {
          return {
            pathname: window.location.pathname,
            search: window.location.search,
            href: window.location.href
          };
        } catch (error) {
          console.warn('Failed to access window.location:', error);
          return { pathname: '/', search: '', href: '' };
        }
      }
      return { pathname: '/', search: '', href: '' };
    },
    
    addEventListener: (event: string, handler: EventListener) => {
      if (windowAvailable && window.addEventListener) {
        try {
          window.addEventListener(event, handler);
          return () => window.removeEventListener(event, handler);
        } catch (error) {
          console.warn('Failed to add window event listener:', error);
          return () => {};
        }
      }
      return () => {};
    },
    
    matchMedia: (query: string): MediaQueryList | null => {
      if (windowAvailable && window.matchMedia) {
        try {
          return window.matchMedia(query);
        } catch (error) {
          console.warn('Failed to access matchMedia:', error);
          return null;
        }
      }
      return null;
    },
    
    getInnerWidth: () => {
      if (windowAvailable && typeof window.innerWidth === 'number') {
        try {
          return window.innerWidth;
        } catch (error) {
          console.warn('Failed to access window.innerWidth:', error);
          return 1024; // Default fallback
        }
      }
      return 1024; // Default fallback
    }
  };

  return { windowAvailable, ...safeWindowAccess };
};