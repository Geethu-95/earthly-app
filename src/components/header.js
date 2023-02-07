import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";

export default function Header() {
  return (
    <>
      <Navbar
        style={{
          background: "rgb(123,63,0)",
          background:
            "linear-gradient(90deg, rgba(123,63,0,1) 0%, rgba(123,97,0,1) 35%)",
        }}
      >
        <Container className="justify-content-center">
          <Navbar.Brand href="#home">
            <Container>
              <Row>
                <Col>
                  <img
                    alt=""
                    src={require("../images/earthly.png")}
                    width="90"
                    height="90"
                    className="d-inline-block align-top"
                  />
                </Col>
                <Col>
                  <h1 style={{ color: "white", fontFamily: "arial black" }}>
                    <b>earthly</b>
                  </h1>
                  <h5 style={{ color: "white", fontFamily: "arial" }}>
                    Sustainable products at affordable prices
                  </h5>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Nav className="justify-content-center" activeKey="/home">
                    <Nav.Item>
                      <Nav.Link
                        style={{ color: "#E0D14B", fontFamily: "arial black" }}
                        href="/home"
                      >
                        Home
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        style={{ color: "#E0D14B", fontFamily: "arial black" }}
                        eventKey="link-1"
                      >
                        About
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        style={{ color: "#E0D14B", fontFamily: "arial black" }}
                        eventKey="link-2"
                      >
                        Shop
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link
                        style={{ color: "#E0D14B", fontFamily: "arial black" }}
                        eventKey="link-2"
                      >
                        Blog
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link
                        style={{ color: "#E0D14B", fontFamily: "arial black" }}
                        eventKey="link-2"
                      >
                        Contact Us
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                {/* <Col style={{marginRight:'15px'}}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control type="email" placeholder="Search..." />
                        </Form.Group>
                  </Col> */}
              </Row>
            </Container>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
