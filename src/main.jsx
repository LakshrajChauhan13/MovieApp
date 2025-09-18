import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, HashRouter } from "react-router-dom";
import MovieContext from "./context/MovieContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <MovieContext>
        <App />
      </MovieContext>
    </HashRouter>
  </StrictMode>
);
