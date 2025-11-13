import { createBrowserRouter, RouterProvider } from "react-router-dom";

type RouterType = ReturnType<typeof createBrowserRouter>;

export function App({ router }: { router: RouterType }) {
  return <RouterProvider router={router} />;
}
