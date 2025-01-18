import { useContext } from "react";
import { authContext } from "../../layout/MainLayout";
import { NavLink } from "react-router-dom";

const Me = () => {
  const { user, loading } = useContext(authContext);
  console.log(user);
  return (
    <div className="flex justify-center pt-24 bg-gradient-to-b from-[#58b58d44] to-[#f1ab4a3b]">
      <div className="my-16 py-16 border-[#58b58c] border-2 w-[500px] rounded-xl">
        <div className="flex justify-center mb-6">
          {loading ? (
            <span className="loading loading-ring loading-md"></span>
          ) : user ? (
            <img
              src={user.photoURL}
              alt="User Profile"
              className="size-[150px] rounded-full"
            />
          ) : null}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-center mb-2">
            Hey! I'm<span className="text-[#fd7379]"> {user.displayName}</span>
          </h2>
          <h2 className="text-xl text-center text-gray-600">
            <span className="font-bold">Email:</span> {user.email}
          </h2>
        </div>
        <div className="flex justify-center mt-6">
          <NavLink to="/update">
          <button className="btn btn bg-gradient-to-r from-[#fd7379] to-[#f1ab4a] border-none text-white font-bold"> Update Profile</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Me;
