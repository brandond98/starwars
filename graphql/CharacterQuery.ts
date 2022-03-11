import { gql } from '@apollo/client';

const characterQuery = gql`
  query CharacterQuery {
    allPeople {
      people {
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

export default characterQuery;
