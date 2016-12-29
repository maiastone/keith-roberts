import React, { Component } from 'react';

class LightBox extends React.Component {

  openModal() {
    document.getElementById('myModal').style.display = "block";
  }

  closeModal() {
    document.getElementById('myModal').style.display = "none";
  }


  plusSlides(n) {
    showSlides(slideIndex += n);
  }

  currentSlide(n) {
    showSlides(slideIndex = n);
  }

  showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }

render() {
  return(
    <div>
    <div className="row">
      <div className="column">
        <img src="http://placehold.it/300x300"   onClick={() => this.openModal()}
        onClick={() => this.currentSlide(1)} className="hover-shadow cursor" />
      </div>

    </div>

    <div id="myModal" className="modal">
      <span className="close cursor" onClick={() => this.closeModal()}>&times;</span>
      <div className="modal-content">

        <div className="mySlides">
          <img src="http://placehold.it/600x200"/>
        </div>

        <div className="mySlides">
          <img src="http://placehold.it/200x400"/>
        </div>

        <div className="mySlides">
          <img src="http://placehold.it/300x300"/>
        </div>

        <div className="mySlides">
          <img src="http://placehold.it/300x300"/>
        </div>

        <a className="prev" onClick={this.plusSlides(-1)}>&#10094;</a>
        <a className="next" onClick={this.plusSlides(1)}>&#10095;</a>

      </div>
    </div>
    </div>
  );
}
}

module.exports = LightBox;
