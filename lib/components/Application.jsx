import React, { Component } from 'react';
import Gallery from './Gallery.jsx';
import Header from './Header.jsx';
import Modal from './Modal.jsx'
import photos from '../photos.js';

class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      currentImage: 0,
      modalIsOpen: false,
    };
  }

  toggleModal() {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
    });
  }

  render() {
    const images = [];
    images.push(photos.map(function (photo) {
      return photo.imgLink;
    }));
    return (
      <div>
        <Header />

      <div>
        <button id='modal-button'>
          <a id='modal-button-font'
            href='#'
            onClick={this.toggleModal.bind(this)}>
            {this.state.modalIsOpen ? 'Close Slideshow' : 'Open Slideshow'}
          </a>
        </button>

          <Modal open={this.state.modalIsOpen}>
            <img className='modal-photo' src='./lib/styles/images/undersea/just-love-cc.jpg'/>
          </Modal>

        </div>
        <Gallery />
      </div>
    );
  }
}

module.exports = Application;
