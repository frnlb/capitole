import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components";
import { Home } from "@/pages";
// import { FilmDetail } from "@/pages/FilmDetail/FilmDetail";
// import { Wishlist } from "@/pages/Wishlist/Wishlist";
// import { ssrTmdbService } from "@/services/ssr-tmdb";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout children={undefined} />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          return null;
        },
      },
      //   {
      //     path: "film/:id",
      //     element: <FilmDetail />,
      //     loader: async ({ params }) => {
      //       // This will be used for client-side navigation
      //       // SSR data is handled in entry-server.tsx
      //       return null;
      //     },
      //   },
      //   {
      //     path: "wishlist",
      //     element: <Wishlist />,
      //   },
    ],
  },
]);
