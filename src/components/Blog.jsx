import { BlogCard } from "./BlogCard";

export const Blog = () => {
  return (
    <div className="blog-wrapper">
      <div className="container-xxl">
        <div className="row">
          <h4>Leatest Blogs</h4>
          <BlogCard />
        </div>
      </div>
    </div>
  );
};
