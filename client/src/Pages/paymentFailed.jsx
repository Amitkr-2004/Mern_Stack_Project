import { NavLink } from "react-router-dom"

export const PaymentFailed = () =>{
    return(
    <>
    <section id="error-page">
    <div className="content">
        <h4>Payment Failed</h4>

        <div className="btns">
            <NavLink to="/">Return home</NavLink>
            <NavLink to="/contact">Report problem</NavLink>
        </div>
    </div>
    </section>

</>
)
}