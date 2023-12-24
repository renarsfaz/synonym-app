const BASE_URL = `https://api.datamuse.com`;

export const fetchSynonyms = (word: string) => {
  return fetch(`${BASE_URL}/words?rel_syn=${word}&max=10`).then((response) =>
    response.json()
  );
};
