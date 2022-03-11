import { useState } from 'react';
import { useQuery } from '@apollo/client';
import Characters from '../../components/characters';
import Pagination from '../../components/pagination';
import { AllCharactersQuery } from '../../graphql/Characters';
import PerPageSelector from '../../components/selectors/perPageSelector';
import Quote from '../../components/quote';
import SortSelector from '../../components/selectors/sortSelector';
import { CharacterObj } from '../../types/characterObj';

const CharactersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [sort, setSort] = useState('');

  const { data, loading, error } = useQuery(AllCharactersQuery);

  if (loading) return <h2>Loading...</h2>;
  if (error) throw new Error(`${error}`);

  const characters = [...data.allPeople.people].sort((a, b) => {
    if (sort === 'homeworld') {
      return a.homeworld.name > b.homeworld.name ? 1 : -1;
    }
    return a[sort] > b[sort] ? 1 : -1;
  });
  const lastPostIdx = currentPage * perPage;
  const firstPostIdx = lastPostIdx - perPage;
  const currentCharacters = characters.slice(firstPostIdx, lastPostIdx);

  const handlePageChange = (num: number) => setCurrentPage(num);
  const handlePerPageChange = (num: string) => setPerPage(parseInt(num, 10));
  const handleSortChange = (value: string) => setSort(value);

  return (
    <section>
      <h1>Characters</h1>
      <Quote />
      <PerPageSelector handleChange={handlePerPageChange} perPage={perPage} />
      <SortSelector handleChange={handleSortChange} value={sort} />
      <Characters characters={currentCharacters} />
      <Pagination
        perPage={perPage}
        total={characters.length}
        handlePageChange={handlePageChange}
      />
    </section>
  );
};

export default CharactersPage;
