import { useState } from "react";
import PendingOrders from "./PendingOrders";
import PartiallyFilledOrders from "./PartiallyFilledOrders";
import CompletedOrders from "./CompletedOrders";
const MyOrders = () => {
  const [tab, setTab] = useState("pending");
  const renderTabContent = () => {
    switch (tab) {
      case "pending":
        return <PendingOrders />;
      case "partiallyFilled":
        return <PartiallyFilledOrders />;
      case "completed":
        return <CompletedOrders />;
      default:
        return null;
    }
  };
  return (
    <div className="p-4">
      <div className="flex justify-around border-b border-gray-300 mb-4">
        {["pending", "partiallyFilled", "completed"].map((item) => (
          <button
            key={item}
            className={`px-4 py-2 font-medium ${
              tab === item
                ? "text-green-500 border-b-2 border-green-500"
                : "text-gray-500"
            }`}
            onClick={() => setTab(item)}
          >
            {item.charAt(0).toUpperCase() +
              item.slice(1).replace(/([A-Z])/g, " $1")}
          </button>
        ))}
      </div>
      <div>{renderTabContent()}</div>
    </div>
  );
};

export default MyOrders;
