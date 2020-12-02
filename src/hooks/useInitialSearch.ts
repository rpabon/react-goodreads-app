import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DEFAULT_TERM = 'tolkien';

export function useInitialSearch(
  inputValue: string,
  search: (q: string) => void
) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/' && !inputValue) {
      search(DEFAULT_TERM);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, inputValue]);
}
