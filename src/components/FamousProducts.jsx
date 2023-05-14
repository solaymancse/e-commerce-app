import { famousproducts } from "../data";

export const FamousProducts = () => {
  return (
    <div className="blog-wrapper py-5">
      <div className="container-xxl">
        <div className="row">
          <h4>Famous Products</h4>

          {famousproducts.map((item, index) => (
            <div className="col-3 p-0" key={index}>
              <div
                className="card famous-card "
                style={{ width: "20.5rem", padding: "20px" }}
              >
                <div className="card-body d-flex flex-column">
                  <div className="content">
                    <div>
                      <p className="">{item.moto}</p>
                      <h5 className=" ">{item.title}</h5>
                      <p className="fs-6">{item.desc}</p>
                    </div>
                  </div>
                  <div className="">
                    <img src={item.img} class="card-img-top" alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
