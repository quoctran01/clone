import React from "react";
import { Col } from "reactstrap";
import "../../style/product-card.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        imgUrl: item.imgUrl,
        price: item.price,
      })
    );
    toast.success("Product added successfully");
  };
  return (
    <Col lg="3" md="4" className="product_card">
      <div className="product__item">
        <div className="product__img">
          <motion.img
            whileHover={{ scale: 0.9 }}
            src={item.imgUrl}
            alt="chair"
          />
        </div>
        <div className="product__infor">
          <h3 className="product__name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span>{item.category}</span>
        </div>
        <div className="product__card-bottom">
          <span className="price">${item.price}</span>
          <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
            <i class="ri-add-circle-fill"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
