import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSecction from "../components/UI/CommonSecction";
import { Container, Row, Col } from "reactstrap";
import "../style/cart.css";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const deleteProduct = (id) => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <>
      <Helmet title="Cart">
        <CommonSecction title="Shopping Cart" />
        <section>
          <Container>
            <Row>
              <Col lg="9">
                {cartItems.length === 0 ? (
                  <h2 className="fs-4 text-center">No item add to the cart</h2>
                ) : (
                  <table className="table bordered">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <motion.th whileTap={{ scale: 1.2 }}>Delete</motion.th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <img src={item.imgUrl} alt="Product img" />
                          </td>
                          <td>{item.productName}</td>
                          <td>{item.totalPrice}</td>
                          <td>{item.quantity}</td>
                          <td>
                            <i
                              onClick={() => deleteProduct(item.id)}
                              class="ri-delete-bin-line"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </Col>
              <Col lg="3">
                <div className="total__detail">
                  <div>
                    <h6 className="d-flex align-items-center justify-content-between">
                      Subtotal
                      <span className="fs-4 fw-bold">${totalAmount}</span>
                    </h6>
                  </div>
                  <p>Taxes and shipping will calculate in checkout</p>
                  <div>
                    <button className="buy__btn w-100">
                      <Link to="/shop"> Continue Shopping </Link>
                    </button>
                    <button className="buy__btn w-100">
                      <Link to="/checkout"> Check out </Link>
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default Cart;
