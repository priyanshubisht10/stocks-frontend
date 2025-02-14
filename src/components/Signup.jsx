import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  
  const location = useLocation();
  const navigate = useNavigate();
  const isLoginPage = location.pathname === "/login";
  const isSignupPage = location.pathname === "/signup";
  const [pan, setPan] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState("");
  const handleVerifyPAN = async (e) => {
    e.preventDefault();
    if (!pan) {
      setError("PAN number is required");
      return;
    }

    setIsVerifying(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:8000/api/v1/user/pan-verify", { pan_number: pan });
      const panDetails = response.data.data;
      console.log(panDetails)
      navigate("/register", { state: { panDetails } });
    } catch (err) {
      setError("Failed to verify PAN. Please try again.",err);
    } finally {
      setIsVerifying(false);
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
        <div>
          <div className="p-6">
          <form className="space-y-4" onSubmit={handleVerifyPAN}>
              <div>
                <label className="block text-sm font-medium text-neutral-600 mb-1">
                  PAN Number
                </label>
                <input
                  type="text"
                  value={pan}
                  onChange={(e) => setPan(e.target.value)}
                  className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your PAN number"
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                disabled={isVerifying}
              >
                {isVerifying ? "Verifying..." : "Verify"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
