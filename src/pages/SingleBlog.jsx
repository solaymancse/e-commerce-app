import { Meta } from "../components/Meta";
import { BreadCrumb } from "../components/BreadCrumb";
import { blog } from "../data";
import { LeaveComment } from "../components/LeaveComment";

export const SingleBlog = () => {
  return (
    <>
      <Meta title="Dynamic Blog Name" />
      <BreadCrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-1 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 p-0">
              <div className="">
                <div className="blog-img mb-5 ">
                  <img src="/images/blog-1.jpg" alt="" />
                </div>
                <div className="blog-content d-flex ">
                  <div className="col-9 blog-content-left">
                    <h5>FaDeli, Inside FaDeli, Life Hacks</h5>
                    <h5 className="blog-title mt-3">
                      কিভাবে সহজে দারাজে পণ্য ফেরত দিয়ে টাকা রিফান্ড পাবেন?
                    </h5>
                    <div className="author mt-5 d-flex gap-15 align-items-center">
                      <img src="/images/blog-1.jpg" alt="" />
                      <div>
                        <a href="">Autho Name</a>
                        <p>March 30, 2023 9:36 AM</p>
                      </div>
                    </div>
                   
                      <h5 className="mt-5 blog-desc">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures, to generate Lorem
                        Ipsum which looks reasonable. The generated Lorem Ipsum
                        is therefore always free from repetition, injected
                        humour, or non-characteristic words etc.
                      </h5>
                  <div>
                    <LeaveComment/>
                  </div>
                  </div>
                  <div className="col-3">
                    <h4>Related Posts</h4>
                    <div className="d-flex flex-wrap">
                      {blog.map((item, index) => (
                        <div className="col-6 related-blog mb-3">
                          <div key={index}>
                            <img src={item.img} alt="" />
                            <h6 className="mt-3">{item.title}</h6>
                          </div>
                        </div>
                      ))}
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
