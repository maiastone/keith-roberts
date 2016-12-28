import React, { Component } from 'react';
import Gallery from './Gallery.jsx';
import Header from './Header.jsx';

class Application extends React.Component {


  render() {
    return (
      <div>
      <Header />
      <Gallery />
      </div>
    );
  }
}

module.exports = Application;
