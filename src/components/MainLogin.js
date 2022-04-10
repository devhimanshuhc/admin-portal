import React, { useState } from "react";
import Home from "./Home";

const SELECT_VALUE_KEY = "MySelectValue";

export default function MainLogin() {
  const [emailLog, setEmailLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");
  const [home, setHome] = useState(true);

  //dopdown
  const [selected, setSelected] = useState("");
  const handleChange = (s) => {
    setSelected(s.target.value);
    console.log("2nd setSelected:", s.target.value);
    localStorage.setItem(SELECT_VALUE_KEY, JSON.stringify(s.target.value));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const mail = JSON.parse(localStorage.getItem("Email"));
    const pass = JSON.parse(localStorage.getItem("Password"));
    console.log(mail);
    console.log(pass);
    if (passwordLog !== pass || emailLog !== mail) {
      alert("You entered wrong Email or Password");
    } else {
      return setHome(!home);
    }
  };

  return (
    <div>
      {home ? (
        <form
          className="text-center"
          onSubmit={handleLogin}
          style={{ width: "30%", margin: "20px auto" }}
        >
          <h1>Login</h1>
          <div className="form-group" style={{ margin: "20px auto" }}>
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              onChange={(e) => setEmailLog(e.target.value)}
              required
            />
          </div>
          <div className="form-group" style={{ margin: "20px auto" }}>
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              onChange={(e) => setPasswordLog(e.target.value)}
              required
              
            />
          </div>
          <div className="form-group" style={{ margin: "20px auto" }}>
            <label>
              You are:
              <select
                style={{
                  width: "10rem",
                  textAlign: "center",
                  marginLeft: "1rem",
                  outline: "none",
                }}
                value={selected}
                onChange={handleChange}
              >
                <option value="admin">Admin</option>
                <option value="super admin">Super Admin</option>
              </select>
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-dark btn-lgbtn-block"
            style={{ margin: "20px auto" }}
          >
            Login
          </button>
        </form>
      ) : (
        <Home selected={selected} setSelected={setSelected} />
      )}
    </div>
  );
}
