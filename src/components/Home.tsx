import React, { Fragment } from 'react';
import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { SearchResultsAPI } from '../typings/SearchResultsAPI';
import { getBooksWithPhoto } from '../utils/book-utils';
import { LoadingOverlay } from './LoadingOverlay';

export function Home({ searchResults, isLoadingSearchResults }: HomeProps) {
  const books = getBooksWithPhoto(searchResults);

  if (isLoadingSearchResults) {
    return <LoadingOverlay />;
  }

  return (
    <Row gutter={16}>
      {books.map((book) => (
        <Col xs={12} md={8} lg={6} xl={4} key={book.id}>
          <Link to={`/book/${book.id}`}>
            <Card
              hoverable
              cover={<img src={book.image_url} alt={book.title} />}
            >
              <Card.Meta
                title={
                  <span dangerouslySetInnerHTML={{ __html: book.title }} />
                }
                description={
                  <Fragment>
                    {book.author}
                    <br />
                    {book.year}
                  </Fragment>
                }
              />
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
}

interface HomeProps extends Omit<SearchResultsAPI, 'getSearchResults'> {}
