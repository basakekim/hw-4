import React from "react";
import "../App.css";
import logo from "../images/logo.PNG";
import photo1 from "../images/foto1.jpg";
import photo2 from "../images/foto2.jpg";
import photo4 from "../images/foto4.jpg";

function Home() {
  return (
    <>
      <div className="t  k" style={{ borderRadius: "20px;" }}>
        <div className=" text-center">
          <div className="row">
            <div className="col-12 py-5 my-5 ">
              <img src={logo} />

              <h6 className="mt-5" style={{ color: "#222" }}>
                {" "}
                Lorem ipsum dolor sit amet.{" "}
              </h6>
              <h6 className="my-4" style={{ color: "#222" }}>
                {" "}
                Lorem ipsum dolor sit.
              </h6>
              <h6 className="" style={{ color: "#222" }}>
                Lorem ipsum dolor sit amet consectetur.{" "}
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="" style={{ maxWidth: "100%" }}>
        <img src={photo1} className="mx-4" style={{ width: "400px" }} />
        <img src={photo2} className="mx-2" style={{ width: "400px" }} />
        <img src={photo4} className="mx-4" style={{ width: "400px" }} />
      </div>
    </>
  );
}

export default Home;
