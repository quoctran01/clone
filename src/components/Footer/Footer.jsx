import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="6">
            <div className="logo">
              <div>
                <h1 className="text-white">Multimart</h1>
              </div>
            </div>
            <p className="mt-4 footer__text">
              Lorem ipsum dolor sit amet consectetur adipisicing alit. Cumpe
              dolor labore eveniet vitae nulla itaque soluta sit provident
              consectetur
            </p>
          </Col>
          <Col lg="3" md="6" className="footer__color">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top categories</h4>
              <ListGroup className="mb-3 mt-4">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" md="6" className="footer__color">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">UseFul Links</h4>
              <ListGroup className="mb-3 mt-4">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="6" className="footer__color ">
            <div className="footer__quick-links ">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className="mb-3 mt-4 ">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-top gap-2">
                  <span className="text-white">
                    <i class="ri-map-pin-line"></i>
                  </span>
                  <p className="footer__text-contact">
                    288, Chien Thang,Ha Dong, Ha Noi
                  </p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span className="text-white">
                    <i class="ri-phone-line"></i>
                  </span>
                  <p className="footer__text-contact">0333008047</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span className="text-white">
                    <i class="ri-mail-line"></i>
                  </span>
                  <p className="footer__text-contact">hoatayy2k1@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12" className="text-center">
            <p className="footer__copyright">
              Copyright {year} developed by QuocTran. All right reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
