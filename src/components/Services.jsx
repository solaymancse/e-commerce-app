import { services } from '../data'

export const Services = () => {
    return (
        <>
            <div className="container-xxl p-0">
                <div className="row">
                    <div className="col-12 py-5">
                        <div className="services d-flex justify-content-between h-20 d-inline-block">
                            {services.map((item, index) => (

                                <div key={index} className='d-flex gap-15'>
                                    {item.icon}
                                    <div>
                                        <h6>{item.title}</h6>
                                        <p>{item.des}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
