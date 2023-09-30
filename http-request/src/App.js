import React from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState("false");
  const [isError, setiserror] = useState(null);

  async function fetchMoviesHandler() {
    setIsLoading(true);
    try {
      const response = await fetch("https://swapi.dev/api/fils");
      if(!response.ok){
        throw new Error("something went wrong....")
      }
      const data = await response.json(); //It will fetch the body and convert json to java script object
      const moviesObject = data.results.map((moviedata) => {
        console.log(moviedata);
        // taking only results key data from josn file
        return {
          // extracing only episode_id,title, release_date and opening_crawl from results key value
          id: moviedata.episode_id,
          title: moviedata.title,
          releaseDate: moviedata.release_date,
          openingText: moviedata.opening_crawl,
        };
      });
      setMovies(moviesObject);
      setIsLoading(false);
    } catch (error) {
      setiserror("something went wrong..");
    }
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}> Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movies} />}
        {isLoading && <p>Loading....</p>}
        {isError !==null && <p>{isError}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
