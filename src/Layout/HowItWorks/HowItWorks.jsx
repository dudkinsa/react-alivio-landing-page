import React from 'react';
import './howItWorks.scss';

import Steps from '../Steps/Steps';

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <div className="container">
        <div className="how-it-works__header">
          <div className="how-it-works__header-head">
            <h2 className="how-it-works__header-title">How it works</h2>
            <h3 className="how-it-works__header-subtitle">
              Understand & Release the stress in 3 steps
            </h3>
          </div>

          <div className="how-it-works__header-content">
            <p>
              Alivio offers as many journals it takes, tackling different areas
              such as anxiety, overwhelmedness, sadness, or anger, and a variety
              of personal causes, to help you become aware of your emotions, and
              guide you in how to manage stress.
            </p>
          </div>
        </div>
        <div className="how-it-works__steps">
          <Steps />
          
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
