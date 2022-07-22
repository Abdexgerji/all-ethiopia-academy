import { useEffect } from 'react';

const useCloseWhenClickOutside = (element, closeFunc) => {
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
    // to close the element(make it disapper)
    closeFunc();
  };
};

export default useCloseWhenClickOutside;
