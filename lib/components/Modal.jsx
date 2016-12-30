import React, { Component } from 'react';
import photos from '../photos.js';

class Modal extends React.Component {
  render(){
    const styles = {
      modalIsOpen: {
        background: 'white',
        boxShadow: '0 0 12px 0 rgba(0,0,0,.2)',
        margin: '2rem',
        padding: '2rem',
        transform: 'translate Y(0%)',
        transition: 'all 1s ease',
      },
      modalIsClosed: {
        display: 'none',
        transform: 'translate Y(-100%)',
        transition: 'all 1s ease',
      },
    };

    const modalStyles = this.props.open ? styles.modalIsOpen : styles.modalIsClosed;
    return (
      <div style={modalStyles}>{this.props.children}</div>
    );
  }
}
module.exports = Modal;
