import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import {Create} from "./pages/Create/Create"
import { Landing } from "./pages/Landing/Landing";
import { Detail } from "./pages/Detail/Detail";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <Landing /> } />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/form"} element={<Create />} />
        <Route path={"/dogs/:id"} element={<Detail />} />
        {/* <Route path={"/"} element={X} />
        <Route path={"/"} element={X} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
