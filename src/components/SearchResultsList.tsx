import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { BookInfo } from '../typings/BookInfo';
import { LoadingOverlay } from './LoadingOverlay';
import { getBookTitle } from '../utils/book-utils';

export function SearchResultsList({
  searchResults,
  isLoading,
}: SearchResultsListProps) {
  return (
    <Fragment>
      <LoadingOverlay loading={isLoading} />

      <div className="columns is-multiline">
        {searchResults.map((book) => (
          <div
            key={book.id}
            className="column is-half-tablet is-one-third-widescreen"
          >
            <Link
              className="box is-radiusless"
              to={`/book/${book.id}`}
              title={book.title}
            >
              <article className="media">
                <div className="media-left">
                  <figure className="image">
                    <img src={book.url_small} alt={book.title} />
                  </figure>
                </div>

                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong
                        className="title is-5"
                        dangerouslySetInnerHTML={{
                          __html: getBookTitle(book, 35),
                        }}
                      />
                      <br />
                      <span>{book.author}</span>
                      <br />
                      <span>{book.year}</span>
                    </p>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

interface SearchResultsListProps {
  searchResults: BookInfo[];
  isLoading: boolean;
}
