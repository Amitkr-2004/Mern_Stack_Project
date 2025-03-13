import { useAuth } from "../store/auth"
import axios from 'axios'

export const Service = () => {

    const handlePayment = async (price) =>{
        const data = {
          name: "John Doe",
          mobileNumber:1234567890,
          amount:price,
        }
        try {
          const response = await axios.post('http://localhost:5000/api/data/service/createOrder', data)
          console.log(response.data)
          window.location.href = response.data.url
        } catch (error) {
          console.log("error in payment", error)
        }
      }

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
                                    <div>
                                       <button onClick={(()=>{
                                            handlePayment(price)
                                       })}>
                                       Pay Now
                                       </button>  
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </section>
        </>
    )
}