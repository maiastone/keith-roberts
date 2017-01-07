const React = require('react');
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import Application from '../lib/components/Application.jsx';
import About from '../lib/components/About.jsx';

import '../lib/styles/main.scss';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={Application} />
        <Match exactly pattern="/about" component={About} />
      </div>
    </BrowserRouter>
  );
};

render(<Root />, document.querySelector('.application'))
