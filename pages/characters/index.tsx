import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import Characters from '../../components/characters';
import Pagination from '../../components/pagination';
import fetchQuote from '../../services/apiService';
import { QuoteObj } from '../../types/quoteObj';
import CharacterQuery from '../../graphql/CharacterQuery';
import PerPageSelector from '../../components/perPageSelector';

const CharactersPage = () => {
  const [quote, setQuotes] = useState<QuoteObj>();
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  useEffect(() => {
    const getQuote = async () => {
      await fetchQuote().then((res) => setQuotes(res));
    };
    getQuote();
  }, []);

  const { data, loading, error } = useQuery(CharacterQuery);

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
      <div className="quotes">{quote?.content}</div>
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
