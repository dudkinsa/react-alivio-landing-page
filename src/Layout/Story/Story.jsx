import React from 'react';
import './story.scss';
import imgVideo from '../../assets/img/video-cover.jpg';
import iconVideo from '../../assets/icons/play-white.svg';

const Story = () => {
  return (
    <div className="story">
      <div className="container">
        <div className="story__row">
          <div className="story__content">
            <div className="story__title">
              <h3>Let's hear about Kayla's success story</h3>
            </div>
            <div className="story__text">
              <p>See how well Alivio works in a real customer’s life.</p>
            </div>
            <div className="story__btn">
              <a className="btn btn-big" href="#!">
                Let’s get started
              </a>
            </div>
          </div>
          <div className="story__video">
            <div className="story__vidio-overlay">
              <button className="story__video-btn">
                <img src={iconVideo} alt="Icon video play " />
              </button>
            </div>
            <img className="story__video-object" src={imgVideo} alt="video" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
