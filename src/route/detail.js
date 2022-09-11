import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
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
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h1>Detail</h1>
      {loading ? (
        "Loading..."
      ) : (
        <div
          className={styles.container}
          style={{
            backgroundImage: `url(${selectedmovie.background_image_original}`,
          }}
        >
          <div className={styles.description}>
            <h1 className={styles.title}>{selectedmovie.title}</h1>
            <div className={styles.div}>
              <img
                className={styles.like}
                src="https://emojigraph.org/media/apple/red-heart_2764-fe0f.png"
              />
              {selectedmovie.like_count}
            </div>
            <hr />
            <div>
              <h2>Genre : </h2>
              {selectedmovie.genres.map((genre) => {
                return genre + ", ";
              })}
              <h2>Rating :</h2> {selectedmovie.rating}
              <h2>Description :</h2>
              {selectedmovie.description_full.length > 400
                ? selectedmovie.description_full.substr(0, 400) + "..."
                : selectedmovie.description_full}
            </div>
          </div>
          <div className={styles.poster}>
            <img
              className={styles.movie}
              src={selectedmovie.medium_cover_image}
            />
            <div style={{ display: "flex", marginTop: "30px" }}>
              <button className={styles.button}>
                <a href={selectedmovie.url}>Watch</a>
              </button>
              <button className={styles.button}>
                <a
                  href={`https://www.youtube.com/watch?v=${selectedmovie.yt_trailer_code}`}
                >
                  Trailer
                </a>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;
