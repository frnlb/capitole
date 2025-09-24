import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import { filmsService } from "@/services";

export async function render(url: string) {
  let ssrData = {};

  try {
    // Route-based data fetching
    if (url === "/" || url === "") {
      // Homepage - fetch all carousel data
      ssrData = await filmsService.getFilms();
    }
    //  else if (url.startsWith("/film/")) {
    //   // Film detail page - extract film ID and fetch details
    //   const filmIdMatch = url.match(/\/film\/(\d+)/);
    //   if (filmIdMatch) {
    //     const filmId = parseInt(filmIdMatch[1]);
    //     ssrData = await filmsService.getFilmDetailsData(filmId);
    //   }
    // }
    // Wishlist page doesn't need server data
  } catch (error) {
    console.error("SSR data fetching error:", error);
    // Continue with empty data rather than failing
  }

  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App ssrData={ssrData} />
      </StaticRouter>
    </React.StrictMode>
  );

  return { html, ssrData };
}
