import React from "react";
import { Meta } from "../components/Meta";
import { BreadCrumb } from "../components/BreadCrumb";
import { Link } from "react-router-dom";

export const ResetPassword = () => {
  return (
    <>
      <Meta title="Forget Password" />
      <BreadCrumb title="Forget Password" />
      <div className="login-wrapper home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className=" d-flex justify-content-center">
              <div className="login-inner-wrapper">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className=" fw-normal">Reset Your Password </h4>
                </div>
                <div className="col-12">
                  <div className="login-card">
                    <div className="login-card-body gap-30 justify-content-between">
                      <h5 className="fw-normal mb-5">
                        Enter your your new password & confirm the new password
                      </h5>

                      <form
                        action="post"
                        className="d-flex flex-column gap-15 w-50"
                      >
                        <div>
                          <label htmlFor="" className="mb-2">
                           New Password
                          </label>
                          <input
                            type="password"
                            placeholder=" New Password*"
                            className="form-control p-3"
                            name="password"
                          />
                        </div>
                        <div>
                          <label htmlFor="" className="mb-2">
                           Confirm New Password
                          </label>
                          <input
                            type="password"
                            placeholder=" Confirm New Password*"
                            className="form-control p-3"
                            name="cf_password"
                          />
                        </div>
                        <button className="login-btn form-control">
                          Reset
                        </button>
                      </form>
                      <Link to="/login" className="mt-4">Go Back</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
