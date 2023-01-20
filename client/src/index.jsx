import React from "react";
import Router from "./routes";
import { createRoot } from "react-dom/client";
import store from "./redux/store";
import { Provider } from "react-redux";
import reportWebVitals from "./utils/reportWebVitals";
import "./index.css";

const cointainer = document.getElementById("root"); // Referencia al elemento  en el DOM
const root = createRoot(cointainer); // Crea una nueva raíz React

root.render(
  <Provider store={store}> {/*Conecta el store de redux con la aplicación*/}
    <Router />
  </Provider>
);

reportWebVitals();
