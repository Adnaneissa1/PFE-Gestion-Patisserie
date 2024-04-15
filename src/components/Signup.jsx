import { useState } from "react";
import "../styles/signify.css";
// import FacebookButton from "./accessor/FacebookButton";
// import TwitterButton from "./accessor/TwitterButton";
// import GoogleButton from "./accessor/GoogleButton";
// import logo from "./logo.svg";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleFirstNameChange = (event) => setFirstName(event.target.value);
  const handleLastNameChange = (event) => setLastName(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Signing in with:", email, password, firstName, lastName);
  };

  return (
    <div className="login-card">
      {/* <img src={logo} alt="logo" /> */}
      <h2>Sign Up</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="username">
          <input
            autoComplete="off"
            spellCheck="false"
            className="control"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <div id="spinner" className="spinner"></div>
        </div>
        <input
          name="password"
          spellCheck="false"
          className="control"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <input
          name="firstName"
          spellCheck="false"
          className="control"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <input
          name="lastName"
          spellCheck="false"
          className="control"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <button className="control" type="submit">
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default Signup;