import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import Application from '../lib/components/Application.jsx';
import Header from '../lib/components/Header.jsx';

describe('Header', () => {
  it('renders an <h1> tag', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').length, 1);
  });
  it('renders 3 <button> tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('button').length, 3);
  });
});
