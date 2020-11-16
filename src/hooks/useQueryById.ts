import { useQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';
import { DocumentNode } from 'graphql';

export function useQueryById<T>(name: QueryType, query: DocumentNode) {
  const params = useParams<{ id?: string }>();
  const id = params && params.id ? parseInt(params.id, 10) : 0;

  const { loading, data, error } = useQuery<{ [k in typeof name]: T }>(query, {
    variables: { id },
  });

  if (error) console.log(error);

  return { loading, data };
}

type QueryType = 'author' | 'book';
