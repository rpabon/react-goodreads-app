import React, { Fragment } from 'react';
import { useAuthor } from '../hooks/useAuthor';
import { BookCarousel } from './BookCarousel';
import { LoadingOverlay } from './LoadingOverlay';

export function Author() {
  const { author, isLoadingAuthorResults } = useAuthor();

  return (
    <Fragment>
      <LoadingOverlay loading={isLoadingAuthorResults} />

      <div className="px-4">
        <div className="is-flex">
          <img src={author.image_url} alt={author.name} />

          <div className="ml-5">
            <h2
              className="title is-3 has-text-weight-bold"
              dangerouslySetInnerHTML={{ __html: author.name }}
            />
            <p className="subtitle is-5 mb-1">{author.hometown}</p>
            <p className="subtitle is-6">{author.born_at}</p>
            <p className="subtitle is-6">{author.died_at}</p>
          </div>
        </div>

        <div
          className="mt-5 is-size-5"
          dangerouslySetInnerHTML={{ __html: author.about }}
        />
      </div>

      <BookCarousel books={author.books} label="Books" />
    </Fragment>
  );
}
