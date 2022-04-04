import React from 'react';
import './Card.scss';

export const Card = (props) => {
  const { title, url, gender, status } = props;
  return (
    <div className='card'>
      <img className='card-img' src={url} alt={title} />
      <div className='card-body'>
        <h5>{title}</h5>
        <p>Gender: {gender}</p>
        <p>Status: {status}</p>
      </div>
    </div>
  );
};