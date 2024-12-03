import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../components/Home/Home";
import Error404 from "../components/Error/Error404";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/home",
                element: <Home></Home>
            }
        ]
    },
    {
        path:"*",
        element:<Error404></Error404>
    }
])

export default router;