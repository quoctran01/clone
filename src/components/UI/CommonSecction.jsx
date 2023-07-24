import React from "react";
import { Container } from "reactstrap";
import "../../style/commonSecction.css";

const CommonSecction = ({ title }) => {
  return (
    <>
      <section className="common__secction">
        <Container className="text-center">
          <h1>{title}</h1>
        </Container>
      </section>
    </>
  );
};

export default CommonSecction;
