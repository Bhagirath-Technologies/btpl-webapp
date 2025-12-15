import { useEffect } from 'react';

/**
 * Hook to trigger a popup on mobile when user scrolls down a certain percentage
 * @param {function} callback - Function to call when scroll threshold is reached
 * @param {number} scrollPercentage - Scroll percentage to trigger (default: 30)
 * @param {boolean} isMobile - Whether to enable on mobile only (default: true)
 * @param {number} cooldownMs - Cooldown between triggers in milliseconds (default: 10000)
 */
const useScrollTriggerPopup = (callback, scrollPercentage = 30, isMobile = true, cooldownMs = 10000) => {
  useEffect(() => {
    let lastTriggered = 0;
    let hasTriggered = false;

    const handleScroll = () => {
      // Check if mobile
      if (isMobile && window.innerWidth >= 769) {
        return;
      }

      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      // Check if scroll threshold reached and cooldown passed
      if (scrollPercent >= scrollPercentage && !hasTriggered) {
        const now = Date.now();
        if (now - lastTriggered > cooldownMs) {
          hasTriggered = true;
          callback();
          lastTriggered = now;

          // Reset trigger after cooldown
          setTimeout(() => {
            hasTriggered = false;
          }, cooldownMs);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [callback, scrollPercentage, isMobile, cooldownMs]);
};

export default useScrollTriggerPopup;
