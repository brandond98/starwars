import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { SingleCharacterQuery } from '../../graphql/Characters';

const CharacterInfo = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading, error } = useQuery(SingleCharacterQuery, {
    variables: { personId: id },
  });

  if (loading) return <h2>Loading...</h2>;
  if (error) throw new Error(`${error}`);

  const character = data.person;
  return (
    <section>
      <h1>{character.name}</h1>
    </section>
  );
};

export default CharacterInfo;
