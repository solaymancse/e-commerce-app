import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import { headerUpperLinks } from "../data";

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
          <div className="row align-items-center">
            <div className="logo col-2">
              <h2>
                <Link className="logo-text">FaDeli.</Link>
              </h2>
            </div>
            <div className="col-5 p-0">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                />
                <span class="input-group-text">
                  <BsSearch />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                {headerUpperLinks.map((item, index) => (
                  <div key={index}>
                    <Link
                      to={item.link}
                      className="d-flex align-items-center text-dark gap-10"
                    >
                      <div>{item.icon}</div>
                      <p className="mb-0">
                        {item.title1} <br />
                        {item.title2}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-item-center gap-30">

                <div class="dropdown">
                  <div
                    class="categories border-0 gap-15 d-flex align-items-center mb-2"

                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <BiCategoryAlt />
                    <span className="me-5">Shop Categories</span>
                  </div>
                </div>

                <div className="menu-links">
                  <div className="d-flex align-item-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/store">Our Store</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
