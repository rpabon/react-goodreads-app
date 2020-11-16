import { CSSProperties } from 'react';
import { getBooksWithPhoto } from './getBooksWithPhoto';
import { Book } from '../typings/Book';
import { BookInfo } from '../typings/BookInfo';

const BOOK_WIDTH = 125;

export function getWrapperWidth(books: Book[]): CSSProperties {
  return {
    width: `${getBooksWithPhoto(books).length * BOOK_WIDTH}px`,
    minWidth: '100%',
  };
}

export function getBookWidth(): CSSProperties {
  return {
    width: `${BOOK_WIDTH}px`,
  };
}

export function getBookTitle(book: Book | BookInfo, maxChars = 22): string {
  const title = book.title.replace(/ *\([^)]*\) */g, '');

  return title.length >= maxChars ? `${title.slice(0, maxChars)}...` : title;
}
