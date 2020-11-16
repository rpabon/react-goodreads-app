import React, { FC, Fragment } from 'react';
import { SearchResultsAPI } from '../../typings/SearchResultsAPI';
import { Header } from '../Header/Header';
import { SearchResultsList } from '../SearchResultsList/SearchResultsList';

export const Home: FC<SearchResultsAPI> = ({
  searchResults,
  getSearchResults,
  isLoadingSearchResults,
}) => (
  <Fragment>
    <Header onTermChange={getSearchResults} />
    <div className="container py-5">
      <SearchResultsList
        searchResults={searchResults}
        isLoading={isLoadingSearchResults}
      />
    </div>
  </Fragment>
);
