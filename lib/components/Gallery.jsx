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
          <div className='button-container'>
            <button
              id='gallery' className='filters'
              onClick={() => this.props.unfilterPhotos()}
            >
            All Work
            </button>

            <button
              id='fine-art' className='filters'
              onClick={() => this.props.filterPhotos('fine-art')}
            >
            Fine Art
            </button>

            <button className='filters'
              onClick={() => this.props.filterPhotos('undersea')}
            >
            Undersea
            </button>
          </div>

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
