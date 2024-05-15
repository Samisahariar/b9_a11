import { useContext } from "react";
import { AuthCon } from "../authcontext/AuthContext";
import { Navigate } from "react-router-dom";

const Private = ({ children }) => {

    const { user, loader } = useContext(AuthCon);

    if (loader) {
        return <div className="w-[100%] h-[100vh] flex justify-center items-center"><span className="loading loading-infinity loading-lg"></span></div>
    }
    if (user) {
        return children
    }
    return <Navigate to="/"></Navigate>
};

export default Private;