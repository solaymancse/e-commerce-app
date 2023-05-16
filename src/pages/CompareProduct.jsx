import React from "react";
import { Meta } from "../components/Meta";
import { BreadCrumb } from "../components/BreadCrumb";
import { compareproduct } from "../data";

export const CompareProduct = () => {
  return (
    <>
      <Meta title="Compare Product " />
      <BreadCrumb title="Compare Products" />
      <div className="compare-product home-wrapper-1 py-4">
        <div className="container-xxl">
          <div className="row">
            {compareproduct.map((item, index) => (
              <div className="col-3">
                <div className="d-flex">
                  <div className="compare-product-card" key={index}>
                    <div className="card-body position-relative">
                      <img
                        src="images/cross.svg"
                        alt=""
                        className=" cross position-absolute img-fluid"
                      />
                      <div className="product-card-img">
                        <img src={item.img} alt="" className="" />
                      </div>
                      <div className="product-details py-3">
                        <h5>{item.title}</h5>
                        <div className=" details-body d-flex justify-content-between py-3">
                          <div className="details-title" >
                            {item.name.map((item, index) => (
                              <p key={index}>{item}</p>
                            ))}
                          </div>
                          <div>
                            {item.nameValues.map((item, index) => (
                              <p className="text-secondary" key={index}>{item}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
