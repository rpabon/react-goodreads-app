import { Book } from './Book';

export interface BookResultsAPI {
  isLoadingBookResults: boolean;
  book: Book;
}
