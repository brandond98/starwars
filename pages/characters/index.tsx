import { useState } from 'react';
import { useQuery } from '@apollo/client';
import Characters from '../../components/characters';
import Pagination from '../../components/pagination';
import { AllCharactersQuery } from '../../graphql/Characters';
import PerPageSelector from '../../components/selectors/perPageSelector';
import Quote from '../../components/quote';
import SortSelector from '../../components/selectors/sortSelector';
import extract from '../../helpers/extract';
import Filter from '../../components/filter';
import BreadCrumbs from '../../components/breadcrumbs';

const CharactersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [sort, setSort] = useState('');
  const [eyeColour, setEyeColour] = useState('');
  const [hairColour, setHairColour] = useState('');
  const [homeworld, setHomeworld] = useState('');

  const { data, loading, error } = useQuery(AllCharactersQuery);

  if (loading) return <h2>Loading...</h2>;
  if (error) throw new Error(`${error}`);

  const characters = data.allPeople.people;
  const sortedCharacters = [...characters]
    .sort((a, b) => {
      if (sort === 'homeworld') {
        return a.homeworld.name > b.homeworld.name ? 1 : -1;
      }
      return a[sort] > b[sort] ? 1 : -1;
    })
    .filter((character) => {
      if (eyeColour || hairColour || homeworld)
        return (
          character.eyeColor === eyeColour ||
          character.hairColor === hairColour ||
          character.homeworld.name === homeworld
        );
      return character;
    });

  const eyeColours = extract(characters, 'eyeColor');
  const hairColours = extract(characters, 'hairColor');
  const homeworlds = extract(characters, 'homeworld');

  const lastPostIdx = currentPage * perPage;
  const firstPostIdx = lastPostIdx - perPage;
  const currentCharacters = sortedCharacters.slice(firstPostIdx, lastPostIdx);

  const handlePageChange = (num: number) => setCurrentPage(num);
  const handlePerPageChange = (num: string) => setPerPage(parseInt(num, 10));
  const handleSortChange = (value: string) => setSort(value);
  const handleEyeColourChange = (value: string) => setEyeColour(value);
  const handleHairColourChange = (value: string) => setHairColour(value);
  const handleHomeworldChange = (value: string) => setHomeworld(value);

  return (
    <>
      <BreadCrumbs />
      <section>
        <h1>Characters</h1>
        <Quote />
        <div className="selectors">
          <PerPageSelector
            handleChange={handlePerPageChange}
            perPage={perPage}
          />
          <SortSelector handleChange={handleSortChange} value={sort} />
          <Filter
            options={eyeColours}
            handleChange={handleEyeColourChange}
            selected={eyeColour}
            placeholder="Eye Colour"
          />
          <Filter
            options={hairColours}
            handleChange={handleHairColourChange}
            selected={hairColour}
            placeholder="Hair Colour"
          />
          <Filter
            options={homeworlds}
            handleChange={handleHomeworldChange}
            selected={homeworld}
            placeholder="Homeworld"
          />
        </div>
        <Characters characters={currentCharacters} />
        <Pagination
          perPage={perPage}
          total={sortedCharacters.length}
          handlePageChange={handlePageChange}
        />
      </section>
    </>
  );
};

export default CharactersPage;
