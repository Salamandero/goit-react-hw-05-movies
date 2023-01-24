import { useState, useEffect, useRef } from 'react';

export const useDebounce = (query, debounceTime) => {
  const [debounceQuery, setDebounceQuery] = useState(query);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setDebounceQuery(query);
    }, debounceTime);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [query, debounceTime]);
  return debounceQuery;
};
