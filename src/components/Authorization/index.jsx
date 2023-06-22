import React from "react";

import logo from "../../img/logo.png";

import "./styles.scss"

const Authorization = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} />
      <button className="sign-in">
        Войти
      </button>
    </header>
  )
}

export default Authorization;
