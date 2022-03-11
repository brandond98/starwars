import { useQuery } from '@apollo/client';
import characterQuery from '../graphql/CharacterQuery';
import { CharacterObj } from '../types/characterObj';

const Characters = () => {
  const { data, loading, error } = useQuery(characterQuery);

  if (loading) return <h2>Loading...</h2>;
  if (error) throw new Error(`${error}`);

  const characters = data.allPeople.people;

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Hair Colour</th>
        <th>Skin Colour</th>
        <th>Eye Colour</th>
        <th>Gender</th>
        <th>Homeworld</th>
      </tr>
      {characters.map((character: CharacterObj) => (
        <tr>
          <td>{character.name}</td>
          <td>{character.hairColor}</td>
          <td>{character.skinColor}</td>
          <td>{character.eyeColor}</td>
          <td>{character.gender}</td>
          <td>{character.homeworld.name}</td>
        </tr>
      ))}
    </table>
  );
};

export default Characters;
