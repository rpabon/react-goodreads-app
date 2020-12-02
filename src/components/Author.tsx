import React, { Fragment } from 'react';
import { Typography } from 'antd';
import { Author as IAuthor } from '../typings/Author';
import { useAuthor } from '../hooks/useAuthor';
import { LoadingOverlay } from './LoadingOverlay';
import { DetailsPageTemplate } from './DetailsPageTemplate';

export function Author() {
  const { author, isLoadingAuthorResults } = useAuthor();

  if (isLoadingAuthorResults) {
    return <LoadingOverlay />;
  }

  return (
    <DetailsPageTemplate
      title={author.name}
      image_url={author.image_url}
      description={author.about}
      bookList={author.books}
      subtitleBlock={<AuthorData {...author} />}
      bookListLabel={getLabel(author)}
    />
  );
}

function AuthorData({ hometown, born_at, died_at }: IAuthor) {
  return (
    <Typography.Paragraph>
      {(born_at || hometown) && 'Born '}
      {born_at && `on ${born_at} `}
      {hometown && `in ${hometown}.`}
      {died_at && (
        <Fragment>
          <br />
          Died on {died_at}.
        </Fragment>
      )}
    </Typography.Paragraph>
  );
}

function getLabel({ name }: IAuthor) {
  const suffix = name[name.length - 1] === 's' ? "'" : "'s";

  return `${name}${suffix} Books`;
}
