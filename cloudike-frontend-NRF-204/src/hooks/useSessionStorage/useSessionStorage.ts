import { useEffect, useState } from 'react';

type UseSessionStorage = (key: string, initialValue?: string) => [string, (val: string) => void];
const useSessionStorage: UseSessionStorage = (key, initialValue = '') => {
  const [value, setValue] = useState(() => {
    return sessionStorage.getItem(key) || initialValue;
  });
  useEffect(() => {
    sessionStorage.setItem(key, value);
  }, [value]);

  return [value, setValue];
};
export default useSessionStorage;
