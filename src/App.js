import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { Login, Products } from "./components/index.js";
import products from "./datas/products.json";

function useToken() {
  const [token, setToken] = useState(() => {
    const localStorageToken = localStorage.getItem("token");

    if (localStorageToken === null) return null;

    return JSON.parse(localStorageToken).token;
  });

  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token,
  };
}

function App() {
  // const { user, setUser } = useUser();
  const { token, setToken } = useToken();

  // if (user === null) return <Signin setUser={setUser} />;

  if (token === null) return <Login setToken={setToken} />;

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          APP
        </header>
        <main className="App-main">
          <Products products={products} />
        </main>
        <footer className="App-footer">FOOTER</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
