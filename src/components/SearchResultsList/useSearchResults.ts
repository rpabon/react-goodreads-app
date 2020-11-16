import { gql } from 'apollo-boost';
import { useEffect } from 'react';
import { useLazyQuery } from 'react-apollo';
import { BookInfo } from '../../typings/BookInfo';

const DEFAULT_Q = 'tolkien';

const SEARCH_TERM_QUERY = gql`
  query SearchTermQuery($q: String) {
    search(q: $q) {
      id
      title
      author
      year
      url_small
    }
  }
`;

export function useSearchResults() {
  const [getResults, { loading, data }] = useLazyQuery<{
    search: BookInfo[];
  }>(SEARCH_TERM_QUERY);
  const searchResults = (data && data.search) || [];

  function getSearchResults(q: string) {
    getResults({ variables: { q } });
  }

  useEffect(() => void getSearchResults(DEFAULT_Q), []);

  return {
    searchResults,
    getSearchResults,
    isLoadingSearchResults: loading,
  };
}
