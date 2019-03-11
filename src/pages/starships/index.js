import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './starships.sass';

const Starships = props => {
  const { episode } = props.match.params;
  const [starships, setStarships] = useState([]);
  const [modal, setModal] = useState(false);
  const [starship, setStarship] = useState({});

  useEffect(() => {
    fetch(`http://localhost:1337/swapi/starship/list/${episode}`)
      .then(response => response.json())
      .then(setStarships);
  }, []);

  const handleModal = starship => {
    if (starship) {
      setStarship(starship);
      setModal(true);
    } else {
      setModal(false);
    }
  };

  return (
    <div>
      {modal && (
        <div className={styles.modal} onClick={() => handleModal(null)}>
          <div className={styles.modalbox}>
            <h2>{starship.starshipName}</h2>
            <p>Model: {starship.model}</p>
            <p>Passengers: {starship.passengers}</p>
            <p>Pilot: {starship.pilot || 'Need a pilot'}</p>
          </div>
        </div>
      )}
      <h1>Starships Episode {episode}</h1>
      <h3>
        <Link to="/"> Back to the movies </Link>
      </h3>
      <ul className={styles.container}>
        {starships.map(starship => (
          <li key={starship.starshipId} className={styles.starship}>
            {starship.starshipName}
            <span onClick={() => handleModal(starship)}>edit</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Starships;
