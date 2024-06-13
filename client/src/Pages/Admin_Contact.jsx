import { useEffect, useState } from "react"
import { useAuth } from "../store/auth"
import { toast} from 'react-toastify';

export const AdminContact= () =>{
    const [contacts,setContacts] = useState([]);

    const {authorizationToken}=useAuth();

    const getAllContactsData = async() =>{
        try{
        const response=await fetch("http://localhost:5000/api/admin/contact",{
            method:"GET",
            headers:{
                Authorization: authorizationToken,
            }
        })
        const data=await response.json();
        if(response.ok){
            console.log(`Contact Data ${data}`);
            setContacts(data);
        }
    }
    catch(err){
        console.log(err)
    }
    }

    const deleteContact = async(id) =>{
        try{
            const response=await fetch(`http://localhost:5000/api/admin//contacts/delete/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization:authorizationToken
                }
            })
            const data=await response.json();
            console.log("rem users contact ",data)
            if(response.ok){
                getAllContactsData();
                toast.success("Contact deleted Successfully")
            }
            }
            catch(err){
                console.log(err)
                toast.error("Contact not deleted")
        }
        
    }

    useEffect(()=>{
        getAllContactsData();
    },[])
    return(
        <>
            <section className="admin-contacts-section">
                <div className="container">
                    <h1> Admin Contact Data</h1>
                </div>
                <div className="container admin-users">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Message</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {contacts.map((currUser,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{currUser.username}</td>
                                        <td>{currUser.email}</td>
                                        <td>{currUser.message}</td>
                                        <td>
                                        <button className="btn" onClick={()=>deleteContact(currUser._id)}>
                                            Delete
                                        </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}