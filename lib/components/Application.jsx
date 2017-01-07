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
      currentImage: index,
    });
  }

  clickPrev() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  clickNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
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
              onClick={() => this.closeModal()}
            > X
            </button>

            <section
              className='modal-div'
               style={ {
                 backgroundImage: 'url(' + photos[this.state.currentImage].imgLink + ')',
               } }
            >
            </section>

            <button
              onClick={(e, index) => this.clickPrev(e, index)}
            > >
            </button>

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
