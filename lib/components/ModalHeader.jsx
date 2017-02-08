import React, { Component } from 'react';
import { Link } from 'react-router';
import Modal from './Modal.jsx';


class ModalHeader extends React.Component {

  render() {
    return (
          <div>
            <nav className='header-container'>
                <div className='left-side-header'>
                  <img className='logo' src='./lib/styles/images/logo.png'/>
                  <h1>Keith Roberts</h1>
                </div>
                <div className='right-side-header'>
                </div>
            </nav>
          </div>
    );
  }
}

module.exports = ModalHeader;
