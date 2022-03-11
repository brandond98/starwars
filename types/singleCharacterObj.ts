export type SingleCharacterObj = {
  name: string;
  filmConnection: {
    films: Film[];
  };
};

export type Film = {
  title: string;
  episodeID: number;
  director: string;
  producers: string[];
  releaseDate: string;
};
