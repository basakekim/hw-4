import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import clothesInfo from "../../data/clothesInfo.json";
import data from "../Data";

function ClothesDetail() {
  let { clothesID } = useParams();

  console.log("clothesID");
  return clothesInfo.clothesInfo
    .filter((item) => item.id === Number(clothesID))
    .map((item) => (
      <div>
        <div className="container text-center my-5">
          <img
            className="first-slide img-fluid"
            src={data[`${item.id}`]}
            alt="First"
          />
        </div>

        <div className="container">
          <div className="div">
            <h2>{item.title}</h2>
            <div className="container d-flex justify-content-center my-5">
              <div className="ratings product-ratings">
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-tag-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                  </svg>
                  {item.price}
                </span>
              </div>
            </div>
            <p className="py-2 ">{item.detail}</p>
            <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum in nam tempora rem, nulla itaque, similique ipsa, natus dolores eligendi architecto enim veniam porro quidem ducimus laboriosam? Adipisci, incidunt mollitia!
        </p>
          </div>
        </div>
       
        <div className="container my-5">
          <h2 className="my-4">COMMENTS</h2>
          <div className="row">
            <div className="col-md-8 py-3">
              <div className="media g-mb-30 media-comment">
                <img
                  className="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15"
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt="Image Description"
                />
                <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                  <div className="g-mb-15">
                    <h5 className="h5 g-color-gray-dark-v1 mb-0">John Doe</h5>
                  </div>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum
                    in vulputate at, tempus viverra turpis. Fusce condimentum
                    nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus ras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
}

export default ClothesDetail;
