import { categories } from "../data"


export const Categories = () => {
    return (
        <>
            <div className="categories ">
                <div className="container-xxl p-0">
                    <div className="row py-2">
                        <h4>Categories</h4>
                        <div className="col-12 d-flex ">
                            {categories.map((item, index) => (

                                <div key={index} className="categories-item-list d-flex flex-column align-items-center gap-10 ">
                                    <img className="cat-img" src={item.img} alt="" />
                                    <p>{item.title}</p>

                                </div>
                            ))}
                        </div>
                        <div className="col-12 d-flex ">
                            {categories.map((item, index) => (

                                <div key={index} className="categories-item-list-2 d-flex flex-column align-items-center gap-10 ">
                                    <img className="cat-img" src={item.img} alt="" />
                                    <p>{item.title}</p>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
