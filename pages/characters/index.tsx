import { useState } from 'react';
import { useQuery } from '@apollo/client';
import Characters from '../../components/characters';
import Pagination from '../../components/pagination';
import { AllCharactersQuery } from '../../graphql/Characters';
import PerPageSelector from '../../components/perPageSelector';
import Quote from '../../components/quote';

const CharactersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  const { data, loading, error } = useQuery(AllCharactersQuery);

  if (loading) return <h2>Loading...</h2>;
  if (error) throw new Error(`${error}`);

  const characters = data.allPeople.people;
  const lastPostIdx = currentPage * perPage;
  const firstPostIdx = lastPostIdx - perPage;
  const currentCharacters = characters.slice(firstPostIdx, lastPostIdx);

  const handlePageChange = (num: number) => setCurrentPage(num);
  const handlePerPageChange = (num: number) => setPerPage(num);

  return (
    <section>
      <h1>Characters</h1>
      <Quote />
      <PerPageSelector handleChange={handlePerPageChange} perPage={perPage} />
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
