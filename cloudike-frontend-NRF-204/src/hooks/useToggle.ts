import React from 'react';

type UseToggle = (initialValue: boolean) => [boolean, (newValue: boolean | undefined) => void];

const useToggle: UseToggle = (initialValue = false) => {
  const [value, setValue] = React.useState(initialValue);

  const toggle = React.useCallback((newValue) => {
    setValue((v) => newValue || !v);
  }, []);

  return [value, toggle];
};

export { useToggle };
