import { useAuth } from "../hooks/useAuth";
import { Navigate, useNavigate } from "react-router";
import { useEffect } from "react";


const Protected = ({children}) => {

    const {loading , user} = useAuth()
    const navigate = useNavigate()

    if(!loading && !user){
        return <Navigate to="/login" />
    }

    if(loading){
        return <h1>Loading...</h1>
    }

  return children
}

export default Protected
