import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Calculator from "./Components/calculator";
import Converter from "./Components/converter";
import Chess from "./Components/chess";
import Todo from "./Components/todo";

function App() {
  const body = document.querySelector("body");
  body.setAttribute("data-bs-theme", "dark");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/converter" element={<Converter />} />
        <Route path="/chess" element={<Chess />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
