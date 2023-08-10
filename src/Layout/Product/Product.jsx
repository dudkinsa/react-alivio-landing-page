import React from 'react';
import './product.scss';
import photoWoman from '../../assets/img/photo.jpg';
import Card from '../Card/Card';

const Product = () => {
  return (
    <div className="product">
      <div className="container">
        <div className="product__row">
          <div className="product__img-wrapper">
            <img className="product__img" src={photoWoman} alt="woman" />
            <div className="product__card">
                <Card />

            </div>
           
          </div>
          <div className="product__content">
            <h2 className="product__content-title">Our product</h2>
            <h3 className="product__content-subtitle">
              You tell us your stress, We make your diary
            </h3>
            <div className="product__content-text">
              <p>
                Everyone experiences it, and in different ways. Let Alivio guide
                you, in a personalized journal experience, to overcome your
                stress.
              </p>
            </div>
            <div className="product__content-btn">
              <a className="btn btn-big" href="#!">
                Find Your Way
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
