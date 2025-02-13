import CompletedOrders from "./CompletedOrders";

const OrderStatusCard = ({ order, showFilledQuantity = false }) => {
  return (
    <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg border border-gray-200">
      {/* Date & Time */}
      <div className="w-[15%]">
        <div className="font-semibold">Order date</div>
        <div className="text-gray-500 text-sm">Order Time</div>
      </div>

      {/* Stock Symbol */}
      <div className="w-[15%]">
        <div className="font-bold">Stock symbol</div>
        <div className="text-gray-500 text-sm">NSE</div>
      </div>

      {/* Order Type (BUY/SELL) */}
      <div className="w-[15%]">
        <span
          className={`px-3 py-1 text-sm font-semibold rounded-md ${
            //order.orderType === "BUY"? 
            "bg-green-100 text-green-700"
             // : "bg-red-100 text-red-700"
          }`}
        >
         Order Type
        </span>
      </div>
      <div className="w-[10%] text-center">Order quantity</div>
      {showFilledQuantity && (
        <div className="w-[10%] text-center text-blue-600 font-semibold">
          Filled quantity
        </div>
      )}

      {/* Price */}
      <div className="w-[10%] text-center">Order mode</div>
    </div>
  );
};

export default OrderStatusCard;
