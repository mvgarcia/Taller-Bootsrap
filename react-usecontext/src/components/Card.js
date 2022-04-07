import React, { useContext } from 'react';
import './Card.scss';
import { ThemeContext } from '../hooks/ThemeProvider';

export const Card = (props) => {
  const { title, url, description } = props;
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={`card ${darkMode ? "text-white bg-dark" : ""}`} style={{ width: '18rem' }}>
      <img src={url} className='card-img-top' alt={title} />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{description}</p>
        <a href='#' className='btn btn-primary'>
          Go somewhere
        </a>
      </div>
    </div>
  );
};
