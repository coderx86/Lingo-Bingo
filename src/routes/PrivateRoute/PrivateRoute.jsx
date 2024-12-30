import { useContext } from "react";
import { authContext } from "../../layout/MainLayout";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading } = useContext(authContext);
    if(loading){
        return <div className="pt-24 flex justify-center bg-gradient-to-b from-[#58b58d44] to-[#f1ab4a3b]">
            <div className="py-20">
            <span className="loading loading-bars loading-lg"></span>
            </div>
        </div>
    }
    if(user){
        return children;
    }
    return (
        <div>
            <Navigate to="/login"></Navigate>
        </div>
    );
};

export default PrivateRoute;