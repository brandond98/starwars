const BASE_URL =
  'https://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote';

const fetchQuote = async () => {
  try {
    const res = await fetch(BASE_URL);
    return res.json();
  } catch (error) {
    throw Error(`${error}`);
  }
};

export default fetchQuote;
