import { useContext } from "react";
import { authContext } from "../../layout/MainLayout";
import { FaGoogle } from "react-icons/fa6";
import { Navigate } from "react-router-dom";

const SignUp = () => {
  const { handleSignUp, handleGoogleLogin, user, loading } =
    useContext(authContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = e.target.displayName.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }
    if (password != confirmPassword) {
      alert("Passwords didn't match");
      return;
    }
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(
        password
      )
    ) {
      alert(
        "Password must include at least one lowercase letter, one uppercase letter, one number, and one special character."
      );
      return;
    }

    handleSignUp(email, password, photoURL, displayName);
  };
  if (loading) {
  }
  if (user) {
    return <Navigate to="/learn"></Navigate>;
  }
  return (
    <div>
      <div className="pt-24 pb-16 bg-gradient-to-b from-[#58b58d44] to-[#f1ab4a3b]">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl text-[#fd7379] font-bold">SignUp now!</h1>
              <p className="py-6">
              Join Lingo Bingo today and start your journey to mastering new languages with ease and confidence. It's free!
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="displayName"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">PhotoURL</span>
                  </label>
                  <input
                    type="url"
                    placeholder="PhotoURL"
                    name="photoURL"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn bg-gradient-to-r from-[#fd7379] to-[#f1ab4a] text-white font-bold"
                  >
                    SignUp
                  </button>
                </div>
              </form>
              <div className="flex items-center justify-center mb-2">
                <hr className="w-1/4 border-gray-400" />
                <span className="mx-3 text-gray-500 font-medium">OR</span>
                <hr className="w-1/4 border-gray-400" />
              </div>
              <div className="flex justify-center gap-4 mb-6">
                <button
                  className="btn btn bg-gradient-to-r from-[#fd7379] to-[#f1ab4a] text-white font-bold"
                  onClick={handleGoogleLogin}
                >
                  <FaGoogle /> Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
