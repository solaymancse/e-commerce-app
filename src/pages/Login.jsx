import { BreadCrumb } from "../components/BreadCrumb";
import { Meta } from "../components/Meta";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <Meta title="Account" />
      <BreadCrumb title="Login" />
      <div className="login-wrapper home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className=" d-flex justify-content-center">
              <div className="login-inner-wrapper">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className=" fw-normal">
                    Welcome to FaDeli! Please login
                  </h4>
                  <p>
                    New Member? &nbsp; <Link to="/register">Register</Link> Here
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
                        <button className="login-btn form-control">
                          Login
                        </button>
                      </form>
                      <div className="d-flex flex-column gap-15">
                        <p>Or, Login With</p>
                        <button className="fb-btn border-0 gap-10 d-flex align-items-center justify-content-center">
                          <FaFacebookF size={20} />
                          Facebook
                        </button>
                        <button className="g-btn border-0 gap-10 d-flex align-items-center justify-content-center">
                          <AiOutlineGooglePlus size={20} />
                          Google
                        </button>
                        <Link
                          to="/forget-password"
                          className="text-center py-4 fs-6"
                        >
                          Forget Password ?
                        </Link>
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
