import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Error404 from "../components/Error/Error404";
import Learn from "../components/Learn/Learn";
import Login from "../Auth/Login/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SignUp from "../Auth/SignUp/SignUp";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/learn",
                element: <PrivateRoute>
                            <Learn></Learn>
                        </PrivateRoute>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path:"*",
        element:<Error404></Error404>
    }
])

export default router;