import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useBook } from '../hooks/useBook';
import { BookCarousel } from './BookCarousel';
import { LoadingOverlay } from './LoadingOverlay';
import css from '../styles/Book.module.css';

export function Book() {
  const { book, isLoadingBookResults } = useBook();

  return (
    <Fragment>
      <LoadingOverlay loading={isLoadingBookResults} />

      <div className="px-4">
        <div className="is-flex">
          <img src={book.image_url} alt={book.title} />

          <div className="ml-5">
            <h2
              className="title is-3 has-text-weight-bold"
              dangerouslySetInnerHTML={{ __html: book.title }}
            />
            <p className="subtitle is-5 mb-1">{book.year}</p>
            <p className="subtitle is-6">{book.rating}</p>
          </div>
        </div>

        <Link
          className="is-flex is-align-items-center mt-5"
          to={`/author/${book.author_id}`}
        >
          <div
            style={{ backgroundImage: `url(${book.author_image_url})` }}
            className={`${css['author-image']} mr-4`}
          />
          <p className="subtitle is-5 has-text-weight-bold">{book.author}</p>
        </Link>

        <div
          className="mt-5 is-size-5"
          dangerouslySetInnerHTML={{ __html: book.description }}
        />
      </div>

      <BookCarousel books={book.similar_books} label="Similar Books" />
    </Fragment>
  );
}
