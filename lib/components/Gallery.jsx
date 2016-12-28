import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import photos from '../photos.js';
import commercial from '../commercial.js';

const masonryOptions = {
  transitionDuration: 1,
};

const Gallery = React.createClass({
  render() {
    const childElements = photos.map(function(photo) {
      return (
        <li className='li' key={photo.id}>
          <img
            className=''
            src={photo.imgLink} />
        </li>
      );
    });
    const childElements2 = commercial.map(function(photo) {
      return (
        <li className='li' key={photo.id}>
          <img
            className=''
            src={photo.imgLink} />
        </li>
      );
    });


    return (
      <div className=''>
            <div className='gallery-container'></div>

        <Masonry
          className={''}
          elementType={'ul'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
        >
        {childElements}

        {childElements2}
        </Masonry>
      </div>
    );
  },
});

module.exports = Gallery;
