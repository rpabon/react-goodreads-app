import React from 'react';
import { SearchResultsAPI } from '../typings/SearchResultsAPI';
import { SearchResultsList } from './SearchResultsList';

export function Home({
  searchResults,
  isLoadingSearchResults,
}: Omit<SearchResultsAPI, 'getSearchResults'>): JSX.Element {
  return (
    <SearchResultsList
      searchResults={searchResults}
      isLoading={isLoadingSearchResults}
    />
  );
}
