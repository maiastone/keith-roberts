import React, { Component } from 'react';
import photos from '../photos.js';

class Modal extends React.Component {
  render() {
    const styles = {
      modalIsOpen: {
        transform: 'translate Y(0%)',
        transition: 'all 1s ease',
        position: 'fixed', /* Stay in place */
        left: '0',
        top: '0',
        padding: '2rem',
        marginTop: '11%', /* Location of the box */
        overflow: 'auto', /* Enable scroll if needed */
        backgroundColor: 'rgba(0,0,0,0.9)', /* Black w/ opacity */
        background: 'white',
        boxShadow: '0 0 12px 0 rgba(0,0,0,.2)',
        width: '100%',
        height: '89%',
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
      <div
        style={modalStyles}>
        {this.props.children}
      </div>
    );
  }
}
module.exports = Modal;
