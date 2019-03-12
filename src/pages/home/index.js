import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './home.sass';

import episode1 from '../../assets/1.jpg';
import episode2 from '../../assets/2.jpg';
import episode3 from '../../assets/3.jpg';
import episode4 from '../../assets/4.jpg';
import episode5 from '../../assets/5.jpg';
import episode6 from '../../assets/6.jpg';
import episode7 from '../../assets/7.jpg';

const posters = {
  1: episode1,
  2: episode2,
  3: episode3,
  4: episode4,
  5: episode5,
  6: episode6,
  7: episode7,
};

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/swapi/movie/list`)
      .then(response => response.json())
      .then(setMovies);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Star Wars Movies</h1>
      {movies.map(({ id, episode }) => {
        return (
          <Link
            key={id}
            className={styles.movie}
            to={`/starships/${episode}`}
            style={{ backgroundImage: `url(${posters[episode]})` }}
          />
        );
      })}
    </div>
  );
};

export default Home;
