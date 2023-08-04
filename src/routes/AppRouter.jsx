import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import { routes } from "./Routes";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>

      <Route path="*" element={<h1>PAGINA NO ENCONTRADA</h1>} />
    </Routes>
  );
};

export default AppRouter;
