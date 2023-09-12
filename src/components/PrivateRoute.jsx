import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// eslint-disable-next-line react/prop-types
export default function PrivateRoute(){
    const {currentUser} = useAuth();
    const navigate = useNavigate();

    return currentUser?<Outlet/>:(navigate('/login'));
}