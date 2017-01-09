import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import photos from '../photos.js';

const masonryOptions = {
  transitionDuration: 1,
};

class Gallery extends React.Component {

  createPhotoList(toggle) {
    if (this.props.filtered) {
      return this.props.filtered.map(function (photo, index) {
        return (
          <li className='photo-list'
            key={photo.id}>
              <img
                className='modal-content'
                src={photo.imgLink}
                onClick={(e) => toggle(e, index)}
              />
          </li>
        );
      });
    }
  }


  render() {
    return (
        <div className='gallery-container'>
            <Masonry
              elementType={'ul'}
              options={masonryOptions}
              disableImagesLoaded={false}
              updateOnEachImageLoad={false}
            >
              {this.createPhotoList(this.props.toggleModal)}
            </Masonry>
        </div>
    );
  }
}

module.exports = Gallery;
