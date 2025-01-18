import React, { useContext } from "react";
import { authContext } from "../../layout/MainLayout";
import { Link } from "react-router-dom";

const UpdateProfile = () => {
  const { handleUpdate } = useContext(authContext);

  const handleSubmit = (e) =>{
    e.preventDefault();
    const displayName = e.target.displayName.value;
    const photoURL = e.target.photoURL.value;

    handleUpdate(displayName, photoURL);
  }

  return (
    <div>
      <div className="flex justify-center pt-24 bg-gradient-to-b from-[#58b58d44] to-[#f1ab4a3b]">
        <div className="my-16 border-[#58b58c] border-2 w-[500px] rounded-xl">
            <form onSubmit={handleSubmit} className="p-10">
                <div className="mb-4">
                    <p className="text-gray-600 mb-2">Name</p>
                    <div><input 
                    className="w-full rounded-xl bg-[#ffffff86] p-4 text-black" 
                    type="text" 
                    placeholder="Name" 
                    name="displayName"
                    required/></div>
                </div>
                <div className="mb-8">
                    <p className="text-gray-600 mb-2">Photo URL</p>
                    <div><input 
                    className="w-full rounded-xl bg-[#ffffff86] p-4 text-black" 
                    type="text" 
                    placeholder="Photo url" 
                    name="photoURL"
                    required/></div>
                </div>
                <div className="flex justify-between">
                    <button 
                    className="btn bg-gradient-to-r from-[#3588aa] to-[#58b58c] text-white"
                    type="submit">Update</button>
                    <Link to="/me">
                    <button className="btn bg-gradient-to-r from-[#fd7379] to-[#f1ab4a] border-none text-white">Cancel</button>
                    </Link>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
