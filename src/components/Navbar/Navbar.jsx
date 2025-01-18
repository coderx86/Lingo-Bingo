import { NavLink } from "react-router-dom";
import logoIcon from "../../assets/logo-icon.png";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../layout/MainLayout";

const Navbar = () => {
  const { user, handleLogout, loading } = useContext(authContext);

  const navLinkClasses = ({ isActive }) =>
    isActive ? "text-[#fd7379] text-extrabold text-xl" : "text-white";
  const [showBar, setshowBar] = useState(true);
  useEffect(() => {
    if (!user) {
      setshowBar(false);
    } else {
      setshowBar(true);
    }
  }, [user]);
  return (
    <div>
      {/* welcome message */}
      {showBar && user?.displayName && (
        <div className="fixed top-0 w-full bg-green-500 text-white text-center py-2 px-4 flex justify-between items-center z-20">
          <span>Hey! {user.displayName}, Welcome to Lingo Bingo.</span>
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
        <div className="w-[90%] mx-auto flex justify-between items-center ">
          {/* Hamburger Menu for Small Screens */}
          <div className="lg:hidden">
            <div className="dropdown">
              <button tabIndex="0" className="btn btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
              <ul
                tabIndex="0"
                className="menu menu-sm dropdown-content shadow-md backdrop-blur-xl rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/learn">Start-learning</NavLink>
                </li>
                <li>
                  <NavLink to="/tutorial">Tutorials</NavLink>
                </li>
                {user && (
                  <>
                    <li>
                      <NavLink to="/me">Me</NavLink>
                    </li>
                    <li>
                      <NavLink to="/" onClick={handleLogout}>
                        LogOut
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* Logo and Title */}
          <NavLink className="flex items-center gap-2" to="/home">
            <img className="h-6 w-6" src={logoIcon} alt="Logo" />
            <h3 className="text-2xl font-bold text-white">Lingo Bingo</h3>
          </NavLink>

          {/* Navbar for Large Screens */}
          <div className="hidden lg:flex">
            <ul className="flex gap-6 text-white font-semibold">
              <li>
                <NavLink to="/home" className={navLinkClasses}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/learn" className={navLinkClasses}>
                  Start-learning
                </NavLink>
              </li>
              <li>
                <NavLink to="/tutorial" className={navLinkClasses}>
                  Tutorials
                </NavLink>
              </li>
              <li>
                {user && (
                  <NavLink to="/me" className={navLinkClasses}>
                    Me
                  </NavLink>
                )}
              </li>
            </ul>
          </div>

          {/* User Section */}
          <div className="flex gap-4 items-center">
            {loading ? (
              <span className="loading loading-ring loading-md"></span>
            ) : user ? (
              <NavLink to="/me">
                <img
                  src={user.photoURL}
                  alt="User Profile"
                  className="w-10 h-10 rounded-full"
                />
              </NavLink>
            ) : null}
            {user ? (
              <button
                className="btn hidden sm:block bg-[#f1ab4a] border-none text-white font-bold"
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
