import React, { Fragment } from 'react';
import { Card, Image, Typography } from 'antd';
import { Book } from '../typings/Book';
import { Description } from './Description';
import { BookCarousel } from './BookCarousel';
import css from '../styles/DetailsPageTemplate.module.css';

export function DetailsPageTemplate(props: DetailsPageTemplateProps) {
  return (
    <Fragment>
      <Card>
        <div className={css.body}>
          <Image
            className={css.image}
            src={props.image_url}
            alt={props.title}
          />

          <div className={css.info}>
            <Typography.Title level={2} className={css.title}>
              <span dangerouslySetInnerHTML={{ __html: props.title }} />
            </Typography.Title>
          </div>
        </div>

        <Description className={css.description} text={props.description} />
      </Card>

      {props.bookList && props.bookList.length > 0 && (
        <BookCarousel books={props.bookList} label={props.bookListLabel} />
      )}
    </Fragment>
  );
}

interface DetailsPageTemplateProps {
  title: string;
  subtitleBlock?: JSX.Element;
  image_url: string;
  description: string;
  bookList?: Book[];
  bookListLabel?: string;
}
