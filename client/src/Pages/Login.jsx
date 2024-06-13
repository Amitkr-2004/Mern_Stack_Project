import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../store/auth"
import { toast} from 'react-toastify';

export const Login = () =>{

const [user,setUser]=useState({
    email:"",
    password:""
})

const HandleInput = (e) =>{
    
    console.log(e);
    const name=e.target.name;
    const value=e.target.value;

    setUser({
        ...user,
        [name]:value
    })
}
const {storeTokenInLS} = useAuth();

const navigate=useNavigate();

const handleSubmit = async(e) =>{   
    e.preventDefault(); 
    console.log(user)
    try{
        const response=await fetch("http://localhost:5000/api/auth/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user),
        })

        const res_data=await response.json();
        
        if(response.ok){
            
            //Storing token from Contect API
            storeTokenInLS(res_data.token)

            setUser({email:"", password:""})
            toast.success("login successful")   
            navigate("/")
        }
        else{
            toast.error(res_data.extraMessage?res_data.extraMessage:res_data.message) //Here the first priority is zod validation and then backend error message
        }
    }
    catch(err){
        console.log("Login",err)
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
                                    src="Images/login.jpg" 
                                    alt="amit"
                                />
                            </div>

                            {/*Making Login page */}

                            <div className="registration-form">
                                <h1 className="main-heading mb-3">Login Form</h1>
                                <br />

                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="email">email</label>
                                        <input 
                                            type="text"
                                            name="email"
                                            placeholder="Enter your Email"
                                            id="email"
                                            required
                                            value={user.email}
                                            onChange={HandleInput}
                                            autoComplete="off"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="password">password</label>
                                        <input 
                                            type="text"
                                            name="password"
                                            placeholder="Enter your password"
                                            id="password"
                                            required
                                            value={user.password}
                                            onChange={HandleInput}
                                            autoComplete="off"
                                        />
                                    </div>

                                <button type="submit" className="btn btn-submit"> 
                                    Login Now
                                </button>
                                </form>
                            </div>  

                            <br />
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}