import "./App.scss";
import { Home } from "@/pages";
import { Layout } from "@/components";
import { SsrData } from "./entry-server";

function App({ initialData }: { initialData?: SsrData }) {
  console.log("\ninitialData \ninside App: \n--------->", initialData);
  return (
    <Layout>
      <Home films={initialData?.films} />
    </Layout>
  );
}

export default App;
