import { NavLink } from "react-router-dom";
import logoIcon from "../../assets/logo-icon.png";
import { useContext, useState } from "react";
import { authContext } from "../../layout/MainLayout";

const Navbar = () => {
  const { user, handleLogout, loading } = useContext(authContext);

  const navLinkClasses = ({ isActive }) => 
    isActive ? "text-[#fd7379] text-extrabold text-xl" : "text-white";
  const [showBar, setshowBar] = useState(true);

  return (
<div>
  {/* welcome message */}
  {showBar && user?.displayName && (
  <div className="fixed top-0 w-full bg-green-500 text-white text-center py-2 px-4 flex justify-between items-center z-20">
    <span>
      Welcome, {user.displayName}!
    </span>
    <button
      onClick={() => setshowBar(false)}
      className="text-white font-bold text-lg"
    >
      ✖
    </button>
  </div>
)}

{/* navbar */}
<div
  className={`fixed ${
    showBar ? "top-8" : "top-0"
  } z-10 shadow-md backdrop-blur-sm p-6 w-full transition-all`}
>
      <div className="w-full mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-2">
          <img className="size-8" src={logoIcon} alt="Logo" />
          <h3 className="text-2xl font-bold text-white">Lingo Bingo</h3>
        </div>
        <div>
          <ul className="flex gap-6 text-white font-semibold">
            <li>
              <NavLink to="/home" className={navLinkClasses}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/learn" className={navLinkClasses}>
                Learn
              </NavLink>
            </li>
            <li>
              <NavLink to="/tutorial" className={navLinkClasses}>
                Tutorial
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClasses}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/me" className={navLinkClasses}>
                Me
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 items-center">
          {loading ? (
            <span className="loading loading-ring loading-md"></span>
          ) : user ? (
            <img
              src={user.photoURL}
              alt="User Profile"
              className="w-10 h-10 rounded-full"
            />
          ) : null}
          {user ? (
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
          )}
        </div>
      </div>
    </div>
</div>
  );
};

export default Navbar;
