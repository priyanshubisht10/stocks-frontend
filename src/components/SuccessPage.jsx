import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id"); // if you need to use it for verification

  useEffect(() => {
    // Optionally, you could call your backend to verify the session using sessionId.
    // After a delay, redirect the user back to the wallet page.
    const timer = setTimeout(() => {
      navigate("/dashboard/wallet");
    }, 3000); // Redirect after 3 seconds

    return () => clearTimeout(timer);
  }, [navigate, sessionId]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {/* Loader & Message */}
      <div className="flex items-center space-x-2">
        <div className="loader" />
        <span className="text-xl font-semibold">
          Payment Successful! Redirecting to your wallet...
        </span>
      </div>
      <p className="mt-4 text-gray-500">Do not refresh or close the page.</p>
    </div>
  );
};

export default SuccessPage;
