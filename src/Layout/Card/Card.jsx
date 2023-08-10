import React from 'react';
import './card.scss';
import avatar from '../../assets/img/avatar.jpg';

const Card = () => {
  return (
    <div className="card">
      <h3 className="card__title">Customized For</h3>

      <div className="avatar">
        <img className="avatar__img" src={avatar} alt="Avatar" />
        <h4 className="avatar__name">Mikayla</h4>
      </div>

      <div className="card__contents ">
        <h3 className="card__content-title"> Your custom contents</h3>
        <ul>
          <li>Understand Your Stress</li>
          <li>Anger Management</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
