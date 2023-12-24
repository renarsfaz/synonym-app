import { useState } from "react";
import { fetchSynonyms } from "../api/fetchSynonyms";

// Setting the type for synonyms
export type Synonym = {
  word: string;
  score: number;
};

// Custom hook to get the synonyms from the API with a separate state for isLoading
export const useGetSynonyms = () => {
  const [synonyms, setSynonyms] = useState<Synonym[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSynonyms = (word: string) => {
    setIsLoading(true);
    fetchSynonyms(word)
      .then(setSynonyms)
      .then(() => setIsLoading(false));
  };

  return { isLoading, synonyms, getSynonyms };
};
