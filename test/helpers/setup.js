require('babel-register')({
  presets: ["react", "es2015"]
})

require('babel-polyfill')

global.document = require('jsdom').jsdom(`
  <head>
    <meta charset="utf-8">
    <title>KR-Photography</title>
  </head>
  <body>
    <div class="application"></div>
    <script src="main.bundle.js"></script>
  </body>
`);
global.Element = function () {};
global.HTMLElement = () => {};
global.window = document.defaultView;
global.navigator = window.navigator;
global.getComputedStyle = global.window.getComputedStyle;
