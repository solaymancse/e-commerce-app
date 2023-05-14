import { ProductCard } from "./ProductCard";

export const FeatureCollection = () => {
  return (
    <div className="blog-wrapper py-5">
      <div className="container-xxl">
        <div className="row">
          <h4>Feature Products</h4>
          <ProductCard />
        </div>
      </div>
    </div>
  );
};
