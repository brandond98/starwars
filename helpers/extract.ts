import { CharacterObj } from '../types/characterObj';

const extract = (arr: CharacterObj[], property: string) => {
  if (property === 'homeworld')
    return [...new Set(arr.map((character) => character.homeworld.name))];
  return [...new Set(arr.map((character) => character[property]))];
};

export default extract;
