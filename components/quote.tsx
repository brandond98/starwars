import { useEffect, useState } from 'react';
import fetchQuote from '../services/apiService';
import { QuoteObj } from '../types/quoteObj';

const Quote = () => {
  const [quote, setQuote] = useState<QuoteObj>();
  useEffect(() => {
    const getQuote = async () => {
      await fetchQuote().then((res) => setQuote(res));
    };
    getQuote();
  }, []);

  return <p>{quote?.content}</p>;
};

export default Quote;
