import ReactStars from "react-rating-stars-component";
import { specialProduct } from "../data"
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";


export const SpecialProduct = () => {
    return (
        <div className="blog-wrapper py-5">
            <div className="container-xxl">
                <div className="row">
                    <h4>Special Products</h4>

                    {specialProduct.map((item, index) => (
                        <div className="col-4 p-0 " key={index}>

                            <div class="card " style={{ width: '27.2rem' }}>

                                <div class="card-body d-flex">
                                    <div className="position-relative">
                                        <img src={item.img} class="card-img-top img-fluid" alt="" />

                                        <div className="wishlist-icon position-absolute">
                                            <Link >
                                                <AiOutlineHeart color="#000" size={20} />
                                            </Link>
                                        </div>

                                    </div>
                                    <div className="content">

                                        <p className="text-danger">{item.brand}</p>
                                        <h6 class=" ">{item.title}</h6>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value="3"
                                            edit={false}

                                            activeColor="#ffd700"
                                        />
                                        <p className="fs-6 text-danger">{item.price} &nbsp; <strike className="text-dark" >$200</strike></p>
                                        <div className="discount-till d-flex gap-10 align-items-center">
                                            <p className="mb-0">
                                                <b>5&nbsp;</b>Days
                                            </p>
                                            <div className="d-flex gap-10 align-items-center">
                                                <span className="badge rounded-circle bg-danger p-2">1</span>:
                                                <span className="badge rounded-circle bg-danger p-2">1</span>:
                                                <span className="badge rounded-circle bg-danger p-2">1</span>

                                            </div>

                                        </div>
                                        <div className="pro-count mt-3">
                                            <div>
                                                <p>Products : 5</p>
                                            </div>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                       
                                         <Link className="button mt-3" to="/">Add to Cart</Link>
                                     
                                    </div>

                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}
