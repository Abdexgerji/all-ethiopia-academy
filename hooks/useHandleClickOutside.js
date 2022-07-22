import { useEffect } from 'react';

const useHandleClickOutside = (element, setFunc) => {
  useEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const handleClick = (e) => {
    if (element.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    // ... do whatever on click outside here ...
    setFunc(false);
  };
};

export default useHandleClickOutside;
