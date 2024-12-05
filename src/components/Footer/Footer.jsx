import logo from "../../assets/logo-icon.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gradient-to-r from-[#3588aa] to-[#58b58c]">
        {/* footer container */}
        <div className="w-[90%] md:w-[80%] mx-auto sm:py-24 py-16 sm:flex justify-between">
          <div>
            <a className="flex items-center mb-6">
              <img className="h-[24px] w-[29px]" src={logo} alt="Logo" />
              <h2 className="text-3xl font-extrabold ml-2 text-white">
                Lingo Bingo
              </h2>
            </a>
            <p className="text-[#ffffffe6] mb-6">
              Location: av. Washington 165, NY CA 54003 <br />
              Phone: +31 85 964 47 25 <br />
              Email: info@yourdomain.com <br />
              Opening hours: 9.00 AM - 5.00 PM <br />
            </p>
            <div className="flex gap-6 text-2xl text-white sm:mb-0 mb-6">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white sm:mb-8 mb-4">
              Useful Links
            </h3>
            <ul className="text-[#ffffffe6]">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Learn</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-8 sm:mt-0 mt-6">
              Drop a Message
            </h3>
            <div className="mb-4">
              <input
                className="w-full rounded-xl bg-[#ffffff86] p-4 text-white"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <button className="btn bg-gradient-to-r from-[#fd7379] to-[#f1ab4a] w-full font-bold text-xl text-white border-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
