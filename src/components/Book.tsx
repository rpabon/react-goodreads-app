import React, { Fragment } from 'react';
import { Card, Avatar, Image, Rate, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useBook } from '../hooks/useBook';
import { BookCarousel } from './BookCarousel';
import { LoadingOverlay } from './LoadingOverlay';
import css from '../styles/Book.module.css';

export function Book() {
  const { book, isLoadingBookResults } = useBook();

  if (isLoadingBookResults) {
    return <LoadingOverlay />;
  }

  return (
    <Fragment>
      <Card>
        <div className={css.body}>
          <Image className={css.image} src={book.image_url} alt={book.title} />
          <div className={css.info}>
            <Typography.Title level={2} className={css.title}>
              <span dangerouslySetInnerHTML={{ __html: book.title }} />
            </Typography.Title>
            {book.year > 0 && (
              <Typography.Paragraph>{book.year}</Typography.Paragraph>
            )}
            <Link to={`/author/${book.author_id}`}>
              <Typography.Paragraph>
                <Avatar
                  size="large"
                  src={book.author_image_url}
                  alt={book.author}
                  className={css.avatar}
                />
                {book.author}
              </Typography.Paragraph>
            </Link>
            <Rate value={book.rating} allowHalf disabled /> ({book.rating})
          </div>
        </div>

        <Typography.Paragraph className={css.description}>
          <span dangerouslySetInnerHTML={{ __html: book.description }} />
        </Typography.Paragraph>
      </Card>

      <BookCarousel
        books={book.similar_books}
        label={`Similar to ${book.title}`}
      />
    </Fragment>
  );
}
