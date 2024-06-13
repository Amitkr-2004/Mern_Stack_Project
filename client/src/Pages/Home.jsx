import { Analytics } from "../components/Analytics"
import { NavLink } from "react-router-dom"
export const Home = () => {
    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p> We are the World Best IT company</p>
                            <h1>Welcome to NextGen Technology</h1>
                            <p>
                                Are you ready to take your business to the next level with
                                cutting-edge IT solutions? Look no further! At NextGen Technology,
                                we specialize in providing innovative IT services and solutions
                                tailored to meet your unique needs.
                            </p>
                            <div className="btn btn-group">
                                <NavLink to="/contact">
                                    <button className="btn">Connect Now</button>
                                </NavLink>
                                <NavLink to="/service">
                                    <button className="btn secondary-btn">Learn More</button>
                                </NavLink>
                            </div>
                        </div>

                        {/* hero image */}
                        <div className="hero-image">
                            <img
                                src="Images/home.jpg"
                                alt="coding together"
                            />
                        </div>
                    </div>
                </section>
            </main>

            {/* 2nd section  */}
            <Analytics />

            {/* 3rd section  */}
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    {/* hero images  */}
                    <div className="hero-image">
                        <img
                            src="/Images/home2.jpg"
                            alt="coding together"
                            width="400"
                            height="500"
                        />
                    </div>

                    <div className="hero-content">
                        <p>We are here to help you</p>
                        <h1>Get Started Today</h1>
                        <p>
                            Ready to take the first step towards a more efficient and secure
                            IT infrastructure? Contact us today for a free consultation and
                            lets discuss how NextGen Technology can help your business thrive in
                            the digital age.
                        </p>
                        <div className="btn btn-group">
                            <NavLink to="/contact">
                                <button className="btn">connect now</button>
                            </NavLink>
                            <NavLink to="/service">
                                <button className="btn secondary-btn">learn more</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

