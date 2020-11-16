import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';
import { Book } from '../../typings/Book';
import { BookResultsAPI } from '../../typings/BookResultsAPI';

const BOOK_QUERY = gql`
  query BookQuery($id: Int) {
    book(id: $id) {
      title
      image_url
      rating
      author
      author_id
      author_image_url
      description
    }
  }
`;

export function useBook(): BookResultsAPI {
  const params = useParams<{ id?: string }>();
  const id = params && params.id ? parseInt(params.id, 10) : 0;

  const { loading, data, error } = useQuery<{ book: Book }>(BOOK_QUERY, {
    variables: { id },
  });

  if (error) console.log(error);

  return {
    isLoadingBookResults: loading,
    book: (data && data.book) || ({} as Book),
  };
}
