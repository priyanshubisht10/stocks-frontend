import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isExploreActive =
    location.pathname === "/" || location.pathname === "/home";
  const isDashboardActive = location.pathname.startsWith("/dashboard");
  return (
    <div className="flex flex-row justify-around items-center my-auto py-3">
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
          className=" border border-slate-200 rounded-md p-[6px] w-[400px]"
        />
      </div>
      <div>
        <Link to="/login">
          <button className="py-2 bg-blue-500 text-white hover:bg-blue-600 transition-colors w-[100px] rounded">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
