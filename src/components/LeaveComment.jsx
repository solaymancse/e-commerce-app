import {
  BsArrowLeft,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import { Link } from "react-router-dom";

export const LeaveComment = () => {
  return (
    <div className="comment-wrapper py-4 ">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center">
            <Link to="/blogs" className="d-flex gap-10 align-items-center">
              <BsArrowLeft />
              Back to blog
            </Link>
            <div className="social-icons d-flex gap-10 py-3 align-items-center">
              <a href="">
                <BsLinkedin color="#333" />
              </a>
              <a href="">
                <BsInstagram color="#333" />
              </a>
              <a href="">
                <BsGithub color="#333" />
              </a>
              <a href="">
                <BsYoutube color="#333" />
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="text-secondary fs-6 mt-3 mb-3">Leave A Comment</h5>
              <form action="">
                <div className="d-flex gap-15">
                  <input
                    type="text"
                    placeholder="Name*"
                    className="form-control p-2"
                    name="email"
                  />
                  <input
                    type="email"
                    placeholder="Email*"
                    className="form-control p-2"
                    name="email"
                  />
                </div>
                <div className="mt-3">
                  <textarea
                    name=""
                    id=""
                    className="w- 100 form-control"
                    cols="30"
                    rows="5"
                    placeholder="Comment"
                  ></textarea>
                </div>
                <button className="mt-4 button border-0">
                    Post Comment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
