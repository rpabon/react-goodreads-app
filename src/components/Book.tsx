import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Card, Avatar, Row, Col, Image, Typography, Rate } from 'antd';
import { useBook } from '../hooks/useBook';
import { BookCarousel } from './BookCarousel';
// import { LoadingOverlay } from './LoadingOverlay';
import css from '../styles/Book.module.css';

export function Book() {
  const { book, isLoadingBookResults } = useBook();

  return (
    <Fragment>
      <Card>
        <Row gutter={16}>
          <Col xs={24} sm={7}>
            <Image width={200} src={book.image_url} alt={book.title} />
          </Col>
          <Col xs={24} sm={17}>
            <h1 dangerouslySetInnerHTML={{ __html: book.title }} />
            <p>{book.year}</p>
            <Link to={`/author/${book.author_id}`}>
              <Avatar size={64} src={book.author_image_url} alt={book.author} />
              <p>{book.author}</p>
            </Link>
            <Rate value={book.rating} allowHalf disabled /> ({book.rating})
          </Col>
        </Row>
        <p dangerouslySetInnerHTML={{ __html: book.description }} />
      </Card>

      <BookCarousel books={book.similar_books} label="Similar Books" />
    </Fragment>
  );
}
