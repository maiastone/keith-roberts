import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import photos from '../photos.js';

const masonryOptions = {
  transitionDuration: 1,
};

class Gallery extends React.Component {

  render() {
    const childElements = photos.map(function (photo) {
      return (
        <li className='photo-list'
          key={photo.id}>
          <a id='filters2' href=''>{photo.description2}</a>
          <a id='filters1' href=''>{photo.description}</a>
            <img
              className='modal-content'
              src={photo.imgLink}
            />
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
          </Masonry>
      </div>
    );
  }
}

module.exports = Gallery;
