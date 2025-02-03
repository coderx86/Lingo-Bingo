import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../../layout/MainLayout";
import { Helmet } from "react-helmet-async";

const ResetPassword = () => {
  const { handleResetPass } = useContext(authContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    window.open("https://mail.google.com", "_blank");
    handleResetPass(email);
    e.target.reset();
  };

  return (
    <div>
      <Helmet>
        <title>Lingo Bingo | Reset Password</title>
      </Helmet>
      <div className="flex justify-center pt-24 bg-gradient-to-b from-[#58b58d44] to-[#f1ab4a3b]">
        <form onSubmit={handleSubmit}>
          <div className="my-16 border-[#58b58c] border-2 sm:w-[500px] w-[400px] rounded-xl">
            <div className="p-10">
              <h3 className="text-2xl font-bold text-center text-[#fd7379] mb-8">
                Reser your password
              </h3>
              <div className="mb-4">
                <p className="text-gray-600 mb-2">Email</p>
                <div>
                  <input
                    className="w-full rounded-xl bg-[#ffffff86] p-4 text-black"
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  className="btn bg-gradient-to-r from-[#3588aa] to-[#58b58c] text-white"
                  type="submit"
                >
                  Reset
                </button>
                <NavLink to="/login">
                  <button className="btn bg-gradient-to-r from-[#fd7379] to-[#f1ab4a] border-none text-white">
                    Cancel
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
