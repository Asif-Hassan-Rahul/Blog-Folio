import React, { useState } from "react";
import { form, Alert } from "react-bootstrap";
import register_image from "../../../../assets/img/register-image.jpg";
import { Navigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Registration-Email", JSON.stringify(email));
      localStorage.setItem("Registration-Name", JSON.stringify(name));
      localStorage.setItem("Registration-Password", JSON.stringify(password));

      sessionStorage.setItem("Registration-Email", JSON.stringify(email));
      sessionStorage.setItem("Registration-Name", JSON.stringify(name));
      sessionStorage.setItem("Registration-Password", JSON.stringify(password));

      console.log("Saved in Local Storage");

      setLogin(!login);

      setRedirect(!redirect);
    }
  }

  return (
    <>
      <div className="container mt-5">
        <dir className="row mt-5 d-flex justify-content-center align-items-center">
          <div className="col-md-12 mt-5 ">
            <div className="card my-5" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
              <div className="card-body">
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-md-5">
                    <img src={register_image} alt="login" width={500} />
                  </div>
                  <div className="col-md-7 p-5">
                    <h1 className="my-5">Sign Up</h1>
                    <h4>Please enter your correct information below</h4>
                    <form onSubmit={handleFormSubmit}>
                      <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Name" name="name" onChange={(e) => setName(e.target.value)} />
                      </div>
                      <div className="mb-3">
                        <input type="email" className="form-control" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} />
                      </div>
                      <div className="mb-3">
                        <input type="password" className="form-control" placeholder="Enter Password" name="password" onChange={(e) => setPassword(e.target.value)} />
                      </div>
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>

                      {flag && (
                        <Alert color="primary" variant="danger">
                          I got it you are in hurry! But every Field is important!
                        </Alert>
                      )}
                    </form>
                    {redirect && <Navigate to="/login" />}
                    <h1 className="mt-5">Already have an account?</h1>
                    <h4>
                      You can login{" "}
                      <a style={{ textDecoration: "underline", textDecorationColor: "blue", color: "blue" }} href="/login">
                        here
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </dir>
      </div>
    </>
  );
}

export default Register;
