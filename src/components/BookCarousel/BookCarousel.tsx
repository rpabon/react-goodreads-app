import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../../typings/Book';
import { getBooksWithPhoto } from '../../utils/getBooksWithPhoto';
import { getWrapperWidth, getBookWidth, getBookTitle } from './utils';
import css from './BookCarousel.module.css';

export function BookCarousel({ books, label }: BookCarouselProps) {
  if (!books || !books.length) return null;

  return (
    <div className={`${css.wrapper} box`}>
      {label && <h3 className="title is-5 mb-3">{label}:</h3>}

      <div className="is-flex" style={getWrapperWidth(books)}>
        {getBooksWithPhoto(books).map((book) => (
          <Link to={`/book/${book.id}`} style={getBookWidth()} className="pr-3">
            <figure
              className={`${css['book-image']} has-background-grey-lighter`}
            >
              <img src={book.image_url} alt={book.title} />
            </figure>
            <p className="subtitle is-6 my-2" title={book.title}>
              {getBookTitle(book)}
            </p>
            <p className="subtitle is-7">{book.year}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

interface BookCarouselProps {
  books?: Book[];
  label?: string;
}
