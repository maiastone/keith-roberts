import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import Application from '../lib/components/Application.jsx';
import Header from '../lib/components/Header.jsx';
import Gallery from '../lib/components/Gallery.jsx';
import photos from './helpers/photos.js';


describe('Header', () => {
  it('renders an <h1> tag', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').length, 1);
  });
  it('renders 4 <button> tags', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find('button').length, 4);
  });
  it.skip('should change the state of filtered onClick of the fine-art button', () => {
    const wrapper = shallow(<Header />);
    wrapper.find('#fine-art').simulate('click');
    assert.equal(photos.length).to.be(2);
  });
});
