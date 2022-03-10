import dayjs from 'dayjs';

const CharactersPage = () => {
  const now = dayjs().format('DD/MM/YYYY');
  return (
    <>
      <header>{now}</header>
      <section>Hello</section>
    </>
  );
};

export default CharactersPage;
