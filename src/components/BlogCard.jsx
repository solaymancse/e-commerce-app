import { Link } from "react-router-dom";
import { blog } from "../data";

export const BlogCard = ({grid}) => {
  return (
    <>
      {blog.map((item, index) => (
        <div className={`${grid ? 'col-4 mb-2':'col-3 p-0 '}`} key={index}>
          <div class={`card ${grid ? 'grid-card':'grid-card-2'}`}>
            <img src={item.img} class="card-img-top" alt="" />
            <div class="card-body">
              <p>{item.date}</p>
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text">{item.desc}</p>
              <Link to={item.link} class="btn blog-btn">
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
