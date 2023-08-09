import React from 'react';
import '../Home/home.scss';
import homeBg from '../../assets/img/home-bg.jpg';
import HowItWorks from '../../Layout/HowItWorks/HowItWorks';
import Story from '../../Layout/Story/Story';

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home__content">
          <h1 className="home__title"> Be aware, Manage well.</h1>
          <div className="home__text">
            <p>
              Everyone experiences stress in different ways. Let Alivio guide
              you, in a personalized journal experience, to overcome your
              stress.
            </p>
          </div>
          <div className="home__btn">
            <a className="btn btn-big" href="#!">
              Find Your Way
            </a>
          </div>
        </div>
        <div className="home__img-big">
          <img src={homeBg} alt="Girl" />
        </div>
      </div>
      <HowItWorks />
      <Story />

    </div>
  );
};

export default Home;
