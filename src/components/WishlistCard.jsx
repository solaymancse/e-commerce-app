import React from "react";
import { featureCollection } from "../data";

export const WishlistCard = () => {
  return (
    <>
      {featureCollection.map((item, index) => (
        <div className="col-3">
          <div className="d-flex">
            <div className="compare-product " key={index}>
              <div className="wish-card-body position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="cross position-absolute img-fluid"
                />

                <img src={item.img} alt="" className="" />

                <div className="product-details py-3">
                  <h5>{item.title}</h5>
                  <div className="details-title">
                    <p key={index}>{item.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
