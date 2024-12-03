import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";

const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>
        </div>
    );
};

export default HomeLayout;