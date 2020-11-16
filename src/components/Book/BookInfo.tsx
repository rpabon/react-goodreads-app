import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { BookResultsAPI } from '../../typings/BookResultsAPI';
import css from './Book.module.css';

export const BookInfo: FC<BookResultsAPI> = ({
  book,
  isLoadingBookResults,
}) => (
  <div className="px-4">
    {isLoadingBookResults && <h1>Loading...</h1>}

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
);
