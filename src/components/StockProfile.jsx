import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "./Form";
import StockChart from "./StockChart";
import Slider from "./Slider"; // Import the Slider component

const StockProfile = () => {
  const { stockSymbol } = useParams(); // Retrieve stockSymbol from URL params
  const [chartData, setChartData] = useState([]); // State to store chart data
  const [dayLow, setDayLow] = useState(0); // State for day's low price
  const [dayHigh, setDayHigh] = useState(0); // State for day's high price
  const [currentPrice, setCurrentPrice] = useState(0); // State for current price

  // Fetch historical data when the component mounts
  useEffect(() => {
    const fetchHistoricalData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/stock/data-points/${stockSymbol}`);
        const data = await response.json();
        console.log(data);

        if (data.status === "success") {
          // Initialize chartData with historical data
          setChartData(data.data.history);
          console.log("Initial chartData:", data.data.history);

          if (data.data.history.length > 0) {
            const lastDataPoint = data.data.history[data.data.history.length - 1];
            setDayLow(lastDataPoint.day_low);
            setDayHigh(lastDataPoint.day_high);
            setCurrentPrice(lastDataPoint.price);
          }
        } else {
          console.error("Failed to fetch historical data:", data.message);
        }
      } catch (error) {
        console.error("Error fetching historical data:", error);
      }
    };

    fetchHistoricalData();
  }, [stockSymbol]);

  // Connect to WebSocket server and listen for updates
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3000");

    ws.onopen = () => {
      console.log("WebSocket connection established");
      // Subscribe to the stock symbol
      ws.send(JSON.stringify({ stock_symbol: stockSymbol }));
    };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.stock === stockSymbol) {
        // Log the received price
        console.log(`Received price for ${stockSymbol}: ${message.price}`);

        // Update chartData with the new price
        const newDataPoint = {
          timestamp: new Date(message.timestamp).toLocaleString(),
          price: message.price,
          day_low: message.day_low,
          day_high: message.day_high,
        };

        setChartData((prevData) => {
          const updatedData = [...prevData, newDataPoint];
          console.log("Updated chartData:", updatedData); // Log the updated chartData
          return updatedData;
        });

        // Update dayLow, dayHigh, and currentPrice in real-time
        setDayLow(message.day_low);
        setDayHigh(message.day_high);
        setCurrentPrice(message.price);
      }
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      ws.close();
    };
  }, [stockSymbol]);

  return (
    <div className="ml-24 p-6">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row mt-10 gap-10">
        {/* Left Panel - Stock Details */}
        <div className="lg:w-3/5">
          <div className="flex flex-row gap-6 items-center">
            <img
              className="w-24 h-24 border border-gray-300 rounded-lg"
              src=""
              alt=""
            />
            <div>
              <h1 className="text-4xl font-bold text-blue-600">{stockSymbol}</h1>
              <h2 className="text-lg text-gray-700">Company Name</h2>
            </div>
          </div>

          {/* Stock Graph */}
          <div className="my-6">
            <div className="border border-gray-300 w-full h-[400px] rounded-lg shadow-md p-4">
              {/* Replace the placeholder with the StockChart component */}
              <StockChart chartData={chartData} dayLow={dayLow} dayHigh={dayHigh} />            </div>
          </div>

          {/* Real-Time Slider */}
          <div className="mt-6">
            <Slider dayLow={dayLow} dayHigh={dayHigh} currentPrice={currentPrice} />
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
            <strong>Company description:</strong> Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>

          {/* Today's Stats */}
          <div className="flex flex-wrap gap-6 mt-6">
            <div className="border border-gray-300 shadow-md p-4 rounded-lg w-[150px]">
              <p className="text-gray-600">Today&apos;s Low</p>
              <p className="text-lg font-semibold text-blue-500">${dayLow.toFixed(2)}</p>
            </div>
            <div className="border border-gray-300 shadow-md p-4 rounded-lg w-[150px]">
              <p className="text-gray-600">Today&apos;s High</p>
              <p className="text-lg font-semibold text-blue-500">${dayHigh.toFixed(2)}</p>
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