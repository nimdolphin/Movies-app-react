import React, { useEffect, useState } from 'react';
import Authorization from '../Authorization';
import Loader from '../Loader';
import NotFoundPage from '../NotFoundPage';

import { useNavigate } from "react-router-dom";

import './styles.scss'

const PostMovies = () => {

  const navigate = useNavigate();
  const handleNavigation = (id) => () => {
    navigate(`movie-description/${id}`)
  }

  const [ data, setData ] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    setLoading(true);

    const fetchData = () => {
      try {
        fetch(`https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22city%22:1%7D&extended=true`)
          .then(res => {
            if (!res.ok) {
              throw Error('Упс, что-то пошло не так...');
            }
            return res.json();
          })
          .then(
          (data => {
            setData(data);
            setLoading(false);
            setError(null);
          })
          )
        } catch(err) {
          setLoading(false);
          setError(err.message);
        }
    }

    fetchData();

  }, []);

  const dattte = () => {
    if (!isLoading && !data?.length) {
      return (<div className="not-movies">Извините, мы не нашли никаких фильмов!</div>)
     } else {
      return data?.map(({ name, posterLink, eventId }, idx) => (
       <li key={idx} className="movie-card">
         <img className="movie-image" src={posterLink}></img>
         <div className="movie-name">{name}</div>

         <button className="buy-ticket" onClick={handleNavigation(eventId)}>
           Купить билет
         </button>
       </li>
     ))}
  }

  return (
    <>
    <Authorization />
    {(<ul className="all-movies">
       { error && <div>{ error }</div>}
       { isLoading && <Loader /> }
       { dattte() }
      </ul>
    )}
    </>
  )
}

export default PostMovies;
