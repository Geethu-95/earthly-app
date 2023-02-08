import { Col, Container, Row } from "react-bootstrap";
import earth from "../images/holding-earth.jpg";
import cup from "../images/dirty-cup.jpg";
import expenditure from "../images/expenditure.jpg";
import survey from "../images/survey.jpg";
import Button from "react-bootstrap/Button";
import award from "../images/award.jpg";
import hbd from "../images/hbd.jpg";

export default function NewsNew() {
  return (
    <>
    <div style={{width:'700px',height:'650px', backgroundColor: "#F0E68C",
            // border: "2px solid brown",
            height: "460px",
            width: "650px",
            overflow: "auto",}}>

<p
            style={{
              fontSize: "20px",
              fontFamily: "arial black",
              color: "red",
              marginTop:'2%'
            }}
          >
            Latest Product News
          </p>
      <Container>
        <Row style={{marginTop:'5%'}}>
          <Col>
            <div className="card" style={{width: "20rem",height:'94%'}}>
              <img src={award} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text" style={{fontSize:'10px'}} align='left'>
                <b> Our idea won the National award of Innovation of...</b>
                </p>
              </div>
            </div>
          </Col>

          <Col>
            <Row>
              <div className="card mb-3" style={{maxWidth: "500px"}}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={hbd} className="img-fluid rounded-start" alt="..." style={{marginTop:'35%'}}/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body" align='left'>
                      <h6 className="card-title">Celebrations!</h6>
                      <p className="card-text" style={{fontSize:'10px'}}>
                       Our bio-degradable cups were used at a birthday...
                      </p>
                      <p className="card-text" style={{fontSize:'10px'}}>
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Row>

            <Row>
              <div className="card mb-3" style={{maxWidth:"500px"}}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={survey} className="img-fluid rounded-start" alt="..." style={{marginTop:'35%'}}/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body" align='left'>
                      <h6 className="card-title">National survey</h6>
                      <p className="card-text" style={{fontSize:'10px'}}>
                        In the survey held last...
                      </p>
                      <p className="card-text" style={{fontSize:'10px'}}>
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
        <Row style={{marginBottom:'5%'}}>
          <Col>
          <div className="card" style={{width: "11rem"}}>
              <img src={cup} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text" style={{fontSize:'10px'}} align='left'>
                  New! Biodegradable cups...
                </p>
              </div>
            </div>
          </Col>

          <Col>
          <div className="card" style={{width: "11rem"}}>
              <img src={expenditure} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text" style={{fontSize:'10px'}} align='left'>
                  The expenditure for preservation...
                </p>
              </div>
            </div>
          </Col>

          <Col>
          <div className="card" style={{width: "11rem"}}>
              <img src={survey} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text" style={{fontSize:'10px'}} align='left'>
                  The expenditure for preservation...
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    </>
  );
}
