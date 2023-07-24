import React, { useRef, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./header.css";
import { Container, Row } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import useAuth from "../../customHook/useAuth";

const nav_link = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const stickyHeader = () => {
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? headerRef.current.classList.add("header__sticky")
      : headerRef.current.classList.remove("header__sticky");
  };
  useEffect(() => {
    window.addEventListener("scroll", stickyHeader);
    return () => {
      window.removeEventListener("scroll", stickyHeader);
    };
  });
  const toggleMenu = () => {
    menuRef.current.classList.toggle("active__menu");
  };
  const handleRedirect = () => {
    navigate("/cart");
  };
  return (
    <header className="header " ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>
                  <Link to="/"> Multimart</Link>
                </h1>
              </div>
            </div>
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu">
                {nav_link.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__icons">
              <span className="fav__icon">
                <i class="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart__icon" onClick={handleRedirect}>
                <i class="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <span>
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={currentUser ? currentUser.photoURL : userIcon}
                  alt="user-icon"
                />
              </span>
              <div className="mobile__menu" onClick={toggleMenu}>
                <i class="ri-menu-line"></i>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
