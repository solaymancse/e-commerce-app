import { BreadCrumb } from "../components/BreadCrumb";
import { Meta } from "../components/Meta";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Register = () => {
  const [check, setCheck] = useState(false);
  const unChecked = () => {
    if (check === true) {
      setCheck(false);
    } else {
      setCheck(true);
    }
  };

  return (
    <>
      <Meta title="New Register" />
      <BreadCrumb title="New Register" />
      <div className="login-wrapper home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className=" d-flex justify-content-center">
              <div className="login-inner-wrapper">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className=" fw-normal">Create Your FaDeli Account</h4>
                  <p>
                    Already Member? &nbsp; <Link to="/login">Login</Link> Here
                  </p>
                </div>
                <div className="col-12">
                  <div className="login-card">
                    <div className="login-card-body d-flex gap-30 justify-content-between">
                      <form
                        action="post"
                        className="d-flex flex-column gap-15 w-50"
                      >
                        <div>
                          <label htmlFor="" className="mb-2">
                            Phone Number or Email*
                          </label>
                          <input
                            type="text"
                            placeholder="Phone Number or Email*"
                            className="form-control p-3"
                            name="email"
                          />
                        </div>
                        <div>
                          <label htmlFor="" className="mb-2">
                            Password*
                          </label>
                          <input
                            type="password"
                            placeholder="Password*"
                            className="form-control p-3"
                          />
                        </div>

                        <p className="mt-3">Or, Register With</p>
                        <button className="fb-btn border-0 gap-10 d-flex align-items-center justify-content-center">
                          <FaFacebookF size={20} />
                          Facebook
                        </button>
                      </form>
                      <div className="d-flex flex-column gap-15">
                        <div>
                          <label htmlFor="" className="mb-2">
                            Your Full Name*
                          </label>
                          <input
                            type="text"
                            placeholder="Your Full Name*"
                            className="form-control p-3"
                            name="name"
                          />
                        </div>

                        <button className="login-btn form-control mt-4">
                          REGISTER
                        </button>
                        <div className="form-check mb-4 ">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            value=""
                            onClick={unChecked}
                            checked={check ? "" : "checked"}
                          />
                          <label htmlFor="">
                            I'd like to receive exclusive offers and promotions
                            via SMS
                          </label>
                        </div>

                        <button className="g-btn border-0 gap-10 d-flex align-items-center justify-content-center mt-1">
                          <AiOutlineGooglePlus size={20} />
                          Google
                        </button>
                      </div>
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
