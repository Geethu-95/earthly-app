import { Col, Container, Row } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import styles from "../styles/styles.css";
import tree from "../images/tree.jpg";
import Button from 'react-bootstrap/Button';
import Memes from "./memes";
import News from "./news";
import plant from '../images/plant.png'

export default function HomeNew() {
  return (
    <>
    <div style={{ height: "100%", width: "100%",backgroundColor:'white' }}>
      <Container className="justify-content-center">
        <Row>
          <Col sm={12} lg={6}>
            <div style={{ height: "100%", width: "100%" }}>
              <p style={{ fontSize: "20px", fontFamily: "arial black" ,marginTop:'20%',color:'green'}}>
                Join the Revolution. Make it possible.The Sustainability starter
                kit is all you need.
              </p>
              <img src={plant} height='80px' width='80px'/>
              <p style={{ fontSize: "40px", fontFamily: "arial black",color:'orange',textShadow:'2px 2px 2px 2px red' }}>
                <Typewriter
                  words={[
                    "Living sustainably shouldn't be expensive. Become sustainable!",
                  ]}
                  loop={5}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </p>
              <Button variant="danger" size="lg" style={{fontFamily:'arial black',marginBottom:'20%'}}>Start Today</Button>
            </div>
          </Col>
          <Col sm={12} lg={6}>
            <div style={{marginTop:'10%',marginLeft:'10%'}}>
            {/* <img src={tree} height='100%' width='100%' style={{marginTop:'20%',marginBottom:'5%'}}/> */}
            <News/>
            </div>
            
          </Col>
        </Row>
      </Container>
      </div>
    </>
  );
}
