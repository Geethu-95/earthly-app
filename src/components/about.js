import { Col, Container, Row } from "react-bootstrap";

export default function About() {

    return(

        <>
        <div style={{backgroundColor:'#E1C16E'}}>
            <Container>
                <Row>
                    <Col>
                    <img src={require('../images/rrr.jpg')} style={{width:'45%',height:'80%',marginTop:'60px'}}/>
                    </Col>

                    <Col>
                    <Row>
                        <Col>
                      <p style={{fontFamily:'arial black',fontSize:'50px',marginTop:'60px',}}> About <span style={{color:'green'}}>earthly</span> </p> 
                      <p style={{marginBottom:'60px'}}>It’s high time for all of us to think about our impression and capacity to lessen the waste and its impacts on the climate. This must be finished by settling on a responsible choice of utilizing eco-friendly products. Earthly Eco-friendly products like bamboo toothbrushes, bamboo straws,plant-based coffee cups, and many sustainable products are items that are not unsafe to the climate.  These are items produced using sustainable and organic raw materials. Earthly products are of the best quality and in the best designs. What’s more, it’s shockingly easy to roll out sure improvements to your way of life just by sorting out where to begin. Rather than utilizing a plastic cup, trade it for eco-friendly cups and eco-friendly containers. Earthly organic products are the most affordable option in the market. The other alternatives are expensive and lack quality.</p>
                        </Col>
                    </Row>
                    </Col>
                </Row>
            </Container>

        </div>
        </>
    )
}