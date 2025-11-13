// src/routes/root.tsx
import { Navigate, type RouteObject } from "react-router-dom";
import MoviesFeatureRoutes from "./movies";

export const AppRoutes: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Navigate to="/movies" replace />,
      },
      MoviesFeatureRoutes,
      {
        path: "*",
        element: <h1>404 Not Found</h1>,
      },
    ],
  },
];
