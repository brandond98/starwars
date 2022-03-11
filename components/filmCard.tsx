import { Film } from '../types/singleCharacterObj';

type FilmCardProps = {
  film: Film;
};

const FilmCard = ({ film }: FilmCardProps) => {
  return (
    <div className="card">
      <p>
        <b>Title:</b> {film.title}
      </p>
      <p>
        <b>Episode:</b> {film.episodeID}
      </p>
      <p>
        <b>Director: </b>
        {film.director}
      </p>
      <p>
        <b>Producers:</b>{' '}
        {film.producers.map(
          (producer, i) => `${producer}${i < film.producers.length - 1 && ', '}`
        )}
      </p>
      <p>
        <b>Release date:</b> {film.releaseDate}
      </p>
    </div>
  );
};

export default FilmCard;
