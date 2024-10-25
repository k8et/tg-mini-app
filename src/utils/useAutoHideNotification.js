import { useEffect, useRef } from "react";

const useAutoHideNotification = (isVisible, setIsVisible, delay) => {
  const ref = useRef();

  useEffect(() => {
    let timer;
    if (isVisible) {
      timer = setTimeout(() => {
        setIsVisible(false);
      }, delay);
    }

    return () => clearTimeout(timer);
  }, [isVisible, setIsVisible, delay]);

  return ref;
};

export default useAutoHideNotification;
