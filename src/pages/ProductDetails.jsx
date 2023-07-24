import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSecction from "../components/UI/CommonSecction";
import products from "../assets/data/products";
import { useParams } from "react-router-dom";
import "../style/product-details.css";
import { motion } from "framer-motion";
import ProductList from "../components/UI/ProductList";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const [tab, setTab] = useState("desc");
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const reviewUser = useRef("");
  const reviewMessage = useRef("");
  const dispatch = useDispatch();
  const product = products.find((item) => item.id === id);
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    category,
    shortDesc,
  } = product;
  const relatedProduct = products.filter(
    (product) => product.category === category
  );
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        productName,
        image: imgUrl,
        price,
      })
    );
    toast.success("Product added successfully");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputReview = reviewUser.current.value;
    const areaReview = reviewMessage.current.value;
    const review = {
      user: inputReview,
      msg: areaReview,
      rating,
    };
    toast.success("Review submitted");
    console.log(review);
  };
  return (
    <Helmet title={productName}>
      <CommonSecction title={productName} />
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg="6">
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__rating d-flex align-items-center gap-5 mb-3 ">
                  <div>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                  </div>
                  <p>
                    (<span>{avgRating}</span> ratings)
                  </p>
                </div>
                <div className="d-flex align-items-center gap-5">
                  <span className="product__price">${price}</span>
                  <span>Category: {category}</span>
                </div>
                <p className="product__desc">{shortDesc}</p>
                <motion.button
                  onClick={addToCart}
                  whileHover={{ scale: 1.1 }}
                  className="buy__btn"
                >
                  Add to Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab__wrapper d-flex gap-5 algin-items-center">
                <h6
                  className={`${tab === "desc" ? "tab__active" : " "}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  onClick={() => setTab("rev")}
                  className={`${tab === "rev" ? "tab__active" : " "}`}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>
              {tab === "desc" ? (
                <>
                  <div className="tab__content">
                    <p>{description}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="tab__content">
                    <div className="product__review">
                      <div className="review__wrapper mt-5">
                        <ul>
                          {reviews.map((item, index) => (
                            <li key={index} className="mb-4">
                              <h6>Quoc Tran</h6>
                              <span>{item.rating} (rating)</span>
                              <p> {item.text}</p>
                            </li>
                          ))}
                        </ul>
                        <form className="review__form">
                          <h4>Leave your experience</h4>
                          <div className="form__group">
                            <input
                              ref={reviewUser}
                              type="text"
                              placeholder="Enter name"
                              required
                            />
                          </div>
                          <div className="form__group d-flex algin-items-center gap-5 rating__group">
                            <motion.span
                              whileHover={{ scale: 1.2 }}
                              onClick={() => setRating(1)}
                            >
                              1<i class="ri-star-s-fill"></i>
                            </motion.span>
                            <motion.span
                              whileHover={{ scale: 1.2 }}
                              onClick={() => setRating(2)}
                            >
                              2<i class="ri-star-s-fill"></i>
                            </motion.span>
                            <motion.span
                              whileHover={{ scale: 1.2 }}
                              onClick={() => setRating(3)}
                            >
                              3<i class="ri-star-s-fill"></i>
                            </motion.span>
                            <motion.span
                              whileHover={{ scale: 1.2 }}
                              onClick={() => setRating(4)}
                            >
                              4<i class="ri-star-s-fill"></i>
                            </motion.span>
                            <motion.span
                              whileHover={{ scale: 1.2 }}
                              onClick={() => setRating(5)}
                            >
                              5<i class="ri-star-s-fill"></i>
                            </motion.span>
                          </div>
                          <div className="form__group">
                            <textarea
                              ref={reviewMessage}
                              type="text"
                              placeholder="Review Message..."
                              required
                            />
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            type="submit"
                            className="buy__btn mt-5"
                            onSubmit={(e) => handleSubmit(e)}
                          >
                            Submit
                          </motion.button>
                        </form>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </Col>
            <Col lg="12" className="mt-5">
              <h2 className="related__title">Your might also like</h2>
            </Col>
            <ProductList items={relatedProduct} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
