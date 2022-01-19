import React, { useState } from "react";
import "./Header.css";
import LoginButton from "./LoginButton";

function Header() {
  const isAuthenticated = localStorage.getItem("Is-Logged-In").replace(/"/g, "") === "true";

  const user_name = localStorage.getItem("Registration-Name").replace(/"/g, "");

  return (
    <>
      <header id="header" className="fixed-top" style={{ background: "black" }}>
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a href="/">
              <span style={{ fontFamily: '"Arizonia", cursive' }}>AHR</span>
            </a>
          </h1>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto" href="/#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/#services">
                  Services
                </a>
              </li>

              <li>
                <a className="nav-link scrollto " href="/blog">
                  Blog
                </a>
              </li>

              <li>
                <a className="nav-link scrollto" href="/#contact">
                  Contact
                </a>
              </li>

              {isAuthenticated ? (
                <li>
                  <a className="nav-link scrollto" href="/dashboard">
                    Dashboard
                  </a>
                </li>
              ) : (
                <LoginButton />
              )}
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
