import { Link } from "react-router-dom"

export const BreadCrumb = (props) => {
    const { title } = props;
    return (
        <div className="breadcrumb py-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12 breadcrumb-title">
                        <p style={{fontWeight:'500'}} className="text-center ">
                            <Link to="/">Home</Link> / {title}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
