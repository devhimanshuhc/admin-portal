import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const history = useNavigate();

  const [uName, setUName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    if (email === "" || password === "" || uName === "") {
      alert("Kindly complete the registration form");
    } else if ((email, password, uName)) {
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("UserName", JSON.stringify(uName));
      localStorage.setItem("Password", JSON.stringify(password));
      history("/login", { replace: true });
    } else {
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("Email", JSON.stringify(email));
    localStorage.setItem("UserName", JSON.stringify(uName));
    localStorage.setItem("Password", JSON.stringify(password));
  };

  return (
    <div>
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
            onClick={handleClick}
          >
            Register
          </button>
          <Link
            to="/login"
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: "black",
            }}
          >
            <p>Already registered? Login</p>
          </Link>
        </div>
      </form>
    </div>
  );
}
