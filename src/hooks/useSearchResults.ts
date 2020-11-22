import { useEffect } from 'react';
import { useLazyQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import { BookInfo } from '../typings/BookInfo';
import { SearchResultsAPI } from '../typings/SearchResultsAPI';

const DEFAULT_Q = 'tolkien';

const SEARCH_TERM_QUERY = gql`
  query SearchTermQuery($q: String) {
    search(q: $q) {
      id
      title
      author
      year
      image_url
      small_image_url
    }
  }
`;

export function useSearchResults(): SearchResultsAPI {
  const [getResults, { loading, data }] = useLazyQuery<{
    search: BookInfo[];
  }>(SEARCH_TERM_QUERY);
  const searchResults = (data && data.search) || [];

  function getSearchResults(q: string) {
    getResults({ variables: { q } });
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => void getSearchResults(DEFAULT_Q), []);

  return {
    searchResults,
    getSearchResults,
    isLoadingSearchResults: loading,
  };
}
