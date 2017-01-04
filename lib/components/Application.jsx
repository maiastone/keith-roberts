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

  toggleModal(e, index) {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
      currentImage: index-1,
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          <Modal open={this.state.modalIsOpen}>
            <img src={photos[this.state.currentImage].imgLink}/>
          </Modal>
        </div>
        <Gallery
          toggleModal={(e, index) => this.toggleModal(e, index)}/>
      </div>
    );
  }
}

module.exports = Application;
