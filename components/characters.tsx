import Link from 'next/link';
import { CharacterObj } from '../types/characterObj';

type CharactersProps = {
  characters: CharacterObj[];
};

const Characters = ({ characters }: CharactersProps) => {
  return (
    <table className="character-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Hair Colour</th>
          <th>Skin Colour</th>
          <th>Eye Colour</th>
          <th>Gender</th>
          <th>Homeworld</th>
        </tr>
      </thead>
      <tbody>
        {characters.map((character: CharacterObj) => (
          <tr key={character.id}>
            <td>
              <Link href={`characters/${character.id}`} passHref>
                <a>{character.name}</a>
              </Link>
            </td>
            <td>{character.hairColor}</td>
            <td>{character.skinColor}</td>
            <td>{character.eyeColor}</td>
            <td>{character.gender}</td>
            <td>{character.homeworld.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Characters;
