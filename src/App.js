import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Work from "./pages/Work";
import Header from "./components/HomeComponents/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
