import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./styles.scss";

import linear from "../../img/linear.png";
import date from "../../img/date.png";
import user from "../../img/user.png"

const MovieDescription = () => {
  const {id} = useParams();
  const [ movie, setMovie ] = useState(null)

  useEffect(() => {
    fetch(`https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22event%22:%22${id}%22,%22city%22:%221%22%7D&extended=true`)
      .then(res => res.json())
      .then(
        (movie => setMovie(movie)),
        (e) => console.log('oops, error', e)
      )
  }, [id]);


  return (
    <>
    {(
      <div className="movies">
        {movie?.map(({ name, ageLimit, annotation, bannerLink, posterLink, gender, trailerLink, rentalDateStart, rentalDateEnd }, id) => (
          <div key={id} className="mov">
            <div className="overflow">
              <img className="banner" src={bannerLink} alt="" />
            </div>

            <img className="linear" src={linear} alt="" />

            <img className="poster" src={posterLink} alt="" />
            <p className="ageLimit">{ageLimit.name}</p>

            <h1 className="title">{name}</h1>

            <div className="date-and-age">
              <div className="date-card">
                <img className="date-icon" src={date} />
              <div>
              <div className="startDate">
                {`с ${new Date(rentalDateStart).toLocaleString('ru',
                  {month: 'long',
                  day: 'numeric'})}`}
              </div>
              <div className="endDate">
                {`по ${new Date(rentalDateEnd).toLocaleString('ru',
                {month: 'long',
                day: 'numeric'})}`}
              </div>
              </div>
              </div>
              <div className="age-card">
              <img className="user-icon" src={user} />
              <div className="ageUser">
                {ageLimit.acronym}
              </div>
              </div>
              </div>

              <h2 className="title2">{name}</h2>

              <p className="description">{annotation}</p>
              <div className="line"/>
              <button className="youtube">
                <a href={trailerLink}>
                  Посмотреть трейлер на Youtube
                </a>
              </button>
          </div>
        ))}
      </div>
    )}
    </>
  )
}

export default MovieDescription;
