import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../components/Home/Home";
import Error404 from "../components/Error/Error404";
import Learn from "../components/Learn/Learn";
import Login from "../Auth/Login/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SignUp from "../Auth/SignUp/SignUp";
import MainLayout from "../layout/MainLayout";
import Lesson from "../components/Lesson/Lesson";
import Me from "../components/Me/Me";
import Tutorial from "../components/Tutorial/Tutorial";
import UpdateProfile from "../Auth/UpdateProfile/UpdateProfile";
import ResetPassword from "../Auth/ResetPassword/ResetPassword";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path:"",
                element: <Navigate to="/home"></Navigate>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "reset-password",
                element: <ResetPassword></ResetPassword>
            },
            {
                path: "/update",
                element: <PrivateRoute>
                    <UpdateProfile></UpdateProfile>
                </PrivateRoute>
            },
            {
                path: "/learn",
                loader: ()=> fetch('japaneseWord.json'),
                element: <PrivateRoute>
                            <Learn></Learn>
                        </PrivateRoute>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/lesson/:cardNum",
                loader: ()=> fetch('japaneseWord.json'),
                element: <PrivateRoute>
                    <Lesson></Lesson>
                </PrivateRoute>
            },
            {
                path: "/Me",
                element: <PrivateRoute>
                    <Me></Me>
                </PrivateRoute>
            },
            {
                path:"/Tutorial",
                element:<PrivateRoute>
                    <Tutorial></Tutorial>
                </PrivateRoute>
            }
        ]
    },
    {
        path:"*",
        element:<Error404></Error404>
    }
])

export default router;