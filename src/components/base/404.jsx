import React from "react";
import { Container, Row } from "react-bootstrap";
function NotFound() {
  return (
    <Container>
      <Row className="d-flex flex-column justify-content-center align-items-center p-5 m-5 ">
        <h1 className="text-center p-5 m-5 ls-2">
          NO RESULTS
        </h1>
        <h5 className=" ls-2">PLEASE TRY AGAİN
        </h5>
        <h5 className="text-success ls-2">WE CAN FIND A NEW PRODUCT FOR YOU
        </h5>
      </Row>
    </Container>
  );
}

export default NotFound;