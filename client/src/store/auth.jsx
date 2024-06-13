import { createContext,useContext, useEffect, useState } from "react";


export const AuthContext=createContext();   


export const AuthProvider = ({children}) =>{
    const [token,setToken] = useState(localStorage.getItem("token"));
    const [user,setUser]=useState("");
    const [services,setServices]=useState([]);
    const [isLoading,setisLoading] = useState(true);
    const authorizationToken = `Bearer ${token}`;

    const storeTokenInLS = (serverToken) =>{
        setToken(serverToken)   //this will help to bring login and logout page at the instance
        return localStorage.setItem("token",serverToken);
    };

    const logoutUser =() =>{
        setToken("");
        return localStorage.removeItem("token");
    }

    let isLoggedIn= !!token;       //if token is present then it will return true else  false
    console.log(isLoggedIn);  
    
    //JWT awthentication->getting data of the currently logged in user

    const userAuthentication = async() => {
        try{
            setisLoading(true);
        const response = await fetch("http://localhost:5000/api/auth/user",{
            method:"GET",
            headers:{
                Authorization:authorizationToken
            }
        });

        if(response.ok){
            const data=await response.json();
            console.log("user Data" ,data.userData);    //data.userData as we in user page we are rendering all data inside userData
            setUser(data.userData);
            console.log("Loading .. ",isLoading)
            setisLoading(false);
            console.log("Loading .. ",isLoading)
        }
        else{
            setisLoading(false)
        }
    }
    catch(err){
        console.log(err)
    }
    }

    const getServices = async() =>{
        try{

        const response = await fetch("http://localhost:5000/api/data/service",{
            method:"GET",
        })
        if(response.ok){
            const data=await response.json();
            console.log(data.msg);
            setServices(data.msg);
        }
        }
        catch(err){ 
            console.log(`Error from the service side ${err}`)
        }
    }

    useEffect(()=>{
        userAuthentication();
        getServices();
    },[])
    
    return(
        <AuthContext.Provider value={{services,user,isLoggedIn,storeTokenInLS,logoutUser,authorizationToken,isLoading}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth =() =>{        //Custom hook 
    const AuthContextValue = useContext(AuthContext)
    if(!AuthContextValue){
        throw new Error("useAuth used outside of the provider");
    }
    return AuthContextValue;    
}