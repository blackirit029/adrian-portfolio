import React from "react";

// routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// css
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/resume" element={ <Resume /> } />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;