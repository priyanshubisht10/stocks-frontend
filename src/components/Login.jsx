import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const isLoginPage = location.pathname === "/login";
  const isSignupPage = location.pathname === "/signup";
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:8000/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        // Store token in localStorage
        localStorage.setItem("token", data.user.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        navigate("/"); // Redirect on success
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.", err);
    }
  };
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
            <Link to="/signup">Signup</Link>
          </div>
        </div>
        <div className="p-6">
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-600 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-600 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
                required
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
  );
};

export default Login;
