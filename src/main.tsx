import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./Contexto/contexto.ts";
import Userlist from "./features/users/component/Userlist.tsx";  
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cursos from "./features/cursos/componente/cursos.tsx";




createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Userlist />}></Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </Provider>
);
