import { Routes, Route, Link } from "react-router-dom";
import { Home, FilmDetail } from "@/pages";
import { Layout } from "@/components";
import { SsrData } from "./entry-server";
import { useDataStore } from "./store/films";
import "./App.scss";

function App({ initialData }: { initialData?: SsrData }) {
  console.log("🚀 ~ App ~ initialData:", initialData);
  const setFilms = useDataStore.getState().setFilms;
  if (initialData?.films) {
    setFilms(initialData.films);
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:filmId" element={<FilmDetail />} />
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
    </Layout>
  );
}

export default App;
