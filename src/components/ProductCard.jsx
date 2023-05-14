import ReactStars from "react-rating-stars-component";
import { featureCollection } from "../data";
import { Link, useLocation } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";

export const ProductCard = ({grid}) => {
  const location = useLocation();
  
  return (
    <>
      {featureCollection.map((item, index) => (
        <div className={`${location.pathname === '/store' ? `gr-${grid} p-0`:"col-2 p-0"}`} key={index}>
          <div
            class="card product-card position-relative"
            
          >
            <img src={item.img} class="card-img-top img-fluid" alt="" />
            <img
              src="images/watch-1.avif"
              class="card-img-top img-fluid"
              alt=""
            />
            <div class="card-body ">
              <div className="wishlist-icon position-absolute">
                <Link>
                  <AiOutlineHeart color="#000" size={20} />
                </Link>
              </div>
              <p className="text-danger">{item.brand}</p>
              <h6 class=" ">{item.title}</h6>
              <ReactStars
                count={5}
                size={24}
                value="3"
                edit={false}
                activeColor="#ffd700"
              />
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
        </div>
      ))}
    </>
  );
};
