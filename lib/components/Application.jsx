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
      modalIsOpen: !this.state.modalIsOpen
    });
  }

  render() {
    const images = [];
    images.push(photos.map(function(photo) {
      return photo.imgLink;
    }));
    return (
      <div>
        <Header />
        <div>
          <a href='#'
            onClick={this.toggleModal.bind(this)}>
            {this.state.modalIsOpen ? 'Close Modal': 'Open Modal'}
          </a>
          <Modal open={this.state.modalIsOpen}>
            {images}
          </Modal>
        </div>
        <Gallery />
      </div>
    );
  }
}

module.exports = Application;
