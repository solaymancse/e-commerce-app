import { BreadCrumb } from "../components/BreadCrumb";
import { Meta } from "../components/Meta";
import { WishlistCard } from "../components/WishlistCard";

export const Wishlist = () => {
  return (
    <>
      <Meta title="Favourite Wishlist" />
      <BreadCrumb title="Favourite Wishlist" />
      <div className="wishlist-wrapper home-wrapper-1 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex flex-wrap">
              <WishlistCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
