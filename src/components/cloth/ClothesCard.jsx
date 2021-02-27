import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "../../App.css";
import data from "../Data";
function ClothesCard(props) {
  return (
    <Card className="ms-5 mt-5 rounded-4">
      <Card.Img className="sliderImg" variant="top" src={data[`${props.id}`]} />
      <Card.Body className="p-3">
        <Card.Title className="fs-30 ">{props.title}</Card.Title>
        <Card.Text className="fs-40 text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tag-fill" viewBox="0 0 16 16">
  <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg>{props.price} </Card.Text>
        <Link
          to={`/clothes/${props.id}`}
          className="btn text-white bg-primary p-2 fs-20 px-4 ls-2 rounded-4"
        >
          Go to clothes
        </Link>
      </Card.Body>
    </Card>
  );
}

ClothesCard.defaultProps = {
  title: "Product",
  detail: "Detail"
};

export default ClothesCard;
