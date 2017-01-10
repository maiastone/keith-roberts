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
            key={index}>
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
            <Link to='/'
              id='gallery' className='filters'
              onClick={() => this.props.updateFilter('featured')}
            >
            Featured
            </Link>

            <Link to='/fine-art'
              id='fine-art' className='filters'
            >
            Fine Art
            </Link>

            <Link to='/undersea' className='filters'
              onClick={() => this.props.updateFilter('undersea')}
            >
            Undersea
            </Link>
          </div>

          <Masonry
            elementType={'ul'}
            options={masonryOptions}
          >
            {this.createPhotoList(this.props.toggleModal)}
          </Masonry>
        </div>
    );
  }
}

module.exports = Gallery;
