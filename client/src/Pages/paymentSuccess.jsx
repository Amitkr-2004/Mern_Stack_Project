import { NavLink } from "react-router-dom"

export const PaymentSuccess = () =>{
    return(
    <>
    <section id="error-page">
    <div className="content">
        <h4>Payment Successful</h4>

        <div className="btns">
            <NavLink to="/">Return home</NavLink>
            <NavLink to="/contact">Report problem</NavLink>
        </div>
    </div>
    </section>

</>
)
}