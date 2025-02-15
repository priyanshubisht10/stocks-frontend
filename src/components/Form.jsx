import { useState } from "react";
import axios from "axios";
const Form = ({stockSymbol}) => {
  const [type, setType] = useState("buy");
  const [orderType, setOrderType] = useState("market");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [triggerPrice, setTriggerPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const token = localStorage.getItem("token"); // Assuming token is stored in localStorage

      const orderData = {
        stock_symbol: stockSymbol,
        price: orderType === "market" ? null : parseFloat(price),
        quantity: parseInt(quantity, 10),
        order_type: type,
        order_mode: orderType,
        trigger_price: triggerPrice ? parseFloat(triggerPrice) : null,
      };
      console.log(orderData);
      const response = await axios.post("http://localhost:8000/api/v1/order/place-order/", orderData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include auth token
        },
      });
      console.log(response);

      setSuccess("Order placed successfully!");
      setType("buy");
      setOrderType("market");
      setQuantity("");
      setPrice("");
      setTriggerPrice("");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col border border-slate-200 p-4">
      <div className="text-xl font-bold">{stockSymbol}</div>

      <div className="flex gap-4 mb-6">
        <button
          className={`flex-1 py-3 rounded transition-colors ${
            type === "buy" ? "bg-blue-500 text-white" : "bg-white border border-blue-500 text-blue-500"
          }`}
          onClick={() => setType("buy")}
        >
          Buy
        </button>
        <button
          className={`flex-1 py-3 rounded transition-colors ${
            type === "sell" ? "bg-blue-500 text-white" : "bg-white border border-blue-500 text-blue-500"
          }`}
          onClick={() => setType("sell")}
        >
          Sell
        </button>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-neutral-600 mb-1">Order Type</label>
            <select
              className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={orderType}
              onChange={(e) => setOrderType(e.target.value)}
            >
              <option value="market">Market</option>
              <option value="limit">Limit</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-neutral-600 mb-1">Quantity</label>
            <input
              type="number"
              className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-600 mb-1">Price</label>
            <input
              type="number"
              className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder={orderType === "market" ? "At market price" : "Enter price"}
              disabled={orderType === "market"}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required={orderType === "limit"}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-600 mb-1">Trigger Price (Optional)</label>
          <input
            type="number"
            className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Optional"
            value={triggerPrice}
            onChange={(e) => setTriggerPrice(e.target.value)}
          />
        </div>

        <div className="bg-neutral-50 p-4 rounded border border-neutral-200">
          <h3 className="font-medium mb-2">Order Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Estimated Value</span>
              <span className="font-medium">{orderType === "limit" ? price * quantity : "Market price"}</span>
            </div>
            <div className="flex justify-between">
              <span>Brokerage</span>
              <span className="font-medium">₹0.00</span>
            </div>
            <div className="flex justify-between border-t border-neutral-200 pt-2 mt-2">
              <span className="font-medium">Total</span>
              <span className="font-medium">{orderType === "limit" ? price * quantity : "Market price"}</span>
            </div>
          </div>
        </div>

        {error && <div className="text-red-500 text-sm">{error}</div>}
        {success && <div className="text-green-500 text-sm">{success}</div>}

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          disabled={loading}
        >
          {loading ? "Placing Order..." : `Place ${type === "buy" ? "Buy" : "Sell"} Order`}
        </button>
      </form>
    </div>
  );
};

export default Form;
