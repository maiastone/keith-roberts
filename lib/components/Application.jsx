import React, { Component } from 'react';
import Gallery from './Gallery.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Modal from './Modal.jsx';
import photos from '../photos.js';


class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      currentImage: 0,
      modalIsOpen: false,
      filtered: photos,
    };
  }

  toggleModal(e, index) {
    this.setState({
      currentImage: index,
      modalIsOpen: !this.state.modalIsOpen,
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

  filterPhotos(category) {
    const filtered = photos.filter(function (photo) {
      return (photo.category === category);
    });
    this.setState({
      filtered,
    });
  }

  unfilterPhotos() {
    this.setState({
      filtered: photos,
    });
  }

  render() {
    return (
      <div>

        <Header
          filterPhotos={this.filterPhotos.bind(this)}
          unfilterPhotos={this.unfilterPhotos.bind(this)}
        />
        <main>
          <div className='modal-container'>
            <Modal
              open={this.state.modalIsOpen}>
              <button
                className='close'
                onClick={() => this.closeModal()}
              > X
              </button>
              <section
                className='modal-image-div'
                style={ {
                   backgroundImage: 'url(' + this.state.filtered[this.state.currentImage].imgLink + ')',
               } }
              >
              </section>
              <button
                className='arrows'
                onClick={() => this.clickPrev()}
              > {'<'}
              </button>
              <button
                className='arrows'
                onClick={() => this.clickNext()}
              > >
              </button>
            </Modal>
          </div>

          <Gallery
            toggleModal={(e, index) => this.toggleModal(e, index)}
            filtered={this.state.filtered}
            currentImage={this.state.currentImage}
          />
        </main>

      <Footer />
      </div>
    );
  }
}

module.exports = Application;
