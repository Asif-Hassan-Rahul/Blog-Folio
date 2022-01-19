import React from "react";
import Footer from "./components/web/layout/footer/Footer";
import Header from "./components/web/layout/header/Header";
import Home from "./components/web/pages/Home/Home";

import "./assets/css/style.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/web/pages/Login/Login";
import Register from "./components/web/pages/Register/Register";
import Blog from "./components/web/pages/Blog/Blog";
import Dashboard from "./components/admin/pages/Dashboard";
import Update from "./components/admin/pages/Update";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/blog" exact element={<Blog/>} />
          <Route path="/dashboard" exact element={<Dashboard/>} />
          <Route path="/update/:id" exact element={<Update/>} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
