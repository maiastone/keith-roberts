import React, { Component } from 'react';
import { Link } from 'react-router';


class Header extends React.Component {

  openNav() {
    document.getElementById("theNav").style.height = "100%";
  }

  closeNav() {
    document.getElementById("theNav").style.height = "0%";
  }

  render() {
    return (
          <div>
            <nav className='header-container'>
                <div className='left-side-header'>
                  <img className='logo' src='./lib/styles/images/logo.svg'/>
                  <h1>Keith Roberts <span>Photography</span></h1>
                </div>
                <div className='right-side-header'>
                  <button onClick={() => this.openNav()}>Menu</button>
                </div>

              <div id='theNav' className='overlay'>
                <a href="javascript:void(0)"
                  className="closebtn" onClick={() => this.closeNav()}
                  >&times;</a>
                <div className='overlay-content'>
                  <Link to='/'>Featured</Link>
                  <Link to='/about'>About</Link>
                  <Link to='/fine-art'>Fine Art</Link>
                  <Link to='/commercial'>Commercial</Link>
                </div>
              </div>

            </nav>
            {this.props.children}
          </div>
    );
  }
}

module.exports = Header;
