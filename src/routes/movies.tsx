// src/routes/movies.tsx
import type { RouteObject } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Movies } from "../features/movies/pages/Movies";
import { Movie } from "../features/movies/pages/Movie";

const MoviesFeatureRoutes: RouteObject = {
  path: "movies",
  element: <Outlet />,
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
