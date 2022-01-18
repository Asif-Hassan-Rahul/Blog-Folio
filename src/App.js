import React from "react";
import Footer from "./components/web/layout/footer/Footer";
import Header from "./components/web/layout/header/Header";
import Home from "./components/web/pages/Home/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/web/pages/Login/Login";
import Register from "./components/web/pages/Register/Register";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
