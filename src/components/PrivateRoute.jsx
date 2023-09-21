import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
export default function PrivateRoute(){
    const {currentUser} = useAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        if(!currentUser){
            navigate('/login');
        }else{
            <Outlet />
        }
    })

}