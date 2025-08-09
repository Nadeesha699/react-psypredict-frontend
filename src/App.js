import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={About} path="/about" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
