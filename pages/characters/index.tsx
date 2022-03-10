import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import fetchQuote from '../../services/apiService';
import { QuoteObj } from '../../types/quoteObj';

const CharactersPage = () => {
  const now = dayjs().format('DD/MM/YYYY');
  const [quote, setQuotes] = useState<QuoteObj>();

  useEffect(() => {
    (async () => {
      await fetchQuote().then((res) => setQuotes(res));
    })();
  }, []);

  return (
    <>
      <header>{now}</header>
      <section>
        <h1>Characters</h1>
        <div className="quotes">{quote?.content}</div>
      </section>
    </>
  );
};

export default CharactersPage;
