import { NavLink, Link } from "react-router-dom";
import {BsSearch} from 'react-icons/bs'
const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $150 & Free Returns
              </p>
            </div>
            <div className="col-6 text-white">
              <p className="text-end mb-0">
                Hotline:
                <a className="text-white" href="tel:+91 8264958884">
                  +91 8264958884
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2">
              <h2>
                <Link className="logo-text">FaDeli.</Link>
              </h2>
            </div>
            <div className="col-5">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text" id="basic-addon2">
                 <BsSearch/>
                </span>
              </div>
            </div>
            <div className="col-5"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
