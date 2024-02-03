type BreedDetails = {
  id: string;
  name: string;
  temperament: string;
  origin: string;
  life_span: string;
  wikipedia_url: string;
  weight: {
    imperial: string;
    metric: string;
  };
};

export type Cat = {
  id: string;
  url: string;
  breeds: BreedDetails[];
};
