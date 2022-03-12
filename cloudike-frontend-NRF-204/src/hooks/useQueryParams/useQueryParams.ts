import { useLocation } from 'react-router-dom';

type UseQueryParams = () => URLSearchParams;

const useQueryParams: UseQueryParams = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  return query;
};

export default useQueryParams;
