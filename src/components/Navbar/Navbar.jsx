import { Link, NavLink } from "react-router-dom";
import logoIcon from "../../assets/logo-icon.png";
import { useContext } from "react";
import { authContext } from "../../layout/MainLayout";

const Navbar = () => {
  const { user, handleLogout, loading } = useContext(authContext);

  return (
    <div className="fixed top-0 z-10 shadow-md backdrop-blur-sm p-6 w-full">
      <div className="w-full mx-auto flex justify-between items-center px-4 ">
        <div className="flex items-center gap-2">
          <img className="size-8" src={logoIcon} alt="Logo" />
          <h3 className="text-2xl font-bold text-white">Lingo Bingo</h3>
        </div>
        <div>
          <ul className="flex gap-6 text-white font-semibold">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/learn">Learn</Link>
            </li>
            <li>
              <Link>Tutorial</Link>
            </li>
            <li>
              <Link>About Us</Link>
            </li>
            <li>
              <Link>Me</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 items-center">
          {
          loading ? (
            <span className="loading loading-ring loading-md"></span>
          ) : user ? (
            <img
              src={user.photoURL}
              alt="User Profile"
              className="w-10 h-10 rounded-full"
            />
          ) : null
          }
          {
          user ? (
            <button
              className="btn bg-[#f1ab4a] border-none text-white font-bold"
              onClick={handleLogout}
            >
              LogOut
            </button>
          ) : (
            <NavLink to="/login">
              <button className="btn bg-[#f1ab4a] border-none text-white font-bold">
                Login
              </button>
            </NavLink>
          )
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
