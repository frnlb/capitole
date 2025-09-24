import "./App.scss";
import { Home } from "@/pages";
import { Layout } from "@/components";
import { ServerData } from "./entry-server";

function App({ initialData }: { initialData?: ServerData }) {
  return (
    <Layout>
      <Home films={initialData?.films} />
    </Layout>
  );
}

export default App;
