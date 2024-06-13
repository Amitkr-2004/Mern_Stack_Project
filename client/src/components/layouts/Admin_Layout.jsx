import { NavLink,Navigate,Outlet } from "react-router-dom"
import { FaUser } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { useAuth } from "../../store/auth";

export const AdminLayout = () =>{

    //Authentication of admit layout page that only admin can use it
    const {user,isLoading}=useAuth()

    console.log("Admin Layout " ,user)

    if(isLoading){
        return <h1>Loading..</h1>
    }

    if(!user.isAdmin){      //We have to use loading effect to it as initially data is not fetched but afterwards data is fetched
        return <Navigate to = "/"/>
    }
    return(
        <>
            <header>
                <div className="container">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/admin/users"><FaUser />Users</NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/contacts"><MdPermContactCalendar />Contacts</NavLink>
                            </li>
                            <li>
                            <NavLink to="/admin/services"><RiCustomerService2Fill />Services</NavLink>
                            </li>
                            <li>
                            <NavLink to="/admin/Home"><FaHome />Home</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <Outlet />
        </>
    )
}