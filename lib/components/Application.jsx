import React, { Component } from 'react';
import Gallery from './Gallery.jsx';
import Header from './Header.jsx';
import Modal from './Modal.jsx'
import photos from '../photos.js';
// <img className='modal-content'
//   src={photos[this.state.currentImage].imgLink}/>
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
      currentImage: index - 1,
    });
  }

  clickNext(e, index) {
    this.setState({
      currentImage: index,
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
    })
  }

  render() {
    return (
      <div>
        <Header />
        <div className='modal-container'>
          <Modal
             open={this.state.modalIsOpen}>
            <button
              className='close'
            > X
            </button>

            <div
              className='modal-div'
               style={ {
                 backgroundImage: 'url(' + photos[this.state.currentImage].imgLink + ')',
               } }
            >
            </div>

            <button
              onClick={(e, index) => this.clickNext(e, index)}
            > >
            </button>
          </Modal>
        </div>
        <Gallery
          toggleModal={(e, index) => this.toggleModal(e, index)}
        />
      </div>
    );
  }
}

module.exports = Application;
