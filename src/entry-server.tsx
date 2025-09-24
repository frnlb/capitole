import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { filmsService } from "./services";
import App from "./App";

export type SsrData = {
  films: Awaited<ReturnType<typeof filmsService.getFilmsByCategory>>;
};

export async function render(
  _url: string
): Promise<{ html: string; data: SsrData }> {
  try {
    const films = await filmsService.getFilmsByCategory();
    const data: SsrData = { films };

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
