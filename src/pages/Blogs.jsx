import { Meta } from "../components/Meta";
import { BreadCrumb } from "../components/BreadCrumb";
import { BlogCard } from "../components/BlogCard";

export const Blogs = () => {
  return (
    <>
      <Meta title="Blogs" />
      <BreadCrumb title="Blogs" />
      <div className="blogs-wrapper home-wrapper-1 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2">
              <div className="d-flex flex-column justify-content-start ">
                <div className="card blog-find">
                  <div className="card-body">
                    <h5>Find By Categories</h5>
                    <ul className="px-0 pt-3 ">
                      <li>Technology</li>
                      <li>New Tech</li>
                      <li>Vision Tech</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-10 d-flex  flex-wrap p-0">
                <BlogCard grid="col-4"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
