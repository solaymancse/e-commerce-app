import { useState } from "react";
import { ProductCard } from "./ProductCard";

export const FilterSortGrid = () => {
    const [grid, setGrid] = useState(4)

  return (
    <>
    <div className="filter-sort-grid d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <p className="mb-0 d-flex" style={{width:'100%'}}>Sort By :</p>
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            >
            <option selected>Feature</option>
            <option value="1">Best Selling</option>
            <option value="2">Alphabetically , A-Z</option>
            <option value="2">Alphabetically , Z-A</option>
            <option value="3">Price, low to high</option>
            <option value="3">Price, high to low</option>
            <option value="3">Date, old to new</option>
            <option value="3">Date, new to old</option>
          </select>
        </div> 

        <div className="d-flex align-items-center gap-10">
            <p className="mb-0">21 Products</p>
            <div className="d-flex align-items-center grid gap-10">
                <img src="images/gr4.svg" alt="" className="d-block img-fluid" onClick={()=> setGrid(3)}/>
                <img src="images/gr3.svg" alt="" className="d-block img-fluid" onClick={()=> setGrid(4)}/>
                <img src="images/gr2.svg" alt="" className="d-block img-fluid" onClick={()=> setGrid(6)}/>
                <img src="images/gr.svg" alt="" className="d-block img-fluid" onClick={()=> setGrid(12)}/>
            </div>
        </div>
    </div>
    <div className="gap-10 d-flex py-3 flex-wrap">
        <ProductCard grid={grid}/>
    </div>
</>
  );
};
