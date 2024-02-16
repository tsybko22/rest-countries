import { useEffect, useState } from 'react';

interface State<T> {
  data: T | null | undefined;
  isLoading: boolean;
  error: Error | null;
}

export const useFetch = <T>(
  fetchFunction: (url?: string) => Promise<T>,
  url?: string
): State<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await fetchFunction(url);

        setData(result);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchData();
  }, [fetchFunction, url]);

  return { data, isLoading, error };
};
