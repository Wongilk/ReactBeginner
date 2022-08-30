import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [selectedmovie, setSelectedMovie] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setSelectedMovie(json.data.movie);
    setLoading(false);
  };
  console.log(selectedmovie);
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h1>Detail</h1>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <img src={selectedmovie.background_image_original} />
          <br />
          <strong>Genre :</strong>{" "}
          {selectedmovie.genres.map((genre) => {
            return genre + ", ";
          })}
          <br />
          <strong>rating :</strong> {selectedmovie.rating}
          <br />
          <strong>description :</strong> {selectedmovie.description_full}
          <br />
          <a href={selectedmovie.url}>if you want to watch click here </a>
        </div>
      )}
    </div>
  );
}
export default Detail;
