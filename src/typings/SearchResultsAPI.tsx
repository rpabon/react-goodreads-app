import { BookInfo } from './BookInfo';

export interface SearchResultsAPI {
  searchResults: BookInfo[];
  isLoadingSearchResults: boolean;
  getSearchResults(q: string): void;
}
