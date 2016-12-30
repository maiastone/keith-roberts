import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import photos from '../photos.js';

// Yea so you will have to have the imageUrl in the modal, be a reference by index so that when you click "right" you just increment the index, and the "left" decrement the index of the array with image urls

// so the modal should be a React component that get's two props

// the array of objects that have the imageUrls, and the index (id, key, whatever you want to call it)

// Then you will have some simple state, that represents the index prop so that you can actually increment and decrement the index

const masonryOptions = {
  transitionDuration: 1,
};

class Gallery extends React.Component {

  render() {

    const childElements = photos.map(function(photo) {
      return (
        <li className='li'
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
