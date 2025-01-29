import { Link, useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isSignupPage = location.pathname === "/register";
  return (
    <div className="w-[100vw] h-[100vh] bg-slate-100 flex">
      <div className="bg-white w-[30%] mx-auto my-auto rounded-lg shadow-sm border border-slate-200">
        <div className="flex flex-row cursor-pointer">
          <div
            className={`w-[50%] h-[60px] flex justify-center items-center border border-slate-200 rounded-tl-lg text-sm font-medium mb-1 ${
              isLoginPage
                ? "border-b-blue-500 text-blue-600"
                : "text-neutral-600"
            }`}
          >
            <Link to="/login">Login</Link>
          </div>
          <div
            className={`w-[50%] h-[60px] flex justify-center items-center border border-slate-200 rounded-tr-lg text-sm font-medium mb-1 ${
              isSignupPage
                ? "border-b-blue-500 text-blue-600"
                : "text-neutral-600"
            }`}
          >
            <Link to="/register">Signup</Link>
          </div>
        </div>
        <div>
          <div className="p-6">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-600 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-neutral-300 text-blue-500 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-neutral-600">
                    Remember me
                  </span>
                </label>
                <Link className="text-sm text-blue-600 hover:text-blue-700">
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
