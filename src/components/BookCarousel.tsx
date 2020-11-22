import React from 'react';
import { Image, Typography } from 'antd';
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
      {label && <Typography.Title level={4}>{label}:</Typography.Title>}

      <div className={css.wrapper}>
        <div className={css['wrapper-inner']} style={getWrapperWidth(books)}>
          {getBooksWithPhoto(books).map((book) => (
            <Link to={`/book/${book.id}`} style={getBookWidth()}>
              <Image
                src={book.image_url}
                alt={book.title}
                className={css.book}
              />
              <Typography.Paragraph
                className={css.title}
                ellipsis={{ rows: 2 }}
                title={book.title}
              >
                <strong
                  dangerouslySetInnerHTML={{ __html: getBookTitle(book) }}
                />
              </Typography.Paragraph>
              {book.year > 0 && (
                <Typography.Paragraph>{book.year}</Typography.Paragraph>
              )}
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
