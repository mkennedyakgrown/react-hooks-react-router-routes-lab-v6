import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie({ NavBar }) {
  const [movie, setMovie] = useState({});
  const params = useParams();
  const movieId = params.id;
  let genres = <></>;

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
      .then(r => r.json())
      .then(data => setMovie(data))
      .catch(error => console.error(error));
  }, [movieId]);
  
  if (movie.genres) {
    genres = movie.genres.map(genre => {
      return <span key={movie.id + genre}>{genre}</span>
    })
  } else {
    genres = <></>;
  }

  return (
    <>
      <header>
        {<NavBar />}
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time} min. Runtime</p>
        {genres}
      </main>
    </>
  );
};

export default Movie;
