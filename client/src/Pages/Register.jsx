import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../store/auth"
import { toast} from 'react-toastify';

export const Register = () =>{
    const [user,setUser] = useState({
    username:"",
    email:"",
    phone:"",
    password:""
})
const {storeTokenInLS}=useAuth();

const InputValue = (e) =>{
    console.log(e);
    const name=e.target.name;
    const value=e.target.value;

    setUser({
        ...user,
        [name]:value
    })
}
const navigate=useNavigate();

const handleSubmit = async(e) =>{
    e.preventDefault(); 
    try{
        const response=await fetch("http://localhost:5000/api/auth/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user),      //converts the object to JSON data as from frontend it is in object form
    });
    


    const res_data = await response.json(); 
    storeTokenInLS(res_data.token)

    if(response.ok){
        //Storing token from Contect API
        toast.success("User Got Registered")
        setUser({username:"",email:"",phone:"",password:""})
        navigate("/")
    }
    else{
        toast.error(res_data.extraMessage?res_data.extraMessage:res_data.message) //Here the first priority is zod validation and then backend error message
    }
}
    catch(err){
        console.log("Register",err)
    }
}
    return(
        <>
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img 
                            src="/Images/register.jpg"
                            alt="amit" 
                            />
                        </div>

                        {/* registration form filling up*/}

                        <div className="registration-form">
                            <h1 className="main-heading mb-3">Registration Form</h1>
                            <br/>

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username">username</label>
                                    <input 
                                        type="text"
                                        name="username"
                                        placeholder="Enter your name"
                                        id="username"
                                        required
                                        value={user.username}
                                        onChange={InputValue}
                                        autoComplete="off"
                                    /> 
                                </div>

                                <div>
                                    <label htmlFor="email">email</label>
                                    <input 
                                        type="text"
                                        name="email"
                                        placeholder="Enter your email"
                                        id="email"
                                        required
                                        value={user.email}
                                        onChange={InputValue}
                                        autoComplete="off"
                                    /> 
                                </div>

                                <div>
                                    <label htmlFor="phone">phone</label>
                                    <input 
                                        type="number"
                                        name="phone"
                                        placeholder="Enter your Phone Number"
                                        id="phone"
                                        required
                                        value={user.phone}
                                        onChange={InputValue}
                                        autoComplete="off"
                                    /> 
                                </div>

                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input 
                                        type="text"
                                        name="password"
                                        placeholder="Enter your Password"
                                        id="password"
                                        required
                                        value={user.password}
                                        onChange={InputValue}
                                        autoComplete="off"
                                    /> 
                                </div>

                        <br />
                        <button type="submit" className="btn btn-submit"> 
                            Register Now
                        </button>

                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
        </>
    )
}
