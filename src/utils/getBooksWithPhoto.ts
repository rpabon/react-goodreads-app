import { Book } from '../typings/Book';

export function getBooksWithPhoto(books: Book[] = []): Book[] {
  return books.filter((book) => !book.image_url.includes('nophoto'));
}
