import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import photos from '../photos.js';
import commercial from '../commercial.js';


const masonryOptions = {
  transitionDuration: 1,
};

class Gallery extends React.Component {

  onClick() {
    const modalImg = document.getElementById('myImg');
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
    modalImg.src = this.src;
  }

  handleClick() {
    document.getElementById('myModal').style.display = 'none';
  }

  render() {
    const childElements = photos.map(function(photo) {
      return (
        <li className='li' key={photo.id}>
          <a id='filters2' href=''>{photo.description2}</a>
          <a id='filters1' href=''>{photo.description}</a>
            <img
              id='myImg'
              className='modal-content'
              onClick={() => this.onClick()}
              src={photo.imgLink}
            />
            <div id='myModal' className='modal'>
              <button
                className="close"
                onClick={() => this.handleClick()}
              >&times;
              </button>
            </div>
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
  }
}

module.exports = Gallery;
