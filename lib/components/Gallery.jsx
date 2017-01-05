import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import photos from '../photos.js';

const masonryOptions = {
  transitionDuration: 1,
};
const style = {
  margin: 5,
};

class Gallery extends React.Component {

  createPhotoList(toggle) {
    return photos.map(function (photo) {
      return (
        <li className='photo-list'
          key={photo.id}>
            <img
              className='modal-content'
              src={photo.imgLink}
              onClick={(e) => toggle(e, photo.id)}
            />
        </li>
      );
    });
  }

  render() {
    return (
      <div className=''>
        <div className='gallery-container'></div>

          <Masonry
            className={'masonry'}
            elementType={'ul'}
            options={masonryOptions}
            style={style}
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
