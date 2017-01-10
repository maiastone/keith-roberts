import React, { Component } from 'react';


class Header extends React.Component {
  render() {
    return (
      <div className='footer-container'>
        <img src='./lib/styles/images/icons/linkedin.svg'/>
        <img src='./lib/styles/images/icons/mail.svg'/>
        <img src='./lib/styles/images/icons/twitter.svg'/>
        <img src='./lib/styles/images/icons/sphere.svg'/>
      </div>
    );
  }
}

module.exports = Header;
