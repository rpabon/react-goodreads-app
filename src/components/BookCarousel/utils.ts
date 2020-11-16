import { CSSProperties } from 'react';
import { getBooksWithPhoto } from '../../utils/getBooksWithPhoto';
import { Book } from '../../typings/Book';

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

export function getBookTitle(book: Book): string {
  const title = book.title.replace(/ *\([^)]*\) */g, '');
  const maxChar = 22;

  return title.length >= maxChar ? `${title.slice(0, maxChar)}...` : title;
}
