import React, { useState } from "react";
//import { Link, Navigate } from "react-router-dom";
import MainLogin from "./MainLogin";

export default function Login() {
  const [uName, setUName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("Email", JSON.stringify(email));
    localStorage.setItem("UserName", JSON.stringify(uName));
    localStorage.setItem("Password", JSON.stringify(password));

    console.log("saved in lS");
    console.log(email);
    console.log(uName);
    console.log(password);
    setLogin(!login);
  };

  const handleClick = () => {
    setLogin(!login);
  };

  return (
    <div>
      {login ? (
        <form
          className="text-center"
          onSubmit={handleSubmit}
          style={{ width: "30%", margin: "20px auto" }}
        >
          <h1>Register</h1>
          <div className="form-group" style={{ margin: "20px auto" }}>
            <label>UserName</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter User name"
              onChange={(e) => setUName(e.target.value)}
              required
            />
          </div>
          <div className="form-group" style={{ margin: "20px auto" }}>
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group" style={{ margin: "20px auto" }}>
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="btn btn-dark btn-lgbtn-block"
              style={{ margin: "20px auto" }}
            >
              Register
            </button>

            <p onClick={handleClick} style={{ cursor: "pointer" }}>
              Already registered? Login
            </p>
          </div>
        </form>
      ) : (
        <MainLogin />
      )}
    </div>
  );
}
