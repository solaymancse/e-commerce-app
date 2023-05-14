import { Helmet } from "react-helmet";

export const Meta = (props) => {
    const {title} = props;
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
            </Helmet>
        </>
    )
}
