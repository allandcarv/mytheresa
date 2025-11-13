// src/routes/movies.tsx
import type { RouteObject } from "react-router-dom";
import { Movies } from "../features/movies/pages/Movies/Movies";
import { Movie } from "../features/movies/pages/Movie/Movie";
import { PageLayout } from "../shared/layouts/PageLayout/PageLayout";

const MoviesFeatureRoutes: RouteObject = {
  path: "movies",
  element: <PageLayout />,
  children: [
    {
      index: true,
      element: <Movies />,
    },
    {
      path: ":movieId",
      element: <Movie />,
    },
  ],
};

export default MoviesFeatureRoutes;
