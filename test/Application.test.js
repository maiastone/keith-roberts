import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import Application from '../lib/components/Application.jsx';
import Header from '../lib/components/Header.jsx';
import Gallery from '../lib/components/Gallery.jsx';
import Footer from '../lib/components/Footer.jsx';
import photos from './helpers/photos.js';


describe('Application', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<Application />);
    assert.equal(wrapper.type(), 'div');
  });
  it('should have a default currentImage state of 0', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.state().currentImage).to.equal(0);
  });
  it('should have a default state of modal closed', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.state().modalIsOpen).to.be.false;
  });
  it.skip('should have a default filtered state which displays all photos(not filtered)', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.state().filtered).to.equal([photos]);
  });
  it('should render the header component', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find(<Header />).length, 1);
  });
  it('should render the Gallery component', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find(<Gallery />).length, 1);
  });
  it('should render the Footer component', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find(<Footer />).length, 1);
  });
  it.skip('should open the modal when an image is clicked', () => {
    const wrapper = shallow(<Application
      photos={photos}/>);
    wrapper.setState({ modalIsOpen: false });
    wrapper.find('#1').simulate('click');
    assert.equal(wrapper.state().modalIsOpen).to.equal(true);
  });
});
