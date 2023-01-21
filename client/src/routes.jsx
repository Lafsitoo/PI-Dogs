import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing/Landing";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <Landing /> } />
        <Route path={"/"} element={X} />
        <Route path={"/"} element={X} />
        <Route path={"/"} element={X} />
        <Route path={"/"} element={X} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
