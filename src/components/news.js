import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import earth from "../images/holding-earth.jpg";
import cup from "../images/dirty-cup.jpg";
import expenditure from "../images/expenditure.jpg";
import survey from "../images/survey.jpg";
import Button from "react-bootstrap/Button";
import award from "../images/award.jpg";
import hbd from "../images/hbd.jpg";

export default function News() {
  return (
    <>
      <div style={{ marginBottom: "20%" }}>
        <div
          style={{
            backgroundColor: "#F0E68C",
            // border: "2px solid brown",
            height: "460px",
            width: "650px",
            overflow: "auto",
          }}
        >
          <p
            style={{
              fontSize: "20px",
              fontFamily: "arial black",
              color: "red",
            }}
          >
            Latest Product News
          </p>

          <p
            style={{
              fontSize: "15px",
              fontFamily: "arial black",
              color: "white",
            }}
          >
            See where our product has reached...
          </p>
          <Container>
            <Row>
              <Row style={{ marginBottom: "2%" }}>
                <Col
                  style={{ margin: "2% 2% 2% 2%", backgroundColor: "white" }}
                >
                  <img src={earth} width="100%" height="100%" />
                </Col>
                <Col>
                  <Row style={{ marginBottom: "2%", backgroundColor: "white" }}>
                    <Col>
                      <img src={hbd} width="100%" height="100%" />
                    </Col>
                    <Col>
                      {/* <Button style={{margin:'5% 2% 2% 2%'}} variant="primary" size="sm">Latest News</Button> */}
                      <p align="left" style={{ fontSize: "10px" }}>
                        Our biodegradable cups were used at a birthday...
                      </p>
                    </Col>
                  </Row>

                  <Row style={{ marginBottom: "2%", backgroundColor: "white" }}>
                    <Col>
                      <img src={expenditure} width="100%" height="100%" />
                    </Col>
                    <Col>
                      <p align="left" style={{ fontSize: "10px" }}>
                        Graph of pollution...Lorem ipsum dolor
                      </p>
                    </Col>
                  </Row>

                  <Row style={{ marginBottom: "2%", backgroundColor: "white" }}>
                    <Col>
                      <img src={survey} width="100%" height="100%" />
                    </Col>
                    <Col>
                      <p align="left" style={{ fontSize: "10px" }}>
                        Environmental survey...Lorem ipsum dolor
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col
                  style={{ margin: "2% 2% 2% 5%", backgroundColor: "white" }}
                >
                  <img src={award} width="100%" height="100%" /> {/* <Row> */}
                  <p align="left" style={{ fontSize: "10px" }}>
                    Our idea won the prestigious...
                  </p>
                  {/* </Row> */}
                </Col>

                <Col
                  style={{ margin: "2% 2% 2% 5%", backgroundColor: "white" }}
                >
                  <img src={cup} width="100%" height="100%" />
                  {/* <Row> */}
                  <p align="left" style={{ fontSize: "10px" }}>
                    New biodegradable cups...
                  </p>
                  {/* </Row> */}
                </Col>
              </Row>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
