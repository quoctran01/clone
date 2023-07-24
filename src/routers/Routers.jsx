import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";
import ProtectedRouter from "./ProtectedRouter";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route
          path="checkout"
          element={
            <ProtectedRouter>
              <Checkout />
            </ProtectedRouter>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default Routers;
