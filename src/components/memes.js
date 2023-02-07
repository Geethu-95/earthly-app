import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Typewriter } from "react-simple-typewriter";
import Button from "react-bootstrap/Button";
import m1 from '../images/m1.PNG'

export default function Memes() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{height:'500px',width:'360px',}}>
    <Carousel fade 
        activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
       
          <img
            className="d-block w-90"
            src={require("../images/m1.PNG")}
            alt="First meme"
          />
       
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-90"
          src={require("../images/m2.PNG")}
          alt="Second meme"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-90"
          src={require("../images/m3.PNG")}
          alt="Third meme"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}
