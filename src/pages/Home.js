import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

function Home({ NavBar }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then(r => r.json())
      .then(data => setMovies(data))
      .catch(error => console.error(error));
  }, []);

  const moviesList = movies.map(movie => {
    return <MovieCard key={movie.id} title={movie.title} id={movie.id} />
  })

  return (
    <>
      <header>
        {<NavBar />}
      </header>
      <main>
        <h1>Home Page</h1>
        {moviesList}
      </main>
    </>
  );
};

export default Home;
