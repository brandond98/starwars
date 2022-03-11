import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import FilmCard from '../../components/filmCard';
import Quote from '../../components/quote';
import { SingleCharacterQuery } from '../../graphql/Characters';
import { Film } from '../../types/singleCharacterObj';

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
      <Quote />
      <h2>Films:</h2>
      <div className="films">
        {character.filmConnection.films.map((film: Film) => (
          <FilmCard film={film} />
        ))}
      </div>
    </section>
  );
};

export default CharacterInfo;
