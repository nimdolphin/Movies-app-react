import React, { useEffect, useState } from 'react';
import Authorization from '../Authorization';

import { useNavigate } from "react-router-dom";

import './styles.scss'

const PostMovies = () => {

  const navigate = useNavigate();
  const handleNavigation = (id) => () => {
    navigate(`movie-description/${id}`)
  }

  const [ data, setData ] = useState([])

  useEffect(() => {
    fetch(`https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22city%22:1%7D&extended=true`)
      .then(res => res.json())
      .then(
        (data => setData(data)),
        (e) => console.log('oops, error', e)
      )
  }, []);

  return (
    <>
    <Authorization />
    {(
       
      <ul className="all-movies">
        {data?.map(({ name, posterLink, eventId }, idx) => (
          <li key={idx} className="movie-card">
            <img className="movie-image" src={posterLink}></img>
            <div className="movie-name">{name}</div>

            <button className="buy-ticket" onClick={handleNavigation(eventId)}>
              Купить билет
            </button>
          </li>
        ))}
      </ul>
    )}
    </>
  )
}

export default PostMovies;
