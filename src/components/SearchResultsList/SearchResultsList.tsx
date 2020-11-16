import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { BookInfo } from '../../typings/BookInfo';

export const SearchResultsList: FC<SearchResultsListProps> = ({
  searchResults,
  isLoading,
}) => (
  <div className="columns is-multiline">
    {isLoading && <h1>Loading...</h1>}

    {searchResults.map((book) => (
      <div
        key={book.id}
        className="column is-half-tablet is-one-third-widescreen"
      >
        <Link className="box is-radiusless" to={`/book/${book.id}`}>
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
                    dangerouslySetInnerHTML={{ __html: book.title }}
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
);

interface SearchResultsListProps {
  searchResults: BookInfo[];
  isLoading: boolean;
}
