import { Home } from "@/pages";
import { Layout } from "@/components";
import { SsrData } from "./entry-server";
import { useDataStore } from "./store/films";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";

function App({ initialData }: { initialData?: SsrData }) {
  console.log("🚀 ~ App ~ initialData:", initialData);
  const setFilms = useDataStore.getState().setFilms;
  if (initialData?.films) {
    setFilms(initialData.films);
  }

  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
