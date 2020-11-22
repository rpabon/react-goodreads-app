import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import { Book } from '../typings/Book';
import {
  getBooksWithPhoto,
  getWrapperWidth,
  getBookWidth,
  getBookTitle,
} from '../utils/book-utils';
import css from '../styles/BookCarousel.module.css';

export function BookCarousel({ books, label }: BookCarouselProps) {
  if (!books || !books.length) return null;

  return (
    <div className={css.container}>
      {label && <h3>{label}:</h3>}

      <div className={css.wrapper}>
        <div className={css['wrapper-inner']} style={getWrapperWidth(books)}>
          {getBooksWithPhoto(books).map((book) => (
            <Link to={`/book/${book.id}`} style={getBookWidth()}>
              <Image
                src={book.image_url}
                alt={book.title}
                className={css.book}
              />
              <p>
                <span
                  title={book.title}
                  dangerouslySetInnerHTML={{ __html: getBookTitle(book) }}
                />
                <br />
                <span>{book.year}</span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

interface BookCarouselProps {
  books?: Book[];
  label?: string;
}
