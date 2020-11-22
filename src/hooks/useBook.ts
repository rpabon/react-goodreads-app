import { gql } from 'apollo-boost';
import { Book } from '../typings/Book';
import { BookResultsAPI } from '../typings/BookResultsAPI';
import { useQueryById } from './useQueryById';
// import book from '../mocks/book';

const BOOK_QUERY = gql`
  query BookQuery($id: Int) {
    book(id: $id) {
      title
      year
      image_url
      rating
      author
      author_id
      author_image_url
      description
      similar_books {
        id
        title
        image_url
        year
      }
    }
  }
`;

export function useBook(): BookResultsAPI {
  const { loading, data } = useQueryById<Book>('book', BOOK_QUERY);

  return {
    isLoadingBookResults: loading,
    book: (data && data.book) || ({} as Book),
    // isLoadingBookResults: false,
    // book: book as Book,
  };
}
