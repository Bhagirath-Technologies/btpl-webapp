import { useEffect } from 'react';

/**
 * Custom hook to trigger a popup after a specified delay
 * Uses localStorage to avoid showing the popup repeatedly within a cooldown period
 * 
 * @param {function} callback - Function to call when timer triggers
 * @param {number} delayMs - Delay in milliseconds before showing popup (default: 30000 = 30 seconds)
 * @param {number} cooldownHours - Hours to wait before showing popup again to same user (default: 24)
 */
const useTimedPopup = (callback, delayMs = 30000, cooldownHours = 24) => {
  useEffect(() => {
    const storageKey = 'lastTimedPopupShow';
    const now = Date.now();
    const lastShown = localStorage.getItem(storageKey);
    const cooldownMs = cooldownHours * 60 * 60 * 1000;

    // Check if enough time has passed since last popup
    if (!lastShown || (now - parseInt(lastShown)) > cooldownMs) {
      const timer = setTimeout(() => {
        callback();
        localStorage.setItem(storageKey, now.toString());
      }, delayMs);

      return () => clearTimeout(timer);
    }
  }, [callback, delayMs, cooldownHours]);
};

export default useTimedPopup;
