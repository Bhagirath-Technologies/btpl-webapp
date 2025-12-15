import { useEffect } from 'react';

/**
 * Custom hook to detect when user is about to leave the page
 * Triggers callback when cursor moves to the top of the viewport
 * Includes cooldown to prevent repeated triggers
 */
export const useExitIntent = (callback, cooldownMs = 60000) => {
  useEffect(() => {
    let exitIntentTriggered = false;
    let cooldownActive = false;

    const handleMouseLeave = (e) => {
      // Only trigger if mouse Y position is at the very top (near 0)
      if (e.clientY <= 10 && !exitIntentTriggered && !cooldownActive) {
        exitIntentTriggered = true;
        cooldownActive = true;
        
        // Call the callback function
        if (typeof callback === 'function') {
          callback();
        }

        // Reset after some time to allow triggering again
        setTimeout(() => {
          cooldownActive = false;
        }, cooldownMs);

        // Reset the trigger flag after a short delay
        setTimeout(() => {
          exitIntentTriggered = false;
        }, 500);
      }
    };

    // Add listener to document
    document.addEventListener('mousemove', handleMouseLeave);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseLeave);
    };
  }, [callback, cooldownMs]);
};

export default useExitIntent;
