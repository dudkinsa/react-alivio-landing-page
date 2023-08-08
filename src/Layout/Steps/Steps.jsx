import React from 'react';
import './steps.scss';
import step01 from '../../assets/img/step-01.jpg';
import step02 from '../../assets/img/step-02.jpg';
import step03 from '../../assets/img/step-03.jpg';

const Steps = () => {
  return (
    <>
      <div className="step">
        <h3 className="step__title" data-number="01">
          Personalize
        </h3>
        <div className="step__text">
          <p>
            Answer a quick survey about how you express yourself, what causes
            you stress, and what area would you like to work on. This way, we
            can fully personalize your journal!
          </p>
        </div>
        <div className="step__img-wrapper">
          <img className="step__img" src={step01} alt="step-01" />
        </div>
      </div>
      <div className="step">
        <h3 className="step__title" data-number="02">
          Write & Understand
        </h3>
        <div className="step__text">
          <p>
            Write, draw, reflect, understand. Alivio will guide you through the
            prompts and will help you manage your stress!
          </p>
        </div>
        <div className="step__img-wrapper">
          <img className="step__img" src={step02} alt="step-02" />
        </div>
      </div>
      <div className="step">
        <h3 className="step__title" data-number="03">
          Alivio!
        </h3>
        <div className="step__text">
          <p>
            Now you are aware, and have a way to manage and overcome your own
            stress. What are you waiting for? Alivio today!
          </p>
        </div>
        <div className="step__img-wrapper">
          <img className="step__img" src={step03} alt="step-03" />
        </div>
      </div>
    </>
  );
};

export default Steps;
