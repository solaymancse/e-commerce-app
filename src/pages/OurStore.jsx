import { BreadCrumb } from "../components/BreadCrumb";
import { FilterSortGrid } from "../components/FilterSortGrid";
import { Meta } from "../components/Meta";
import { ourstore, randomProduct } from "../data";
import ReactStars from "react-rating-stars-component";

export const OurStore = () => {
  return (
    <>
      <Meta title="Our Store" />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2 ">
              {ourstore.map((item, index) => (
                <div className="d-flex flex-column mb-3" key={index}>
                  <div className="card" >
                    <div className="card-body d-flex flex-column">
                      <div className="content">
                        <div>
                          <h4 className="filter-title">{item.title}</h4>
                          {item.link && (
                            <div className="d-flex flex-column justify-content-start ">
                              {item.link.map((item, index) => (
                                <ul key={index} className="p-0">
                                  <li>{item}</li>
                                </ul>
                              ))}
                            </div>
                          )}
                          <h6 className="sub-title">{item.subTitle}</h6>
                          {item.check === 1 && (
                            <div>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  value=""
                                />
                                <label htmlFor="">{item.in}</label>
                              </div>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                />
                                <label htmlFor="">{item.out}</label>
                              </div>
                              <h5 className="sub-title mt-3">Price</h5>
                              <div className="d-flex align-items-center gap-10">
                                <form
                                  class="form-floating mb-3"
                                  style={{ height: "30px" }}
                                >
                                  <input
                                    type="email"
                                    class="form-control"
                                    id="floatingInputValue"
                                    placeholder="From"
                                    
                                  />
                                  <label for="floatingInputValue">From</label>
                                </form>
                                <form
                                  class="form-floating mb-3"
                                  style={{ height: "30px" }}
                                >
                                  <input
                                    type="email"
                                    class="form-control"
                                    id="floatingInputValue"
                                    placeholder="To"
                                  />
                                  <label for="floatingInputValue">To</label>
                                </form>
                              </div>
                              <h5 className="sub-title mt-4">Color</h5>
                              <div>
                                <ul className="colors ps-0">
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                </ul>
                              </div>
                              <h5 className="sub-title mt-4">Size</h5>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                />
                                <label htmlFor="">S (2)</label>
                              </div>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                />
                                <label htmlFor="">M (3)</label>
                              </div>
                            </div>
                          )}
                         { /* Product tags*/}
                          {item.tags === 1 && 

                            <div className="product-tags d-flex align-items-center gap-10" >
                              {item.productTags.map((item,index)=>(
                            <span className="badge bg-light text-secondary rounded-3 py-2 px-3 " key={index}>{item}</span>
                            ))}
                            </div>
                          }

                          {/*Random Product*/}
                          {item.random === 1 &&
                          <>    
                              {randomProduct.map((item,index)=>(
                               <div key={index} className="random-product d-flex align-items-center mb-2">
                                 <div  className="w-50">
                                   <img className="img-fluid" src={item.img} alt="" />          
                                </div>              
                                <div className="w-50">
                                  <h5>{item.title}</h5>
                                  <ReactStars
                                        count={5}
                                        size={24}
                                        value="3"
                                        edit={false}
                                        
                                        activeColor="#ffd700"
                                        
                                    />
                                    <h5 className="text-bold">{item.price}</h5>
                                </div>
                               </div>
                              ))}
                          </>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-10 p-0">
              <FilterSortGrid/>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
