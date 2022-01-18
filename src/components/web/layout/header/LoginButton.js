import React from "react";

function LoginButton() {
  return (
    <>
      <li>
        <a className="nav-link scrollto" href="/login">
          Login
        </a>
      </li>
      <li>
        <a className="nav-link scrollto" href="/register">
          Register
        </a>
      </li>
    </>
  );
}

export default LoginButton;
