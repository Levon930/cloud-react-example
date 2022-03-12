import { useEffect, useState } from 'react';

const useWindowLocation = () => {
  const [domain, setDomain] = useState('');
  const [hash, setHash] = useState('');

  const hashHandler = (publicLink: string) => {
    setHash(publicLink);
  };
  useEffect(() => {
    if (hash) {
      setDomain(`${window.location.origin}/${hash}`);
    }
  }, [hash]);

  return { domain, hashHandler };
};

export default useWindowLocation;
