import Marquee from "react-fast-marquee"
import { sponser } from "../data"


export const SponserMarquee = () => {
    return (
        <div className="marquee-wrapper py-5">

            <div className="container-xxl">
                <div className="row" >
                    <div className="col-12 p-0">
                        <div className="marquee-inner-wrapper card-wrapper">
                            <Marquee>
                                {sponser.map((item, index) => (

                                    <div key={index} className="box mx-4" >
                                        <img src={item.img} alt="" />
                                    </div>
                                ))}
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
