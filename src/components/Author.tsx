import React, { Fragment } from 'react';
import { Card, Image, Typography } from 'antd';
import { useAuthor } from '../hooks/useAuthor';
import { BookCarousel } from './BookCarousel';
import { AuthorData } from './AuthorData';
import { LoadingOverlay } from './LoadingOverlay';
import css from '../styles/Book.module.css';

function getLabel(name: string) {
  const suffix = name[name.length - 1] === 's' ? "'" : "'s";

  return `${name}${suffix} Books`;
}

export function Author() {
  const { author, isLoadingAuthorResults } = useAuthor();

  if (isLoadingAuthorResults) {
    return <LoadingOverlay />;
  }

  return (
    <Fragment>
      <Card>
        <div className={css.body}>
          <Image
            className={css.image}
            src={author.image_url}
            alt={author.name}
          />
          <div className={css.info}>
            <Typography.Title level={2} className={css.title}>
              <span dangerouslySetInnerHTML={{ __html: author.name }} />
            </Typography.Title>
            <AuthorData {...author} />
          </div>
        </div>

        <Typography.Paragraph className={css.description}>
          <span dangerouslySetInnerHTML={{ __html: author.about }} />
        </Typography.Paragraph>
      </Card>

      <BookCarousel books={author.books} label={getLabel(author.name)} />
    </Fragment>
  );
}
