import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import photos from '../photos.js';
import { Link } from 'react-router';

const masonryOptions = {
  transitionDuration: 1,
};

class Gallery extends React.Component {

  createPhotoList(toggle) {
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


  render() {
    return (
        <div className='gallery-container'>
          <div className='button-container'>
            <button
              id='gallery' className='filters'
              onClick={() => this.props.updateFilter('featured')}
            >
            Featured
            </button>

            <button
              id='fine-art' className='filters'
              onClick={() => this.props.updateFilter('fine-art')}
            >
            Fine Art
            </button>

            <button className='filters'
              onClick={() => this.props.updateFilter('undersea')}
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
