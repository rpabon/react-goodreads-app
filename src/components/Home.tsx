import React from 'react';
import { Card, Col, Image, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { SearchResultsAPI } from '../typings/SearchResultsAPI';
import { getBooksWithPhoto } from '../utils/book-utils';
import { LoadingOverlay } from './LoadingOverlay';
import css from '../styles/Home.module.css';

export function Home({ searchResults, isLoadingSearchResults }: HomeProps) {
  const books = getBooksWithPhoto(searchResults);

  if (isLoadingSearchResults) {
    return <LoadingOverlay />;
  }

  return (
    <Row gutter={16}>
      {books.map((book) => (
        <Col xs={24} md={12} xl={8} key={book.id}>
          <Link to={`/book/${book.id}`}>
            <Card className={css.card} hoverable>
              <div className={css['card-body']}>
                <Image
                  src={book.image_url}
                  alt={book.title}
                  className={css.image}
                />

                <div>
                  <Typography.Title
                    level={4}
                    ellipsis={{ rows: 2 }}
                    title={book.title}
                  >
                    <span dangerouslySetInnerHTML={{ __html: book.title }} />
                  </Typography.Title>
                  <Typography.Paragraph>
                    {book.author}
                    <br />
                    {book.year}
                  </Typography.Paragraph>
                </div>
              </div>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
}

interface HomeProps extends Omit<SearchResultsAPI, 'getSearchResults'> {}
