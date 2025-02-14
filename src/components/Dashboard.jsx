import { Link, Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import MyOrders from "./MyOrders";
import Wallet from "./Wallet";
import Portfolio from "./Portfolio";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("orders");
  return (
    <div className="flex min-h-screen">
      {/* Sidebar (Always Visible) */}
      <div className="w-[20%] p-4 min-h-screen border-r-2 border-slate-200">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard/orders"
              onClick={() => setActiveTab("orders")}
              className={`block p-3 rounded ${
                activeTab === "orders"
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-200"
              }`}
            >
              My Orders
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/wallet"
              onClick={() => setActiveTab("wallet")}
              className={`block p-3 rounded ${
                activeTab === "wallet"
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-200"
              }`}
            >
              Wallet
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/portfolio"
              onClick={() => setActiveTab("portfolio")}
              className={`block p-3 rounded ${
                activeTab === "portfolio"
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-200"
              }`}
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-2/3 p-6">
        <Routes>
          <Route path="/" element={<Navigate to="orders" replace />} />
          <Route path="orders" element={<MyOrders />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
