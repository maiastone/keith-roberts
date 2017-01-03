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
      currentImage: index,
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


          <Modal open={this.state.modalIsOpen}>
            <img className='modal-photo' src='./lib/styles/images/undersea/just-love-cc.jpg'/>
          </Modal>

        </div>
        <Gallery toggleModal={(e, index) => this.toggleModal(e, index)}/>
      </div>
    );
  }
}

module.exports = Application;
