import { BreadCrumb } from "../components/BreadCrumb";
import { Meta } from "../components/Meta";
import { ourstore } from "../data";

export const OurStore = () => {
  return (
    <>
      <Meta title="Our Store" />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3 ">
              {ourstore.map((item, index) => (
                <div className="d-flex flex-column mb-3" key={index}>
                  <div className="card" style={{ width: "14rem" }}>
                    <div className="card-body d-flex flex-column">
                      <div className="content">
                        <div>
                          <h4 className="filter-title">{item.title}</h4>
                          {item.link && (
                            <div>
                              {" "}
                              {item.link.map((item, index) => (
                                <ul key={index}>
                                  <li>{item}</li>
                                </ul>
                              ))}
                            </div>
                          )}
                          <h6 className="sub-title">{item.subTitle}</h6>
                          {item.check === 1 && (
                            <div>
                              {" "}
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
                              </div>{" "}
                          
                    
                          <h5 className="sub-title mt-3" >Price</h5>
                          <div className="d-flex align-items-center gap-10">
                            <form class="form-floating mb-3" style={{height:'30px'}}>
                              <input type="email" class="form-control" id="floatingInputValue" placeholder="From" />
                              <label for="floatingInputValue">From</label>
                            </form>
                            <form class="form-floating mb-3" style={{height:'30px'}}>
                              <input type="email" class="form-control" id="floatingInputValue" placeholder="To" />
                              <label for="floatingInputValue">To</label>
                            </form>
                          </div>
                             </div> )} 
                       
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-9"></div>
          </div>
        </div>
      </div>
    </>
  );
};
