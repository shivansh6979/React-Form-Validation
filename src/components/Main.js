import React, { useEffect, useState } from "react";

const Main = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [dob, setDob] = useState("");
  const [sex, setSex] = useState("");
  const [show, setShow] = useState(false);
  const submithandler = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    console.log(confirmPassword);
    console.log(name);
    console.log(age);
    console.log(dob);
    console.log(sex);
    setShow(true);
  };

  useEffect(() => {
    if (confirmPassword !== password) {
      document.getElementsByClassName("message")[0].style.display = "block";
    } else {
      document.getElementsByClassName("message")[0].style.display = "none";
    }
  }, [confirmPassword]);

  useEffect(() => {
    if (username.length < 3 && username.length > 0) {
      document.getElementsByClassName("userMessage")[0].style.display = "block";
    } else {
      document.getElementsByClassName("userMessage")[0].style.display = "none";
    }
  }, [username]);

  return (
    <div className="main">
      <div className="form">
        <div className="flex-align-fields">
          <label>Username</label>
          <input
            type="text"
            placeholder="Username..."
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <span className="userMessage" style={{ color: "red" }}>
          Min.length of 3 is required
        </span>
        <div className="flex-align-fields">
          <label>Password</label>
          <input
            type="password"
            placeholder="password..."
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex-align-fields">
          <label>Confirm-Password</label>
          <input
            type="password"
            placeholder="confirm-password..."
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <span className="message" style={{ color: "red" }}>
          Password do not match !
        </span>
        <div className="flex-align-fields">
          <label>Name</label>
          <input
            type="text"
            placeholder="Name..."
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex-align-fields">
          <label>Age</label>
          <input
            type="number"
            placeholder="Age..."
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="flex-align-fields">
          <label> Date of Birth</label>
          <input
            style={{ width: "58%", height: "25px" }}
            type="date"
            placeholder="enter the dob..."
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="flex-align-fields">
          <label> Gender</label>
          <input
            type="text"
            placeholder="M/F"
            onChange={(e) => setSex(e.target.value)}
          />
        </div>
        <div>
          <button className="submit" onClick={submithandler}>
            SUBMIT
          </button>
        </div>
      </div>

      {show ? (
        <div className="data">
          <h2>Username : {username}</h2>
          <h2>Name : {name}</h2>
          <h2>Age : {age}</h2>
          <h2>Sex : {sex}</h2>
          <h2>Date of birth : {dob}</h2>
        </div>
      ) : null}
    </div>
  );
};

export default Main;
