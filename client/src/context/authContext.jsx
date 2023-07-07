
import { useState,createContext, useContext } from "react";
import { registerRequest,loginRequest } from "../api/auth";
import { set } from "mongoose";
import { useEffect } from "react";
// creamos un contexto para el usuario
export const authContext= createContext();

// hook que facilita la vida
export const useAuth=()=>{
    const context=useContext(authContext);
    if(!context) throw new Error("useAuth must be used within an auhtprovider")
    return context;
}

export const AuthProvider=({children})=>{
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors,setErrors]=useState([])
    
    useEffect(()=>{
        if(errors.length>0){
            const time=setTimeout(() => {
                setErrors([])
            }, 5000);
            return()=>clearTimeout(time)
        }
    },[errors])

    const signup=async(user)=>{ 
        try {
            const res= await registerRequest(user);
            setUser(user)
            setIsAuthenticated(true)
            console.log(isAuthenticated,"cambio")
        } catch (error) {
            // handlear todos los errorrs
            console.log("errores",error.response.data)
            setErrors(error.response.data)
            console.log(errors,"seterrros")
        }

    };

    const signin=async(user)=>{ 
        try {
            const res= await loginRequest(user);
            setUser(user)
            setIsAuthenticated(true)
            console.log(res)
            console.log(isAuthenticated,"cambio")
        } catch (error) {
            // handlear todos los errorrs
            console.log("errores",error.response.data)
            setErrors(error.response.data)
            console.log(errors,"seterrros")

        }

    };


    return (
        <authContext.Provider value={{
            signup,user,signin,isAuthenticated,errors
        }}>
        {children}
        </authContext.Provider>
    )



}

