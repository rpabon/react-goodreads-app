import { CSSProperties } from 'react';
import { Book } from '../typings/Book';
import { BookInfo } from '../typings/BookInfo';

export function getBooksWithPhoto<T extends Book | BookInfo>(
  books: T[] = []
): T[] {
  return books.filter((book) => !book.image_url.includes('nophoto'));
}

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

export function getBookTitle(book: Book | BookInfo): string {
  return book.title.replace(/ *\([^)]*\) */g, '');
}
