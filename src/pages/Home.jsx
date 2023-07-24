import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import "../style/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";
import products from "../assets/data/products";
import counterImg from "../assets/images/counter-timer-img.png";
import Clock from "../components/UI/Clock";

const Home = () => {
  const year = new Date().getFullYear();
  const [trendingProduct, setTrendingProduct] = useState([]);
  const [bestSalesProduct, setBestSalesProduct] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [watch, setWatch] = useState([]);
  useEffect(() => {
    const productTrending = products.filter(
      (item) => item.category === "chair"
    );
    const productBestSales = products.filter(
      (item) => item.category === "sofa"
    );
    const productNewArrivals = products.filter(
      (item) => item.category === "mobile" || item.category === "wireless"
    );
    const productWatch = products.filter((item) => item.category === "watch");
    setTrendingProduct(productTrending);
    setBestSalesProduct(productBestSales);
    setNewArrivals(productNewArrivals);
    setWatch(productWatch);
  }, []);
  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>
                  Lorem ipsum dolor sit amet sonsectetur, adipisicing elit.
                  Quaerat nulla repellat quo eaque alias corporis sunt, facilis
                  nesciunt rem fugit!
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending__product">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending product</h2>
            </Col>
            <ProductList items={trendingProduct} />
          </Row>
        </Container>
      </section>
      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best sales</h2>
            </Col>
            <ProductList items={bestSalesProduct} />
          </Row>
        </Container>
      </section>
      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" sm="12" className="timer__group">
              <div className="clock__top-content">
                <h4>Limited Offers</h4>
                <h3>Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button
                whileHover={{ scale: 1.2 }}
                className="buy__btn timer__btn"
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" sm="12" className="text-end timer__count-img">
              <img src={counterImg} alt="timer count" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new_arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">New Arrivals</h2>
            </Col>
            <ProductList items={newArrivals} />
          </Row>
        </Container>
      </section>
      <section className="popular">
        <Container>
          <Row>
            <Col lg="12" className="text-center popular_text">
              <h2 className="section__title">Popular in category</h2>
            </Col>
            <ProductList items={watch} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
