import { gql } from '@apollo/client';

const CharacterQuery = gql`
  query CharacterQuery {
    allPeople {
      people {
        id
        name
        hairColor
        skinColor
        eyeColor
        gender
        homeworld {
          name
        }
      }
    }
  }
`;

export default CharacterQuery;
