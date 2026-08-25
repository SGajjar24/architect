import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        // Instant scroll to top when changing routes (no hash)
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };

    // Use requestAnimationFrame for better synchronization with React's render cycle
    requestAnimationFrame(() => {
      handleScroll();
      // Retry once for dynamic content or heavy loads
      setTimeout(handleScroll, 300);
    });

  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;