import React, { Fragment } from 'react';
import { Avatar, Rate, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { Book as IBook } from '../typings/Book';
import { useBook } from '../hooks/useBook';
import { LoadingOverlay } from './LoadingOverlay';
import { DetailsPageTemplate } from './DetailsPageTemplate';
import css from '../styles/DetailsPageTemplate.module.css';

export function Book() {
  const { book, isLoadingBookResults } = useBook();

  if (isLoadingBookResults) {
    return <LoadingOverlay />;
  }

  return (
    <DetailsPageTemplate
      title={book.title}
      image_url={book.image_url}
      description={book.description}
      subtitleBlock={<SubtitleInfo {...book} />}
      bookList={book.similar_books}
      bookListLabel={`Similar to ${book.title}`}
    />
  );
}

function SubtitleInfo(book: IBook) {
  return (
    <Fragment>
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
    </Fragment>
  );
}
