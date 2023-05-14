import { blog } from "../data"


export const Blog = () => {
    return (
        <div className="blog-wrapper">
            <div className="container-xxl">
                <div className="row">
                        <h4>Leatest Blogs</h4>
   
                    {blog.map((item,index)=> (
                    <div className="col-3 p-0 " key={index}>

                        <div  class="card" style={{width: '20.5rem'}}>
                            <img src={item.img} class="card-img-top" alt="" />
                            <div class="card-body">
                                <p>{item.date}</p>
                                <h5 class="card-title">{item.title}</h5>
                                <p class="card-text">{item.desc}</p>
                                <a href={item.link} class="btn blog-btn fs-14">Read More</a>
                            </div>
                        </div>
                    </div>
                     ))}

                </div>
            </div>
        </div>
    )
}
