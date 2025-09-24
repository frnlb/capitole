import "./App.scss";
import { Home } from "@/pages";
import { Layout } from "@/components";
import { SsrData } from "./entry-server";

function App({ initialData }: { initialData?: SsrData }) {
  return (
    <Layout>
      <Home films={initialData?.films} />
    </Layout>
  );
}

export default App;
