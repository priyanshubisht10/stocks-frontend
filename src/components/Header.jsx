import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isExploreActive =
    location.pathname === "/" || location.pathname === "/home";
  return (
    <div className="flex flex-row justify-around items-center mt-2">
      <div>
        <h1 className="text-3xl font-bold">DirectXchange</h1>
      </div>
      <div className="flex flex-row gap-[50px] text-xl">
        <div className={isExploreActive ? "text-green-500 font-bold" : ""}>
          Explore
        </div>
        <div>Dashboard</div>
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
