import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import photos from '../photos.js';
import { IndexLink, Link } from 'react-router';


const masonryOptions = {
  transitionDuration: 1,
};

class Gallery extends React.Component {

  createPhotoList(toggle) {
    if (this.props.filtered) {
      return this.props.filtered.map(function (photo, index) {
        return (
          <li className='photo-list'
            id='test-click'
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
  }


  render() {
    return (
        <div className='gallery-container'>

          <div className='button-container'>

            <Link to='/'
              id='gallery'
              activeClassName='active'
              className='filters'>
            All Work
            </Link>

            <Link to='/fine-art'
              id='fine-art'
              activeClassName='active'
              className='filters'>
            Fine Art
            </Link>

            <Link to='/undersea'
              id='undersea'
              activeClassName='active'
              className='filters'>
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
