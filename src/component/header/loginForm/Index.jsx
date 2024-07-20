import React, { useState } from "react";
import "./Index.css";

export const LoginForm = ({ onSubmit }) => {
  const [visiable, setVisiable] = useState(false);
  const [userName, setUserName] = useState("");
  const [nickName, setNikeName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const arabicRegex = /[\u0600-\u06FF]/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName || !nickName) {
      return;
    }
    onSubmit(userName, nickName);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setVisiable(!visiable);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password) {
      return;
    }

    if (
      arabicRegex.test(firstName) ||
      arabicRegex.test(lastName) ||
      arabicRegex.test(email) ||
      arabicRegex.test(password)
    ) {
      alert("Please enter data using English characters only.");
      return;
    }

    if (!email.endsWith("@gmail.com")) {
      setEmailError("Email should end with @gmail.com");
      return;
    } else {
      setEmailError("");
    }
    if (password.length < 8) {
      setPasswordError("Password should be at least 8 characters long.");
      return;
    } else {
      setPasswordError("");
    }

    setVisiable(!visiable);
  };

  return (
    <div className="form__input">
      <form
        className={visiable ? "form__list active__form" : "form__list"}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={firstName}
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          value={lastName}
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="text"
          value={userName}
          placeholder="User Name"
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <input
          type="text"
          value={nickName}
          placeholder="NickName"
          onChange={(e) => setNikeName(e.target.value)}
          required
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {emailError && <p className="error">{emailError}</p>}
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {passwordError && <p className="error">{passwordError}</p>}
        <button className="btn__signup" onClick={handleSignUp}>
          sign up
        </button>
        <button className="btn__login" onClick={handleSubmit}>
          log in
        </button>
      </form>
    </div>
  );
};
