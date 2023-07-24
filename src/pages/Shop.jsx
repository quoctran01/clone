import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSecction from "../components/UI/CommonSecction";
import { Container, Row, Col } from "reactstrap";
import "../style/shop.css";
import ProductList from "../components/UI/ProductList";
import products from "../assets/data/products";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);
  const handleFilter = (e) => {
    const filterValue = e.target.value;
    switch (filterValue) {
      case "chair":
        setProductsData(
          products.filter((item) => item.category === filterValue)
        );
        break;
      case "sofa":
        setProductsData(
          products.filter((item) => item.category === filterValue)
        );
        break;
      case "mobile":
        setProductsData(
          products.filter((item) => item.category === filterValue)
        );
        break;
      case "watch":
        setProductsData(
          products.filter((item) => item.category === filterValue)
        );
        break;
      case "wireless":
        setProductsData(
          products.filter((item) => item.category === filterValue)
        );
        break;
      default:
        setProductsData(products);
    }
  };
  const handleSort = (e) => {
    switch (e.target.value) {
      case "asc":
        const dataAsc = [...productsData].sort((a, b) => a.price - b.price);
        setProductsData(dataAsc);
        break;
      case "desc":
        const dataDesc = [...productsData].sort((a, b) => b.price - a.price);
        setProductsData(dataDesc);
        break;
      default:
        setProductsData(productsData);
    }
  };

  const handleSearch = (e) => {
    const productsList = products.filter((item) =>
      item.productName
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase())
    );
    setProductsData(productsList);
  };
  return (
    <Helmet title="Shop">
      <CommonSecction title="Products"></CommonSecction>
      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select onClick={handleFilter}>
                  <option>Filter by category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="text__right">
              <div className="filter__widget">
                <select onClick={handleSort}>
                  <option>Sort By</option>
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search...."
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="shop__product">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center" style={{ padding: "100px" }}>
                No valid product...
              </h1>
            ) : (
              <ProductList items={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
