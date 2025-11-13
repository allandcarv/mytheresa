import { Link, useParams } from "react-router-dom";
import { usePageTitle } from "../../../../shared/hooks/useLayoutContext";
import { useEffect } from "react";

export function Movie() {
  const { movieId } = useParams();

  const context = usePageTitle();

  useEffect(() => {
    if (context?.setTitle) {
      context.setTitle(movieId ?? "");
    }
  });

  return (
    <>
      <h2>{`Movie ${movieId}`}</h2>
      <Link to="/movies">Back to Movies</Link>
    </>
  );
}
