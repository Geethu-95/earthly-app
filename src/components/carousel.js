import React, { useState,useEffect  } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Typewriter } from 'react-simple-typewriter'
import Button from 'react-bootstrap/Button';

export default function MyCarousel() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };



    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../images/tree.jpg")}
            alt="First slide"
         
          />
          <Carousel.Caption style={{top: '50%',transform:'translateY(-50%)',bottom: 'initial'}}>
            <p style={{fontSize:'50px',color: "#E0D14B",fontFamily:'arial black'}}>
          <Typewriter
            words={["Living sustainably shouldn't be expensive. Become sustainable!"]}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /></p>
          <Button variant="danger" size="lg" style={{fontFamily:'arial black'}}>Start Today</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../images/plant.jpg")}
            alt="Second slide"
          />
  
          <Carousel.Caption style={{top: '50%',transform:'translateY(-50%)',bottom: 'initial'}}> 
            <p style={{fontSize:'50px',color: "#E0D14B",fontFamily:'arial black'}}>Join the Revolution.
Make it possible.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../images/map.jpg")}
            alt="Third slide"
          />
  
          <Carousel.Caption style={{top: '50%',transform:'translateY(-50%)',bottom: 'initial'}}>
          <p style={{fontSize:'50px',color: "#E0D14B",fontFamily:'arial black'}}>The Sustainability starter kit is all you need to start the revolution. 
          </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }