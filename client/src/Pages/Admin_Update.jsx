import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AdminUpdate = () =>{
    const [data,setData]=useState({
        username:"",
        email:"",
        phone:""
    })
    const params=useParams();
    const {authorizationToken} = useAuth();

    const getSingleUsersData = async() =>{
        try{
        const response=await fetch(`http://localhost:5000/api/admin/users/${params.id}`,{
            method:"GET",
            headers:{
                Authorization:authorizationToken
            }
        })
        const data = await response.json();
        console.log(data);
        setData(data)
    }
    catch(err){
        console.log(err);
    }
    }

    useEffect(()=>{
        getSingleUsersData();
    },[])

    const InputValue = async(e) =>{
        const name=e.target.name;
        const val=e.target.value;
        
        setData({
            ...data,
            [name]:val
        })
    }

    const navigate=useNavigate();

    const handleSubmit = async(e) =>{
        e.preventDefault()
        try{
            const response=await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:authorizationToken
                },
                body:JSON.stringify(data)
            })
            if(response.ok){
                navigate("/admin/users")
                toast.success("Update Successfull")
            }
            else{
                toast.error("Not Updated")
            }
        }
        catch(err){
            console.log(err);
        }
    }

    return(
        <>
            <section className="section-contact" >
                <div className="contact-content container">
                    <h1 className="main-header">Update User</h1>
                </div>
                <div className="container grid grid-two-cols">

                    {/* Update form */}

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
                                    value={data.username}
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
                                    value={data.email}
                                    onChange={InputValue}
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="phone">Mobile</label>
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Enter Your phone"
                                    id="phone"
                                    autoComplete="off"
                                    required
                                    value={data.phone}
                                    onChange={InputValue}
                                />
                            </div>

                            <div>
                            <button type="submit">Submit</button>
                            </div>
                        </form>
                    </section>
                </div>
            </section>
        </>
    )
}