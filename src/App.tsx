import "./App.scss";
// import { Home } from "@/pages";
// import { Layout } from "@/components";
import { RouterProvider } from "react-router-dom";
import { SSRProvider } from "@/lib/ssr-context";
import { router } from "./router";
import "@/styles/globals.scss";

interface AppProps {
  ssrData?: any;
}

function App({ ssrData }: AppProps = {}) {
  return (
    <SSRProvider initialData={ssrData}>
      <RouterProvider router={router} />
    </SSRProvider>
  );
}
export default App;
