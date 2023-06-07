import React, { useCallback, useState } from "react";
import "../styles/login.css";

async function login(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const updateUsername = useCallback((event) => {
    event.preventDefault();

    setUsername(event.target.value);
  }, []);

  const updatePassword = useCallback((event) => {
    event.preventDefault();

    setPassword(event.target.value);
  }, []);

  const submit = async (event) => {
    event.preventDefault();

    const token = await login({ username, password });

    setToken(token);
  };

  return (
    <form className="login" onSubmit={submit}>
      <h2 className="login-title">Log In</h2>
      <label className="login-label" htmlFor="username">
        <span className="login-text">Username</span>
        <input
          className="login-input"
          id="username"
          onChange={updateUsername}
          name="username"
          type="text"
        />
      </label>
      <label className="login-label" htmlFor="password">
        <span className="login-text">Password</span>
        <input
          className="login-input"
          id="password"
          onChange={updatePassword}
          name="password"
          type="text"
        />
      </label>
      <button className="login-button" type="submit">
        Login
      </button>
    </form>
  );
}
