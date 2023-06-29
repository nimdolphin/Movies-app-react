import React from "react";

import "./styles.scss";
import { useNavigate } from "react-router-dom";


const NotFoundPage = () => {

  const navigate = useNavigate();

  const handleNavigationNotFound = () => {
    navigate(`/`)
  }

  return (
    <div className="back-img">
      <div className="container-not-found">
        <h1 className="not-page">
          У нас нет такой страницы
        </h1>
        <p className="phrase">
          <q>- И что же мы будем делать?

          <br />

             - Наслаждаться моментом</q>
        </p>

        <p className="film">
          Вечное сияние чистого разума
        </p>

        <button 
          className="go-home"
          onClick={handleNavigationNotFound}>
            Перейти на главную
        </button>

      </div>
    </div>
  )
}

export default NotFoundPage;
