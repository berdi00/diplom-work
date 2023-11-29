import { useCallback, useEffect, useState } from "react";

export const useAsync = (func, dependencies = []) => {
  const { execute, ...state } = useAsyncInternal(func, dependencies);

  useEffect(() => {
    execute();
  }, [execute]);

  return state;
};

export const useAsyncFn = (func, dependencies = []) =>
  useAsyncInternal(func, dependencies, false);

function useAsyncInternal(func, dependencies, initialLoading = false) {
  const [value, setValue] = useState();
  const [isLoading, setIsLoading] = useState(initialLoading);
  const [error, setError] = useState();

  const execute = useCallback((...params) => {
    return func(...params)
      .then((data) => {
        setValue(data);
        setIsLoading(false);
        setError(undefined);
        return data;
      })
      .catch((error) => {
        setValue(undefined);
        setError(error);
        return Promise.reject(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, dependencies);
  return { isLoading, error, value, execute };
}
