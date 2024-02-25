import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Calculator from "./Components/calculator";
import Converter from "./Components/converter";
import Chess from "./Components/chess";
import Todo from "./Components/todo";
import Time from "./Components/time";

function App() {
  const body = document.querySelector("body");
  body.setAttribute("data-bs-theme", "dark");
  body.className = "bg-dark-subtle";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/time" element={<Time />} />
        <Route path="/converter" element={<Converter />} />
        <Route path="/chess" element={<Chess />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
