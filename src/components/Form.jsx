import { useState } from "react";
const Form = () => {
  const [type, setType] = useState("buy");
  const [orderType, setOrderType] = useState("market");
  return (
    <div className="flex flex-col border border-slate-200 p-4">
      <div className="text-xl font-bold">bank,price</div>
      <div className="flex gap-4 mb-6">
        <button
          className={`flex-1 py-3 rounded transition-colors ${
            type === "buy"
              ? "bg-blue-500 text-white"
              : "bg-white border border-blue-500 text-blue-500"
          }`}
          onClick={() => setType("buy")}
        >
          Buy
        </button>
        <button
          className={`flex-1 py-3 rounded transition-colors ${
            type === "sell"
              ? "bg-blue-500 text-white"
              : "bg-white border border-blue-500 text-blue-500"
          }`}
          onClick={() => setType("sell")}
        >
          Sell
        </button>
      </div>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-neutral-600 mb-1">
              Order Type
            </label>
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
            <label className="block text-sm font-medium text-neutral-600 mb-1">
              Quantity
            </label>
            <input
              type="number"
              className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter quantity"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-600 mb-1">
              Price
            </label>
            <input
              type="text"
              className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder={
                orderType === "market" ? "At market price" : "Enter price"
              }
              disabled={orderType === "market"}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-600 mb-1">
            Trigger Price
          </label>
          <input
            type="number"
            className="w-full p-2 border border-neutral-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Optional"
          />
        </div>
        <div className="bg-neutral-50 p-4 rounded border border-neutral-200">
          <h3 className="font-medium mb-2">Order Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Estimated Value</span>
              <span className="font-medium">blahblahblah</span>
            </div>
            <div className="flex justify-between">
              <span>Brokerage</span>
              <span className="font-medium">vhjcgqw</span>
            </div>
            <div className="flex justify-between border-t border-neutral-200 pt-2 mt-2">
              <span className="font-medium">Total</span>
              <span className="font-medium">blahblahblah</span>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Place Buy Order
        </button>
      </form>
      <div></div>
      <div></div>
    </div>
  );
};

export default Form;
