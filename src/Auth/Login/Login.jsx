import { useContext } from "react";
import { authContext } from "../../layout/MainLayout";
import { FaGoogle } from "react-icons/fa6";
import { Navigate, NavLink } from "react-router-dom";

const Login = ({ children }) => {
  const { handleSignIn, handleGoogleLogin } = useContext(authContext);
  const { user, loading } = useContext(authContext);
  if (loading) {
  }
  if (user) {
    return <Navigate to="/learn"></Navigate>;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    handleSignIn(email, password);
  };

  return (
    <div className="pt-10 bg-gradient-to-b from-[#58b58d44] to-[#f1ab4a3b]">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-[#fd7379] font-bold">Login now!</h1>
            <p className="py-6">
            Access your personalized learning journey and continue expanding your language skills with Lingo Bingo. Let's pick up where you left off!
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit}>
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
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-gradient-to-r from-[#fd7379] to-[#f1ab4a] text-white font-bold"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="flex items-center justify-center mb-2">
              <hr className="w-1/4 border-gray-400" />
              <span className="mx-3 text-gray-500 font-medium">OR</span>
              <hr className="w-1/4 border-gray-400" />
            </div>
            <div className="flex justify-center gap-4 mb-2">
              <button
                className="btn btn bg-gradient-to-r from-[#fd7379] to-[#f1ab4a] text-white font-bold"
                onClick={handleGoogleLogin}
              >
                <FaGoogle /> Google
              </button>
            </div>
            <div className="mb-6">
                <p className="text-center">Not Registered?<NavLink className="text-green-800 text-semibold" to="/signup"> Create an account</NavLink> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
