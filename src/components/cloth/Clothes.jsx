import React from "react";
import ClothesCard from "./ClothesCard";
import clothesInfo from "../../data/clothesInfo.json";
import "../../App.css";
function Clothes() {
  const ClothesCards = clothesInfo.clothesInfo
    .filter((item) => item.isActive)
    .map((item, index) => (
      <div className="col-sm-3 mx-4 mb-3 ">
        <ClothesCard id={item.id} title={item.title} price={item.price} />
      </div>
    ));

  return (
    <>
      <h2 class="my-5">CLOTHES</h2>

   

      <div className=" d-flex flex-wrap justify-content-center">
        {ClothesCards}
      </div>
    </>
  );
}

export default Clothes;
