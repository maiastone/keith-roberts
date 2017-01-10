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

  toggleModal(e, index) {
    this.setState({
      currentImage: index,
      modalIsOpen: !this.state.modalIsOpen,
    });
  }

  clickPrev() {
    let { currentImage, filtered } = this.state;
    this.setState({
      currentImage: filtered[currentImage - 1] ? currentImage - 1 : filtered.length - 1
    });
  }

  clickNext() {
    let { currentImage, filtered } = this.state;
    this.setState({
      currentImage: filtered[currentImage + 1] ? currentImage + 1 : 0,
    });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  updateFilter(filter) {
    this.setState({ filter });
  }

  filterPhotos() {
    const currentFilter = this.state.filter;
    if (currentFilter === 'featured') {
      return photos;
    } else {
      return photos.filter(function (photo) {
        return (photo.category === currentFilter);
      });
    }
  }

  componentWillReceiveProps() {
    this.setState({
      filter: this.props.pathname.slice(1),
    });
  }

  render() {
    const filteredPhotos = this.filterPhotos();
    return (
      <div>
        <Header
          updateFilter={this.updateFilter.bind(this)}
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
                  backgroundImage: 'url(' + filteredPhotos[this.state.currentImage].imgLink + ')',
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
            updateFilter={this.updateFilter.bind(this)}
            toggleModal={(e, index) => this.toggleModal(e, index)}
            filtered={filteredPhotos}
            currentImage={this.state.currentImage}
          />
        </main>

      <Footer />
      </div>
    );
  }
}

module.exports = Application;
