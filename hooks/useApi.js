import useSWR from 'swr';
import { fetcher, baseUrl } from '../lib/Fetcher';

export default function useApi(parameter) {
  const { data, error } = useSWR(`${baseUrl}${parameter}`, fetcher);
  return {
    data: data,
    isLoading: !data && !error,
    isError: error,
  };
}
