import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    // Safe window access with error handling
    if (typeof window === 'undefined') return;
    
    try {
      const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
      if (!mql) {
        setIsMobile(false);
        return;
      }
      
      const onChange = () => {
        try {
          setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        } catch (error) {
          console.warn('Failed to access window.innerWidth:', error);
        }
      };
      
      mql.addEventListener("change", onChange);
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
      
      return () => {
        try {
          mql.removeEventListener("change", onChange);
        } catch (error) {
          console.warn('Failed to remove event listener:', error);
        }
      };
    } catch (error) {
      console.warn('Failed to set up mobile detection:', error);
      setIsMobile(false); // Default fallback
    }
  }, []);

  return !!isMobile;
}
