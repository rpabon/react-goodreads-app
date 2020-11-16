import React, { FC, Fragment } from 'react';
import { useBook } from './useBook';
import { SearchResultsAPI } from '../../typings/SearchResultsAPI';
import { Header } from '../Header/Header';
import { BookInfo } from './BookInfo';

export const Book: FC<BookProps> = ({ getSearchResults }) => {
  const bookAPI = useBook();

  return (
    <Fragment>
      <Header onTermChange={getSearchResults} />
      <div className="container py-5">
        <BookInfo {...bookAPI} />
      </div>
    </Fragment>
  );
};

interface BookProps {
  getSearchResults: SearchResultsAPI['getSearchResults'];
}
