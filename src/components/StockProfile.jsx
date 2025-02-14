import Form from "./Form";

const StockProfile = () => {
  return (
    <div className="ml-24 p-6">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row mt-10 gap-10">
        {/* Left Panel - Stock Details */}
        <div className="lg:w-3/5">
          <div className="flex flex-row gap-6 items-center">
            <img className="w-24 h-24 border border-gray-300 rounded-lg" src="" alt="" />
            <div>
              <h1 className="text-4xl font-bold text-blue-600">Symbol</h1>
              <h2 className="text-lg text-gray-700">Company Name</h2>
            </div>
          </div>

          {/* Stock Graph */}
          <div className="my-6">
            <div className="border border-gray-300 w-full h-[400px] flex items-center justify-center rounded-lg shadow-md bg-gray-50">
              <p className="text-gray-500">Graph here</p>
            </div>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="lg:w-2/5 px-6">
          <Form />
        </div>
      </div>

      {/* Overview Section */}
      <div className="mt-8">
        <div className="border-b-2 pb-2">
          <h1 className="inline-block text-xl font-bold text-blue-600 border-b-2 border-blue-600">
            Overview
          </h1>
        </div>

        {/* Description & Stats */}
        <div className="py-4">
          <p className="text-gray-700 text-md">
            <strong>Company description:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          {/* Today's Stats */}
          <div className="flex flex-wrap gap-6 mt-6">
            <div className="border border-gray-300 shadow-md p-4 rounded-lg w-[150px]">
              <p className="text-gray-600">Today's Low</p>
              <p className="text-lg font-semibold text-blue-500">$123.45</p>
            </div>
            <div className="border border-gray-300 shadow-md p-4 rounded-lg w-[150px]">
              <p className="text-gray-600">Today's High</p>
              <p className="text-lg font-semibold text-blue-500">$150.75</p>
            </div>
          </div>
        </div>
      </div>

      {/* Market Data Section */}
      <div className="flex flex-wrap justify-between gap-6 border-t-2 border-gray-300 mt-6 pt-6">
        <div className="flex flex-col gap-1 p-4 border rounded-lg shadow-sm w-[160px]">
          <p className="text-gray-600">Open</p>
          <p className="text-green-600 font-semibold">$125.00</p>
        </div>
        <div className="flex flex-col gap-1 p-4 border rounded-lg shadow-sm w-[160px]">
          <p className="text-gray-600">Close</p>
          <p className="text-red-600 font-semibold">$120.50</p>
        </div>
        <div className="flex flex-col gap-1 p-4 border rounded-lg shadow-sm w-[160px]">
          <p className="text-gray-600">Volume</p>
          <p className="font-semibold text-gray-800">500K</p>
        </div>
        <div className="flex flex-col gap-1 p-4 border rounded-lg shadow-sm w-[160px]">
          <p className="text-gray-600">Market Cap</p>
          <p className="font-semibold text-gray-800">$1.2B</p>
        </div>
      </div>
    </div>
  );
};

export default StockProfile;
