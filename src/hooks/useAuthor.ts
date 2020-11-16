import { gql } from 'apollo-boost';
import { Author } from '../typings/Author';
import { AuthorResultsAPI } from '../typings/AuthorResultsAPI';
import { useQueryById } from './useQueryById';

const AUTHOR_QUERY = gql`
  query AuthorQuery($id: Int) {
    author(id: $id) {
      name
      image_url
      hometown
      born_at
      died_at
      about
      books {
        id
        title
        image_url
        year
      }
    }
  }
`;

export function useAuthor(): AuthorResultsAPI {
  const { loading, data } = useQueryById<Author>('author', AUTHOR_QUERY);

  return {
    isLoadingAuthorResults: loading,
    author: (data && data.author) || {} as Author,
  };
}
