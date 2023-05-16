import ReactStars from "react-rating-stars-component";
import { featureCollection } from "../data";
import { Link, useLocation } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";

export const ProductCard = ({ grid }) => {
  const location = useLocation();

  return (
    <>
      {featureCollection.map((item, index) => (
        <div
          className={`${
            location.pathname === "/store" ? `gr-${grid} ` : "col-2 "
          }`}
          key={index}
        >
          <Link className="card product-card position-relative">
            <div className="card-body ">
              <div>
                <img src={item.img} className="card-img-top img-fluid" alt="" />
                <img
                  src="images/watch-1.avif"
                  className="card-img-top img-fluid"
                  alt=""
                />
              </div>
              <div>
                <div className="wishlist-icon position-absolute">
                  <Link>
                    <AiOutlineHeart color="#000" size={20} />
                  </Link>
                </div>
                <p className="text-danger">{item.brand}</p>
                <h6 className="text-dark">{item.title}</h6>
                <ReactStars
                  count={5}
                  size={24}
                  value="3"
                  edit={false}
                  activeColor="#ffd700"
                />
                <p
                  className={`text-secondary  ${grid == 12 ? "d-block" : "d-none"}`}
                >
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum
                </p>
                <p className="fs-6 text-danger">{item.price}</p>
                <div className="action-bar position-absolute ">
                  <div className="d-flex flex-column gap-10 align-items-center">
                    <Link>
                      <img src="images/prodcompare.svg" alt="" />
                    </Link>
                    <Link>
                      <AiOutlineEye color="#000" size={20} />
                    </Link>
                    <Link>
                      <SlBasket color="#000" size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};
