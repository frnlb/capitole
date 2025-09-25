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
    <Routes>
      <Layout>
        <Route path="/" element={<Home />} />
        <Route path="/film/:filmId" element={<FilmDetail />} />
      </Layout>
    </Routes>
  );
}

export default App;
