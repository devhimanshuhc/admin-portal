import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import View from "./View";
import "./Header.css";

const getDataFromLS = () => {
  const lsData = localStorage.getItem("userData");
  if (lsData) {
    return JSON.parse(lsData);
  } else {
    return [];
  }
};

function Home() {
  const [userData, setUserData] = useState(getDataFromLS());
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");

  // getting data from ls(set the default value as admin)
  const [access, setAccess] = useState("admin");
  const SELECT_VALUE_KEY = "MySelectValue";
  useEffect(() => {
    const lastSelected = JSON.parse(
      localStorage.getItem(SELECT_VALUE_KEY) ?? "[]"
    );
    setAccess(lastSelected);

    if (lastSelected === "admin") {
      console.log("you selected", lastSelected);
    } else {
      console.log("you selected", lastSelected);
    }
  }, []);

  //form submit
  const handleAddUserData = (e) => {
    e.preventDefault();
    let data = {
      firstName,
      lastName,
      age,
      bloodGroup,
    };
    setUserData([...userData, data]);
    setFirstName("");
    setLastName("");
    setAge("");
    setBloodGroup("");
  };

  // delete data
  const deleteData = (age) => {
    const filteredData = userData.filter((element, index) => {
      return element.age !== age;
    });
    setUserData(filteredData);
  };

  //saving data to local storage
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  //delete local storage
  const delLS = () => {
    localStorage.clear();
  };

  return (
    <div className="wrapper">
      <>
        {/* header */}
        <div className="NavbarItems">
          <h2>Dashboard</h2>
          <ul className="nav-menu">
            <Link to="/" style={{ textDecoration: "none" }}>
              <li className="nav-links" onClick={delLS}>
                Log out <br />
                <b>{localStorage.getItem("Email")}</b>
              </li>
            </Link>
          </ul>
        </div>
        <h1>{access === "super admin" ? "Super Admin" : "Admin"} Portal</h1>
        {access === "super admin" ? (
          <p>Add and Remove User data</p>
        ) : (
          <p>Log in as Super Admin to modify the view list</p>
        )}

        {/* main  */}
        <div className="main">
          <div className="form-container">
            <form
              autoComplete="off"
              className="form-group"
              onSubmit={handleAddUserData}
            >
              <label>First Name</label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                type="text"
                className="form-control"
                required
              />
              <br />
              <label>Last Name</label>
              <input
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                type="text"
                className="form-control"
                required
              />
              <br />
              <label>Age</label>
              <input
                onChange={(e) => setAge(e.target.value)}
                value={age}
                type="number"
                className="form-control"
                required
              />
              <br />
              <label>Blood Group</label>
              <input
                onChange={(e) => setBloodGroup(e.target.value)}
                value={bloodGroup}
                type="text"
                className="form-control"
                required
              />
              <br />
              <button type="submit" className="btn btn-success btn-md">
                Add
              </button>
            </form>
          </div>

          <div className="view-container">
            {userData.length > 0 && (
              <>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Blood Group</th>
                        {access === "super admin" ? <th>Delete</th> : null}
                      </tr>
                    </thead>
                    <tbody>
                      <View
                        userData={userData}
                        deleteData={deleteData}
                        access={access}
                      />
                    </tbody>
                  </table>
                </div>
                {access === "super admin" ? (
                  <button
                    className="btn btn-danger btn-md"
                    onClick={() => setUserData([])}
                  >
                    Remove All
                  </button>
                ) : null}
              </>
            )}
            {userData.length < 1 && (
              <div>No User's Data Has Been Added In the List</div>
            )}
          </div>
        </div>
      </>
    </div>
  );
}

export default Home;
