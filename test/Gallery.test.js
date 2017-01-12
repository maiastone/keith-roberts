import React from 'react';
import { Link, BrowserRouter, Match, Miss, MemoryRouter } from 'react-router';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import sinon from 'sinon';
import Gallery from '../lib/components/Gallery.jsx';
import photos from './helpers/photos.js';
import Masonry from 'react-masonry-component';
import Application from '../lib/components/Application.jsx';


describe('Gallery', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<Gallery />);
    assert.equal(wrapper.type(), 'div');
  });
  it('renders the Masonry component', () => {
    const wrapper = shallow(<Gallery />);
    expect(wrapper.find(<Masonry />).length, 1);
  });
  it('should have the toggleModal function as props', () => {
    const wrapper = shallow(<Gallery
      toggleModal={(e, index) => this.toggleModal(e, index)} />);
    assert.isObject(wrapper.props('toggleModal'));
  });
  it('should receive the state of filtered as props', () => {
    const wrapper = shallow(<Gallery filtered={photos} />);
    assert.isObject(wrapper.props('filtered'));
  });
  it('should hold an array of photos', () => {
    const wrapper = shallow(<Gallery filtered={photos} />);
    expect(photos.length).to.equal(4);
  });
  it('should render a ul', () => {
    const wrapper = shallow(<Gallery />);
    expect(wrapper.find('ul').length, 1);
  });
  it.skip('should call the `toggle` function onClick', () => {
    const toggleModal = sinon.stub();
    const wrapper = shallow(<MemoryRouter><Gallery toggleModal={toggleModal} /></MemoryRouter>);
    expect(toggleModal.callCount).to.equal(0);
    wrapper.find('#test-click').at(0).simulate('click');
    expect(toggleModal.callCount).to.equal(1);
  });
});
