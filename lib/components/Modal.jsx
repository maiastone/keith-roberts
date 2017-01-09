import React, { Component } from 'react';
import photos from '../photos.js';

class Modal extends React.Component {
  render() {
    const styles = {
      modalIsOpen: {
        transform: 'translate Y(0%)',
        transition: 'all 1s ease',
        position: 'fixed',
        left: '0',
        top: '0',
        padding: '2rem',
        overflow: 'auto',
        backgroundColor: 'rgba(0,0,0,0.9)',
        background: 'white',
        boxShadow: '0 0 12px 0 rgba(0,0,0,.2)',
        width: '100%',
      
        zIndex: '9999',
      },
      modalIsClosed: {
        display: 'none',
        transform: 'translate Y(-100%)',
        transition: 'all 1s ease',
      },
    };

    const modalStyles = this.props.open ? styles.modalIsOpen : styles.modalIsClosed;
    return (
      <div id='modal-div'
        style={modalStyles}>
        {this.props.children}
      </div>
    );
  }
}
module.exports = Modal;
