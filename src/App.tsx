import React from "react";

// routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";

// components
import Header from "./components/Header";

// css
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
      </Routes>
    </Router>
  );
};

export default App;