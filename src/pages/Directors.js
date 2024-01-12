import { useEffect, useState } from "react";

function Directors({ NavBar }) {
  const [directors, setDirectors] = useState([]);
  let movies = [];

  useEffect(() => {
    fetch(`http://localhost:4000/directors`)
      .then(r => r.json())
      .then(data => setDirectors(data))
      .catch(error => console.error(error));
  }, []);

  const directorsList = directors.map(director => {
    return (
      <article key={director.id}>
        <h2>{director.name}</h2>
        <ul>
          {director.movies.map(movie => <li key={director.id + movie}>{movie}</li>)}
        </ul>
      </article>
    )
  })

  return (
    <>
      <header>
        {<NavBar />}
      </header>
      <main>
        <h1>Directors Page</h1>
        {directorsList}
      </main>
    </>
  );
};

export default Directors;
