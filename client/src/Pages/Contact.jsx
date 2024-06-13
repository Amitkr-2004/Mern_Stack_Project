import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast} from 'react-toastify';

export const Contact = () =>{
    const [contact,setContact]=useState({
        username:"",
        email:"",
        message:""
    })

    //Logic to get the data from logged in user
    const [userData,setUserData]=useState(true);

    const {user} = useAuth();   //contains all the logged in data

    if(userData && user){
        setContact({
            username:user.username,
            email:user.email,
            message:""
        });
        setUserData(false);
    }

    const navigate = useNavigate();

    const InputValue = (e)=>{
        console.log(e)  
        const name=e.target.name
        const value=e.target.value

        setContact({
            ...contact,
            [name]:value
        }
    )
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();

        try{
            const response = await fetch("http://localhost:5000/api/form/contact",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(contact)
            })
            if(response.ok){
                const data=await response.json()
                console.log("contact Data ",data);
                setContact({username:"",email:"",message:""})
                toast.success("Message sent successfully")
            }
        }
        catch(err){
            toast.error("Message Not Sent ")
            console.log(err);
        }
    }
    return(
        <>
            <section className="section-contact" >
                <div className="contact-content container">
                    <h1 className="main-header">Contact Us</h1>
                </div>
                <div className="container grid grid-two-cols">
                    <div className="contact-img">
                        <img src="Images/contact.webp" alt="Sombody is contacting us" />
                    </div>

                    {/* Contact us form */}

                    <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Enter Your Username"
                                    id="username"
                                    autoComplete="off"
                                    required
                                    value={contact.username}
                                    onChange={InputValue}
                                />
                            </div>

                            <div>
                                <label htmlFor="email">email</label>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Enter Your Email"
                                    id="email"
                                    autoComplete="off"
                                    required
                                    value={contact.email}
                                    onChange={InputValue}
                                />
                            </div>

                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    type="text"
                                    name="message"
                                    placeholder="Enter Your Message"
                                    id="message"
                                    autoComplete="off"
                                    required
                                    value={contact.message}
                                    onChange={InputValue}
                                    cols="30"
                                    rows="6"
                                />
                            </div>

                            <div>
                            <button type="submit">Submit</button>
                            </div>
                        </form>
                    </section>
                </div>


                <section className="mb-3">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.8154486479357!2d87.28851487562578!3d23.539139278815124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7720f8b59dabf%3A0xc1a45ae405276d8c!2sJunction%20Mall!5e0!3m2!1sen!2sin!4v1717232855685!5m2!1sen!2sin" width="100%" 
                height="450"  
                allowFullScreen
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">

                </iframe>
            </section>
            </section>
        </>
    )
}
