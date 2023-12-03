import throttle from 'lodash/throttle'
import { useEffect, useState } from 'react';

export function useViewportWidth<T>(
  getValue: (width: number) => T,
  defaultValue: T,
): T {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const handleResize = throttle(() => {
      setValue(getValue(window.innerWidth));
    }, 100);

    handleResize();
    handleResize.flush();

    window.addEventListener('resize', handleResize);

    return (): void => {
      handleResize.cancel();

      window.removeEventListener('resize', handleResize);
    };
  }, [getValue]);

  return value;
}
