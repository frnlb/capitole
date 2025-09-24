import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { getFilms } from "./services";
import App from "./App";

export type ServerData = {
  [key: string]: any;
};

const fetchInitialData = async (_url: string): Promise<ServerData> => {
  try {
    const films = await getFilms();
    return {
      films: films,
    };
  } catch (error) {
    console.error("Failed to fetch initial data:", error);
    return {
      films: {
        popularFilms: { results: [] },
        topRatedFilms: { results: [] },
        upcomingFilms: { results: [] },
      },
    };
  }
};

export async function render(
  _url: string
): Promise<{ html: string; data: ServerData }> {
  try {
    const data = await fetchInitialData(_url);

    const html = renderToString(
      <StrictMode>
        <App initialData={data} />
      </StrictMode>
    );
    return { html, data };
  } catch (error) {
    console.error("Error at entry server render function: ", error);
    return { html: "", data: { films: { results: [] } } };
  }
}
