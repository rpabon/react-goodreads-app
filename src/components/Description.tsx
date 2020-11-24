import React from 'react';
import { Typography } from 'antd';
import ReactHtmlParser from 'react-html-parser';

export function Description({ text, className }: DescriptionProps) {
  return (
    <Typography.Paragraph
      className={className}
      ellipsis={{ rows: 4, expandable: true, symbol: 'more' }}
    >
      {ReactHtmlParser(text)}
    </Typography.Paragraph>
  );
}

interface DescriptionProps {
  text: string;
  className?: string;
}
