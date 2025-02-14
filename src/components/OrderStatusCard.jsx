
const OrderStatusCard = ({ order, showFilledQuantity = false }) => {
  const renderFilledOrPrice = () => {
    if (order.status === "partially_filled") {
      return (
        <>
          {order.filled_quantity}
          <div className="text-gray-500 text-sm">Filled</div>
        </>
      );
    } else if (order.status === "completed") {
      return (
        <>
          {order.price}
          <div className="text-gray-500 text-sm">Price</div>
        </>
      );
    }
    return null;
  };

  return (
    <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg border border-gray-200">
      {/* Date & Time */}
      <div className="w-[15%]">
        <div className="font-semibold">{new Date(order.created_at).toLocaleDateString()}</div>
        <div className="text-gray-500 text-sm">{new Date(order.created_at).toLocaleTimeString()}</div>
      </div>

      {/* Stock Symbol */}
      <div className="w-[15%]">
        <div className="font-bold">{order.stock_symbol}</div>
        <div className="text-gray-500 text-sm">NSE</div>
      </div>

      {/* Order Type (BUY/SELL) */}
      <div className="w-[15%]">
        <span
          className={`px-3 py-1 text-sm font-semibold rounded-md ${
            order.order_type === "buy" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {order.order_type.toUpperCase()}
        </span>
      </div>

      {/* Order Quantity */}
      <div className="w-[10%] text-center">
        {order.quantity}
        <div className="text-gray-500 text-sm">Requested</div>
      </div>

      {/* Conditional Filled Quantity or Price */}
      {showFilledQuantity &&
        order.status !== "failed" &&
        order.status !== "pending" && (
          <div className="w-[10%] text-center text-blue-600 font-semibold">
            {renderFilledOrPrice()}
          </div>
        )}

      {/* Order Mode */}
      <div className="w-[10%] text-center">{order.order_mode.toUpperCase()}</div>
    </div>
  );
};

export default OrderStatusCard;

