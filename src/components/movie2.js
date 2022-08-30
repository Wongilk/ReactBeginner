import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie2({ id, medium_cover_image, title, summary }) {
  return (
    <div>
      <img src={medium_cover_image} alt={title} />
      <br />
      <strong>
        <Link to={`/movie/${id}`}>{title}</Link>
      </strong>
      <p>{summary}</p>
    </div>
  );
}

Movie2.propTypes = {
  id: PropTypes.number,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};
export default Movie2;
