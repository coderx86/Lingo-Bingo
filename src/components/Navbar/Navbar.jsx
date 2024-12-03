import { Link } from "react-router-dom";
import logoIcon from "../../assets/logo-icon.png";

const Navbar = () => {
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
              <Link>Learn</Link>
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
        <div>
          <button className="btn bg-[#f1ab4a] border-none text-white font-bold">
            LogIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
