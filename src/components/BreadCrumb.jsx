import { Link } from "react-router-dom"

export const BreadCrumb = (props) => {
    const { title } = props;
    return (
        <div className="breadcrumb py-4">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <p>
                            <Link to="/">Home</Link> / {title}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
