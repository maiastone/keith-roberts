import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const About = () => {
  return (
    <div>
      <Header />
      <div className='about-container'>
        <div className='about-content'>
          <img src ='https://www.zenman.com/wp-content/uploads/2015/05/keith_a-300x300.jpg'/>
          <p>
            A graduate of Brooks Institute of Photography, Keith worked with some of the top artists and agencies before starting Zenman in 1998. He has been working as a designer for 19 years and as a photographer for more than 20.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

module.exports = About;
