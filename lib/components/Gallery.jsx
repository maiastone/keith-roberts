import React, { Component } from 'react';
import photos from '../photos.js'

class Gallery extends React.Component {


  render() {
    const imgCard = photos.map((photo) =>
      <div className ='imgCard' key={photo.id}>
        <h1>{photo.title}</h1>
        <img className='photo' src={photo.imgLink}></img>
      </div>
      );

    return (
      <div>
        {imgCard}
      </div>
    );
  }
}

module.exports = Gallery;
