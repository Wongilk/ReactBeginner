import { useState, useEffect } from "react";
import Movie2 from "../components/movie2";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovie = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading((prev) => !prev);
  };
  useEffect(() => {
    getMovie();
  }, []);
  /*useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    )
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.data.movies);
        setLoading((prev) => !prev);
      });
  }, []);*/
  return (
    <div>
      <h1>Movie List</h1>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie2
              id={movie.id}
              medium_cover_image={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
