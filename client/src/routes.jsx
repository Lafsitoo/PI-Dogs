import { BrowserRouter, Routes, Route } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={X} />
        <Route path={"/"} element={X} />
        <Route path={"/"} element={X} />
        <Route path={"/"} element={X} />
        <Route path={"/"} element={X} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
