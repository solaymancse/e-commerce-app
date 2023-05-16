import { ProductCard } from "./ProductCard";

export const FeatureCollection = () => {
  return (
    <div className="blog-wrapper py-5">
      <div className="container-xxl p-0">
        <div className="row">
          <h4>Feature Products</h4>
          <div className="d-flex">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};
