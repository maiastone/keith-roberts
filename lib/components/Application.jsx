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
      filter: 'featured',
      currentImage: 0,
      modalIsOpen: false,
      filtered: photos,
    };
  }

  componentDidMount() {
    this.setState({
      filter: this.props.pathname,
      filtered: this.filterPhotos(this.props.pathname),
    });
  }

  toggleModal(e, index) {
    this.setState({
      currentImage: index,
      modalIsOpen: !this.state.modalIsOpen,
    });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  filterPhotos(filter) {
    if (filter === 'featured' || filter === '') {
      return photos;
    } else {
      return photos.filter(function (photo) {
        return photo.category === filter;
      });
    }
  }

  clickPrev() {
    const { currentImage, filtered } = this.state;
    this.setState({
      currentImage: filtered[currentImage - 1] ? currentImage - 1 : filtered.length - 1,
    });
  }

  clickNext() {
    const { currentImage, filtered } = this.state;
    this.setState({
      currentImage: filtered[currentImage + 1] ? currentImage + 1 : 0,
    });
  }

  render() {
    const imageURL = this.state.filtered[this.state.currentImage].imgLink;
    return (
      <div>
        <Header />

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
                  backgroundImage: `url(${imageURL})`,
                } }
              >
              </section>
              <div className='arrow-container'>
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
              </div>
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
