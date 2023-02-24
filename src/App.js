import { Route, Routes } from "react-router-dom";
import { Home, Projects, CV } from "./pages";
import { Layout } from "./components";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/projects"} element={<Projects />} />
        <Route path={"/cv"} element={<CV />} />
      </Routes>
    </Layout>
  );
}

export default App;
