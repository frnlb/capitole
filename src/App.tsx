import { Routes, Route, Link } from "react-router-dom";
import { Home, FilmDetail } from "@/pages";
import { Layout } from "@/components";
import { SsrData } from "./entry-server";
import { useFilmsStore } from "./store/films";
import "./App.scss";
import { useEffect } from "react";

function App({ initialData }: { initialData?: SsrData }) {
  const setFilmsData = useFilmsStore((state) => state.setFilmsData);
  const { popularFilms, topRatedFilms, upcomingFilms, isHydrated } =
    useFilmsStore();
  useEffect(() => {
    if (!isHydrated) {
      setFilmsData(initialData?.films);
      console.log("Zustand store hydrated with initial data.");
    }
  }, [setFilmsData, isHydrated]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<FilmDetail />} />
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
    </Layout>
  );
}

export default App;
