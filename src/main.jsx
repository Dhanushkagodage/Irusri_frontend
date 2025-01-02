import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import  SearchBooks from "./pages/searchBooks";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<SearchBooks/>} />
      </Routes>
    </Router>
  </StrictMode>
);
