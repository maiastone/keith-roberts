import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import { Link, BrowserRouter, Match, Miss, MemoryRouter } from 'react-router';
import sinon from 'sinon';
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
  it('should have a default filter of "featured"', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.state().filter).to.equal('featured');
  });
  it('should have a default state of modal closed', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.state().modalIsOpen).to.be.false;
  });
  it('should have a default filtered state which displays all photos(not filtered)', () => {
    const wrapper = shallow(<Application />);
    expect((wrapper.state().filtered).length, 19);
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
  it.skip('should call componentDidMount', () => {
    sinon.spy(Application.prototype, 'componentDidMount');
    const wrapper = mount(<MemoryRouter><Application /></MemoryRouter>);
    expect(Application.prototype.componentDidMount).to.have.property('callCount', 1);
    Application.prototype.componentDidMount.restore();
  });
  it.skip('should open the modal when an image is clicked', () => {
    const wrapper = mount(<MemoryRouter><Application
      photos={photos}/></MemoryRouter>);
      wrapper.find('#1').simulate('click');
      assert.equal(wrapper.state('modalIsOpen'),(true));
  });
});
