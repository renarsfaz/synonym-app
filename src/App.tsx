import { useState } from "react";
import "./App.css";
import { useGetSynonyms } from "./hooks/useGetSynonyms";
import Spinner from "./components/Spinner";

function App() {
  // State to update the user input field
  const [word, setWord] = useState("");

  // Custom hook for getting the synonyms
  const { isLoading, synonyms, getSynonyms } = useGetSynonyms();

  // This is to handle the user input search
  const handleFetchSynonym = (e: React.FormEvent) => {
    // Prevent default to avoid refreshing the browser
    e.preventDefault();
    getSynonyms(word);
  };

  // This is to handle when user clicks on synonym to initiate another search
  const handleSynonymClick = (synonymWord: string) => {
    setWord(synonymWord);
    getSynonyms(synonymWord);
  };

  return (
    <div className="App">
      <h1>Synonym App</h1>
      <form onSubmit={handleFetchSynonym} className="Form">
        <label htmlFor="word-input">Enter word:</label>
        <input
          placeholder="e.g. Boring"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          id="word-input"
        ></input>
        <button>Search</button>
      </form>

      {isLoading ? (
        <div className="loading">
          <Spinner />
        </div>
      ) : (
        <>
          {synonyms.length > 0 && (
            <>
              <h2>Similar words</h2>
              <p>Click on similar words to expand your search</p>
            </>
          )}
          <ul>
            {synonyms?.map((synonym) => (
              <li
                onClick={() => handleSynonymClick(synonym.word)}
                key={synonym.word}
              >
                {synonym.word}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
