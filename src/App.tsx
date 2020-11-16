import React, { Fragment } from 'react';
import { Header } from './components/Header/Header';
import { SearchResultsList } from './components/SearchResultsList/SearchResultsList';
import { useSearchResults } from './components/SearchResultsList/useSearchResults';
import 'bulma/css/bulma.css';
import './App.css';

function App() {
  const {
    searchResults,
    isLoadingSearchResults,
    getSearchResults,
  } = useSearchResults();

  return (
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
}

export default App;
