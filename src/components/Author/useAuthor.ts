import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';
import { Author } from '../../typings/Author';
import { AuthorResultsAPI } from '../../typings/AuthorResultsAPI';

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
  const params = useParams<{ id?: string }>();
  const id = params && params.id ? parseInt(params.id, 10) : 0;

  const { loading, data, error } = useQuery<{ author: Author }>(AUTHOR_QUERY, {
    variables: { id },
  });

  if (error) console.log(error);

  return {
    isLoadingAuthorResults: loading,
    author: (data && data.author) || ({} as Author),
  };
}
