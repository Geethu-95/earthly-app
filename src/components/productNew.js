import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useState ,useEffect} from 'react';
import Button from "react-bootstrap/Button";

export default function ProductNew() {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <div style={{ width: "100%", backgroundColor: "#F0E68C" }}>
          <Container>
            <Row>
              <Col>
                <p
                  style={{
                    width: "100%",
                    fontFamily: "arial black",
                    fontSize: "35px",
                    marginTop: "10%",
                  }}
                  align="center"
                >
                  <b>
                    Ireland Discards more than 200 Million coffee cups a year
                  </b>
                </p>
                <p
                  style={{
                    width: "100%",
                    fontFamily: "arial",
                    fontSize: "20px",
                    marginBottom: "2%",
                  }}
                  align="center"
                >
                  Join us in our mission towards reducing our Carbon Footprint
                  and making Ireland a Zero-waste Circular Economy
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <div style={{ backgroundColor: "#F0E68C" }}>
          <Container>
            <Row>
              <Col>
                <img
                  src={require("../images/KIT.PNG")}
                  style={{ width: "100%", height: "auto" }}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  size="lg"
                  style={{
                    marginTop: "30px",
                    marginBottom: "10%",
                    color: "white",
                    fontFamily: "arial black",
                  }}
                  variant="warning"
                >
                  Shop Now
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <div style={{ width: "100%", backgroundColor: "#ACD1A0" }}>
          <Container>
            <Row>
              <p
                style={{
                  fontFamily: "arial black",
                  color: "green",
                  fontSize: "40px",
                  marginTop: "60px",
                  marginBottom: "5%",
                }}
              >
                The Sustainability Starter Kit
              </p>
            </Row>

            <Row>
              <Col sm={12} lg={6}>
                <div
                  style={{ borderRight: "15px solid green", height: "250px" }}
                >
                  <img
                    src={require("../images/copywriting.png")}
                    height="50px"
                    width="50px"
                  />
                  <p
                    align="center"
                    style={{
                      fontSize: "18px",
                      fontFamily: "arial black",
                      color: "#484848",
                    }}
                  >
                    <b>Contents</b>
                  </p>

                  <ul
                    align="left"
                    style={{ fontFamily: "arial", color: "#484848" }}
                  >
                    <li>2 Bamboo Straws</li>
                    <li>1 Plant Based Reusable Cup with 2 lids</li>
                    <li>1 Natural Loofah</li>
                    <li>1 box of 50 Bamboo Cotton Eartips</li>
                    <li>1 Bamboo Toothbrush</li>
                  </ul>
                </div>
              </Col>

              <Col sm={12} lg={6}>
                <div>
                  <img
                    src={require("../images/feature.png")}
                    height="50px"
                    width="50px"
                  />
                  <p
                    style={{
                      fontSize: "18px",
                      fontFamily: "arial black",
                      color: "white",
                    }}
                    align="center"
                  >
                    {" "}
                    <b> Features</b>
                  </p>
                  <ul
                    style={{
                      color: "white",
                      fontFamily: "arial",
                      marginBottom: "60px",
                    }}
                    align="left"
                  >
                    <li>
                      Govt Approved, Tested, and approved in TUV Rhineland,
                      Germany
                    </li>
                    <li>100% recyclable and non-toxic</li>
                    <li>Leak-Proof</li>
                    <li>
                      Odorless tasteless and doesn't react with hot beverages
                    </li>
                    <li>Lightweight</li>
                    <li>Microwavable</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <div style={{ width: "100%", backgroundColor: "white" }}>
          <Container>
            <Row>
              <Col sm={12} lg={6}>
                <p
                  align="left"
                  style={{
                    width: "400px",
                    color: "#484848",
                    marginTop: "60px",
                  }}
                >
                  <b style={{ fontSize: "30px" }}>Reusable Bamboo Straws</b>
                  <img
                    src={require("../images/bamboo-icon.png")}
                    height="40px"
                    width="40px"
                  />
                  <p style={{ color: "#484848" }}>
                    We collaborated with artisans in Veitnam, Earthly Organic
                    Bamboo Straws are 100% Compostable, Vegan and BPA free. They
                    can be reused, thrown in a compost bin, or even in your
                    backyard. Serve with cold beverages like ice tea, cold
                    coffee and many more.
                  </p>

                  <p>
                    <b>Features</b>
                    <img
                      src={require("../images/feature.png")}
                      height="30px"
                      width="30px"
                    />
                  </p>
                  <ul style={{ marginBottom: "60px" }}>
                    <li>100% natural, toxic-free, vegan </li>
                    <li>Odorless, tasteless, washable, reusable, durable </li>
                    <li>Eco-friendly and sustainable </li>
                    <li>100% Cruelty-free </li>
                    <li>Hand-made by Local Artisans </li>
                    <li>Biodegradable packaging </li>
                  </ul>
                </p>
              </Col>
              <Col sm={12} lg={6}>
                <img
                  src={require("../images/BAMBOO.PNG")}
                  style={{ height: "auto", width: "100%" }}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <div style={{ width: "100%", backgroundColor: "#ACD1A0" }}>
          <Container>
            <Row>
              <Col sm={12} lg={6}>
                <img
                  src={require("../images/BOXES.PNG")}
                  style={{ height: "auto", width: "100%" }}
                />
              </Col>
              <Col sm={12} lg={6}>
                <p
                  align="left"
                  style={{
                    fontSize: "30px",
                    color: "white",
                    marginTop: "60px",
                  }}
                >
                  <b>Plant Based Reusable Containers</b>
                  <img
                    src={require("../images/containers.png")}
                    height="40px"
                    width="40px"
                  />
                </p>
                <p align="left" style={{ color: "white" }}>
                  Sourced from local farmers, plant residue from Bamboo, Wheat,
                  Rice, and Barley is processed and molded into reusable
                  containers which can be used hundreds of times.Microwave safe,
                  seal proof, and sturdy, they are perfect to store snacks or
                  lunch.Designed in USA. Tested in Germany.
                </p>
                <p align="left" style={{ color: "#484848" }}>
                  <b>Features</b>
                  <img
                    src={require("../images/feature.png")}
                    height="30px"
                    width="30px"
                  />
                </p>
                <ul
                  align="left"
                  style={{ color: "#484848", marginBottom: "60px" }}
                >
                  <li>100% recyclable</li>
                  <li>
                    Govt Approved, Tested and approved in TUV Rhineland Germany
                  </li>
                  <li>Chemical Free</li>
                  <li>Easily Portable takeaway containers</li>
                  <li>Odorless tasteless and doesn’t react with hot food</li>
                  <li>Lightweight</li>
                  <li>Microwavable</li>
                  <li>Recyclable and reusable</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <div style={{ width: "100%", backgroundColor: "white" }}>
          <Container>
            <Row>
              <Col sm={12} lg={6}>
                <p
                  align="left"
                  style={{
                    width: "400px",
                    color: "#484848",
                    marginTop: "60px",
                  }}
                >
                  <b style={{ fontSize: "30px" }}>Natural Bamboo Loofah</b>
                  <img
                    src={require("../images/loofah-icon.png")}
                    height="40px"
                    width="40px"
                  />
                  <p style={{ color: "#484848" }}>
                    Natural loofah sponges actually come from the fruits of
                    vine-growing Luffa plants. These plants are part of the
                    gourd family (Cucurbitaceae) making them relatives of
                    watermelons, cucumbers and pumpkins. When a luffa fruit
                    dries out and is peeled, you are left with its fibrous
                    interior, which can be used as a sponge. It is biodegradable
                    and is an organic, eco-friendly exfoliating body scrubber.
                    Both men and women can use it, suitable for shower and
                    bathtub.
                  </p>
                  <p>
                    <b>Features</b>
                    <img
                      src={require("../images/feature.png")}
                      height="30px"
                      width="30px"
                    />
                  </p>
                  <ul>
                    <li>
                      Plant-based material; Better for the skin - No Chemicals{" "}
                    </li>
                    <li>
                      Exfoliation - Removing dead skin cells not only improves
                      the look of your skin, it also sweeps away places where
                      bacteria and soil could collect
                    </li>
                    <li>
                      Improving Circulation - Unlike harshly abrasive scrubbers
                      and sponges, a loofah's firm but elastic fibers are round
                      in cross section and are less likely to scratch skin{" "}
                    </li>
                  </ul>
                </p>
              </Col>
              <Col sm={12} lg={6}>
                <img
                  src={require("../images/LOOFAH.PNG")}
                  style={{ height: "auto", width: "100%" }}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <div
          style={{
            width: "100%",
            backgroundColor: "#ACD1A0",
            marginTop: "25px",
          }}
        >
          <Container>
            <Row>
              <Col sm={12} lg={6}>
                <img
                  src={require("../images/CUPS.PNG")}
                  style={{ height: "auto", width: "100%" }}
                />
              </Col>
              <Col sm={12} lg={6}>
                <p
                  align="left"
                  style={{
                    fontSize: "25px",
                    color: "white",
                    marginTop: "60px",
                  }}
                >
                  <b>Plant Based Reusable Cups</b>
                  <img
                    src={require("../images/take-away.png")}
                    style={{ height: "40px", width: "40px" }}
                  />
                </p>
                <p align="left" style={{ color: "white" }}>
                  Barista's love it! Easy to clean, hassle free and Plant Based.
                  Sourced from local farmers, plant residue from Bamboo, Wheat,
                  Rice, and Barley is processed and molded into reusable cups
                  which can be used hundreds of times. So, every batch is
                  unique, Just. Like. You.
                </p>
                <p align="left" style={{ color: "#484848" }}>
                  <b>Features</b>
                  <img
                    src={require("../images/feature.png")}
                    height="30px"
                    width="30px"
                  />
                </p>
                <ul
                  align="left"
                  style={{ color: "#484848", marginBottom: "60px" }}
                >
                  <li>Every batch of cups is unique due to being natural.</li>
                  <li>Lids available in different Colours.</li>
                  <li>Designed in USA</li>
                  <li>Govt Approved, Tested, and approved in TUV, Germany</li>
                  <li>100% recyclable and non-toxic</li>
                  <li>Leak-Proof</li>
                  <li>
                    Odorless tasteless and doesn’t react with hot beverages
                  </li>
                  <li>Lightweight</li>
                  <li>Microwavable</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <div style={{ width: "100%", backgroundColor: "white" }}>
          <Container>
            <Row>
              <Col sm={12} lg={6}>
                <p
                  align="left"
                  style={{
                    width: "400px",
                    color: "#484848",
                    marginTop: "60px",
                    marginBottom: "60px",
                  }}
                >
                  <b style={{ fontSize: "25px" }}>
                    Bamboo Toothbrush (set of 2)
                  </b>
                  <img
                    src={require("../images/brushing.png")}
                    height="40px"
                    width="40px"
                  />
                  <p style={{ color: "black" }}>
                    Earthly Bamboo Toothbrush are BPA free, Biodegradable and
                    have charcoal infused bristles that help remove stains
                    effectively. We guarantee your satisfaction. See for
                    yourself!
                  </p>
                  <p>
                    <b>Features</b>
                    <img
                      src={require("../images/feature.png")}
                      height="30px"
                      width="30px"
                    />
                  </p>
                  <ul>
                    <li>100% natural and toxic-free</li>
                    <li>Vegan product</li>
                    <li>Eco friendly and sustainable</li>
                    <li>Made by Indian Artisans</li>
                    <li>Aesthetically pleasing design</li>
                    <li>Zero-Plastic, biodegradable packaging</li>
                  </ul>
                </p>
              </Col>
              <Col sm={12} lg={6}>
                <img
                  src={require("../images/BRUSH.PNG")}
                  style={{ height: "auto", width: "100%" }}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </motion.div>
    </>
  );
}
