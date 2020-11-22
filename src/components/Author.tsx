import React, { Fragment } from 'react';
import { Card, Image, Row, Col } from 'antd';
import { useAuthor } from '../hooks/useAuthor';
import { BookCarousel } from './BookCarousel';
import { AuthorData } from './AuthorData';
// import { LoadingOverlay } from './LoadingOverlay';

export function Author() {
  const { author, isLoadingAuthorResults } = useAuthor();

  return (
    <Fragment>
      <Card>
        <Row gutter={16}>
          <Col xs={24} sm={7}>
            <Image src={author.image_url} alt={author.name} width={200} />
          </Col>
          <Col xs={24} sm={17}>
            <h2 dangerouslySetInnerHTML={{ __html: author.name }} />
            <AuthorData {...author} />
          </Col>
        </Row>

        <p dangerouslySetInnerHTML={{ __html: author.about }} />
      </Card>

      <BookCarousel books={author.books} label="Books" />
    </Fragment>
  );
}
