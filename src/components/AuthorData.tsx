import React, { Fragment } from 'react';
import { Typography } from 'antd';
import { Author } from '../typings/Author';

export function AuthorData({ hometown, born_at, died_at }: Author) {
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
