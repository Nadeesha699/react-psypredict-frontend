import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./pages/About";
import LungCancerCheck from "./pages/LungCancerCheck";
import MigraineCheck from "./pages/MigraineCheck";
import DepressionCheck from "./pages/DepressionCheck";
import DiabeticCheck from "./pages/DiabeticCheck";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={About} path="/about" />
        <Route Component={LungCancerCheck} path="/lungcancer-check"/>
        <Route Component={MigraineCheck} path="/migraine-check"/>
        <Route Component={DepressionCheck}path="/depression-check"/>
        <Route Component={DiabeticCheck} path="/diabetic-check"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
