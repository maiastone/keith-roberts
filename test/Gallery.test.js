import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
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
  it.skip('should have the toggleModal function as props', () => {
    const wrapper = mount(<Gallery
      toggleModal={(e, index) => this.toggleModal(e, index)} />);
    assert.isObject(wrapper.props('toggleModal'));
  });
  it.skip('should receive the state of filtered as props', () => {
    const wrapper = mount(<Gallery filtered={photos} />);
    assert.isObject(wrapper.props('filtered'));
  });
  it.skip('should hold an array of photos', () => {
    const wrapper = mount(<Gallery filtered={photos} />);
    expect(photos.length).to.equal(4);
  });
  it.skip('should render a ul', () => {
    const wrapper = mount(<Gallery />);
    expect(wrapper.find('ul').length, 1);
  });
});
