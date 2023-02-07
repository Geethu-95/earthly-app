import { Col, Container, Row } from "react-bootstrap";

export default function Product() {
  return (
  <div style={{ width: "100%",backgroundColor: "#ACD1A0" }}>
    <Container style={{ width: "100%",backgroundColor: "#ACD1A0" }}>
    <Row >
        <Col className="justify-content-center">
            <img src={require('../images/BAMBOO.PNG')} style={{height:'150px',width:'200px'}}/>
           <div style={{width:'400px',marginLeft:'35%'}}> 
           <b>Reusable Bamboo Straws.</b><p style={{color:'white'}}>
We collaborated with artisans in Veitnam, Earthly Organic Bamboo Straws are 100% 
Compostable, Vegan and BPA free. They can be reused, thrown in a compost bin, or 
even in your backyard. Serve with cold beverages like ice tea, cold coffee and many
 more.</p>
           </div>
        </Col>
    </Row>
    <Row>
        <Col>
        <img src={require('../images/BOXES.PNG')} style={{height:'150px',width:'200px'}}/>
        <div style={{width:'400px',marginLeft:'20%'}}> 
           <b>Plant Based Reusable Containers.</b><p style={{color:'white'}}>
           Sourced from local farmers, plant residue from Bamboo, Wheat, Rice, 
and Barley is processed and molded into reusable containers which
 can be used hundreds of times.Microwave safe, seal proof, and sturdy, 
they are perfect to store snacks or lunch.Designed in USA. Tested in 
Germany.</p>
           </div>
        </Col>

        <Col>
        <img src={require('../images/LOOFAH.PNG')} style={{height:'150px',width:'200px'}}/>
        <div style={{width:'400px',marginLeft:'20%'}}> 
           <b>Natural Bamboo Loofah.</b><p style={{color:'white'}}>
           Natural loofah sponges actually come from the fruits of vine-growing
 Luffa plants.
These plants are part of the gourd family (Cucurbitaceae) making them 
relatives of watermelons, cucumbers and pumpkins.</p>
           </div>
        </Col>
    </Row>
    <Row>
        <Col>
        <img src={require('../images/KIT.PNG')} style={{height:'200px',width:'350px'}}/>
        <div style={{width:'400px',marginLeft:'35%',fontSize:'25px',color:'white'}}> 
           <b>SUSTAINABILITY STARTER KIT</b>
          
           </div>
        </Col>
    </Row>
    <Row>
        <Col>
        <img src={require('../images/CUPS.PNG')} style={{height:'150px',width:'200px'}}/>
        <div style={{width:'400px',marginLeft:'20%'}}> 
           <b>Plant Based Reusable Cups.</b><p style={{color:'white'}}>
           Barista's love it!Easy to clean, hassle free and Plant Based.
Sourced from local farmers, plant residue from Bamboo, 
Wheat, Rice, and Barley is processed and molded into reusable
 cups which can be used hundreds of times.
So, every batch is unique, Just. Like. You.</p>
           </div>
        </Col>
        <Col>
        <img src={require('../images/BRUSH.PNG')} style={{height:'150px',width:'200px'}}/>
        <div style={{width:'400px',marginLeft:'20%'}}> 
           <b>Bamboo Toothbrush (set of 2).</b><p style={{color:'white'}}>
           Earthly Bamboo Toothbrush are BPA free, Biodegradable and 
have charcoal infused bristles that help remove stains effectively. 
We guarantee your satisfaction. See for yourself!</p>
           </div>
        </Col>
    </Row>
  </Container>
  </div>
  )
}
