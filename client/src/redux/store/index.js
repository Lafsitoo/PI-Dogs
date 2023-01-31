import { configureStore } from "@reduxjs/toolkit";
// Reductor principal que manejará los estados
import reducer from "../reducers";

export default configureStore({
  // Le pasamos el reductor principal
  reducer,
  // Definimos un middleware para ser aplicado al store
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Desactivamos la comprobación serializable
      serializableCheck: false,
    }),
});

// La comprobación de serializabilidad es una característica de Redux Toolkit que ayuda a detectar y prevenir errores de estado no serializable en tiempo de desarrollo.