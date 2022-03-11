import { gql } from '@apollo/client';

export const AllCharactersQuery = gql`
  query AllCharactersQuery {
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

export const SingleCharacterQuery = gql`
  query SingleCharacterQuery($personId: ID) {
    person(id: $personId) {
      name
      filmConnection {
        films {
          title
          episodeID
          director
          producers
          releaseDate
        }
      }
    }
  }
`;
