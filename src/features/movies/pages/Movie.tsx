import { Link, useParams } from "react-router-dom";

export function Movie() {
  const { movieId } = useParams();

  return (
    <>
      <h2>{`Movie ${movieId}`}</h2>
      <Link to="/movies">Back to Movies</Link>
    </>
  );
}
