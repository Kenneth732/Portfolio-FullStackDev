

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Note the import changes
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <main className="App">
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} /> 

          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;


