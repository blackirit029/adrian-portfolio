import React from "react";

// routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header";

// pages
import Home from "./pages/Home";

// css
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
    </Router>
  );
};

export default App;