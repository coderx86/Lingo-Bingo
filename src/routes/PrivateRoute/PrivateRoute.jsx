import { useContext } from "react";
import { authContext } from "../../layout/MainLayout";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading } = useContext(authContext);
    if(loading){
        return <h1>loading....</h1>
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