import { useEffect } from "react";
import { useAuth } from "../store/auth"
import { Navigate } from "react-router-dom";

export const Logout = () =>{
    const {logoutUser} = useAuth();

    useEffect(()=>{     //as we want to perform some operation after the rendering of the page
        logoutUser();
    },[logoutUser])

    return <Navigate to="/login" />;
}