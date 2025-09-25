import { StrictMode } from "react";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import { getFilms } from "@/services";
import { matchPath } from "react-router-dom";
import { serverRoutes, RouteConfig } from "@/routes";
import App from "./App";

export type SsrData = {
  filmData?: Awaited<ReturnType<typeof import("./services/tmdb").getFilms>>;
  [key: string]: any;
};

export async function render(
  url: string
): Promise<{ html: string; data: SsrData }> {
  const matchedRoute = serverRoutes.find((route) => {
    return matchPath(route.path, url);
  }) as RouteConfig | undefined;
  let initialData: SsrData = {};
  try {
    if (matchedRoute) {
      const data = await matchedRoute.loader({});
      initialData[matchedRoute.dataKey] = data;
      console.log(`Executed heavy loader for route: ${matchedRoute.path}`);
    } else {
      console.log(`No heavy loader executed for URL: ${url}`);
    }
  } catch (error) {
    console.error(`data loading failed for URL ${url}`, error);
    initialData = {};
  }
  const films = await getFilms();
  const data: SsrData = { films };

  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App initialData={data} />
      </StaticRouter>
    </StrictMode>
  );
  return { html, data };
}
