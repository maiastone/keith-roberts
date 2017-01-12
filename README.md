## Keith Roberts Photography  

A clean and smooth photography website, built with React, React-Router, JavaScript, and Sass.   

![](http://g.recordit.co/BaUjP3iSww.gif)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To fire up a development server:

`npm start`  

To Run Test Suite:  

`npm test`  

Once the server is running, you can visit:

* `http://localhost:8080` to run your application.   
* `http://localhost:8080/webpack-dev-server/test.html` to run your test suite in the browser.   

## Reflection

This was a 3 week long project built during my third module at Turing School of Software and Design. I wanted to    focus on a more visual and creative project, and found the opportunity to build this site photography website.  Project goals included creating a beautiful and smooth responsive design to captivate the user and keep them on the site.  The photographer client wanted a site to showcase his work, and get new clients for either fine art or commercial work.  He wanted lots of big images, little text, filtering capability, and plenty of whitespace.   

My initial research spike including looking at trends in photography websites, and how to best deal with image handling and loading.  I create several wireframes in sketch to share with the client, and decided on a direction.   

One of the first challenges I ran into was figuring out how to display the grid.  I used a library called React-Masonry-Component but also discovered that didn't give me the exact margins I wanted, so I also used a Sass grid created using simple math.  I originally wanted to create a design that 'broke the grid', where there would be extra white space, and some images larger than others, so not fixed to a specific row height or column width.  I couldn't find a solution that would be scalable and responsive in the time allotted for the project, but will look into alternative solutions for future iterations.  I added several subtle and pleasing transitions, when resizing the screen, hovering over an image, and opening the modal.   

I wanted to use react for this project not only to solidify my knowledge of the tool, but because the dynamic rendering would make for a smooth filtering experience.  Additionally, I implemented react router and learned how to use links to create pathnames, and set state according to the pathname, and trigger the render of the correct images based on the filter applied by the link and the pathname.   

Tools and tech used include: react, react router, webpack, sass, enzyme.  Sass enabled me to split out CSS files, uses variables, nesting, and the grid system.  Testing this project required an additional workaround when using mount on components that include react router links.  In the test, wrapping the component in a <MemoryRouter> enabled the test to run through the router links.   

The site will be live and hosted on the client hosting service when more images are loaded and more categories, subcategories, and filters are created.  We will also look into using Amazon Web Services or something similar to store the photos in the cloud.  I would also like to add an admin side to the site, so the client can easily upload the images, add a category to the images.   
