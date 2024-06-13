import { useAuth } from "../store/auth"

export const Service = () => {

    const { services } = useAuth();
    return (
        <>
            <section className="section-services">
                <div className="container">
                    <h1 className="main-heading">Services</h1>
                </div>

                <div className="container grid grid-three-cols">

                    {services.map((currEle, Index) => {

                        const { price, description, provider, service } = currEle;

                        return (
                            <div className="card" key={Index}>
                                <div className="card-img">
                                    <img
                                        src="Images/design.png"
                                        alt="Our services info"
                                        width="200"
                                    />
                                </div>

                                <div className="card-details">
                                    <div className="grid grid-two-cols">
                                        <p>{provider}</p>
                                        <p>{price}</p>
                                    </div>
                                    <h2>{service}</h2>
                                    <p>{description}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </section>
        </>
    )
}