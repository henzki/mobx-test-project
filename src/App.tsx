// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Lisätään Header-komponentti */}
        <hr />
        {/* Käytetään Routes-komponenttia määrittämään reitit */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer /> {/* Lisätään Footer-komponentti */}
      </div>
    </Router>
  );
}

export default App;
