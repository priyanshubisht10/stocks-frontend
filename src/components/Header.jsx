import { Link, useLocation } from "react-router-dom";
import { useEffect,useState } from "react";

const Header = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const isExploreActive =
    location.pathname === "/" || location.pathname === "/home";
  const isDashboardActive = location.pathname.startsWith("/dashboard");
  useEffect(() => {
    // Retrieve user from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex flex-row justify-around items-center mt-1 py-4">
        <div>
          <h1 className="text-3xl font-bold">DirectXchange</h1>
        </div>
        <div className="flex flex-row gap-[50px] text-xl">
          <div className={isExploreActive ? "text-blue-500 font-bold" : ""}>
            <Link to="/">Explore</Link>
          </div>
          <div className={isDashboardActive ? "text-blue-500 font-bold" : ""}>
            <Link to="/dashboard">Dashboard</Link>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <input
            type="search"
            placeholder="Search Stock"
            className="border border-slate-200 rounded-md p-[6px] w-[400px]"
          />
        </div>
        <div>
          {user ? (
            // Show username if user exists
            <span className="font-semibold px-4 py-2 rounded">
              {user.username}
            </span>
          ) : (
            // Otherwise, show Login button
            <Link to="/login">
              <button className="py-2 bg-blue-500 text-white hover:bg-blue-600 transition-colors w-[100px] rounded">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;