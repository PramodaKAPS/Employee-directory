import React from 'react';
import { Carousel } from 'react-bootstrap';

const CustomCarousel = () => {
  return (
   
    <div className="right-box">
      <div class="carousel-container">
    <Carousel>
      <Carousel.Item>

      <Carousel.Caption>
            <h3>Your Sri Lankan Identify in Cyberspace</h3>
            <p></p>
          </Carousel.Caption>
        <img
          className="d-block w-100"
          src="/images/homepage.jpg" // Updated path
          alt="First slide"
        />
        
      </Carousel.Item>
    
    </Carousel>
    </div>
    </div>
  );
}

export default CustomCarousel;
