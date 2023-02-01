import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/skills'} element={<Skills />} />
        <Route path={'/portfolio'} element={<Portfolio />} />
      </Routes>
    </Router >
  );
}

export default App;
