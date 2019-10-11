export type HackersNews = {
  id: number;
  title: string;
  text: string;
  time: number;
  score: number;
  url: string;
  by: BY;
  kids: KIDS;
};

type BY = {
  id: string;
  about: string;
};

type KIDS = {
  id: string;
};

export type Query = {
  hn: HackersNews[];
};

export type topStories = {
  by: BY;
  id: string;
  kids: [];
  score: number;
  text: null;
  time: number;
  title: string;
  url: string;
};
