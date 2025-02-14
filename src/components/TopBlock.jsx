import { useEffect, useState } from "react";
import { getStockData } from "../services/stockService";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
const stocks = [
  { symbol: "AAPL", name: "Apple Inc." },
  { symbol: "GOOGL", name: "Alphabet Inc." },
  { symbol: "MSFT", name: "Microsoft Corporation" },
  { symbol: "TSLA", name: "Tesla, Inc." },
  { symbol: "AMZN", name: "Amazon.com, Inc." },
];

const TopBlock = () => {
  const [stockData, setStockData] = useState({});
  const STORAGE_KEY = "stockData";

  useEffect(() => {
    const fetchData = async () => {
      // Check local storage first
      const cachedData = localStorage.getItem(STORAGE_KEY);
      if (cachedData && cachedData !== "{}") {
        console.log("Using cached stock data.");
        setStockData(JSON.parse(cachedData));
        console.log(stockData);
        return;
      }

      console.log("Fetching fresh stock data...");
      const results = await Promise.all(
        stocks.map(async ({ symbol }) => {
        console.log(`calling pi for ${symbol}`)
          const data = await getStockData(symbol);
          const timeSeries = data["Time Series (Daily)"];

          if (!timeSeries) return { symbol, data: null };
        
          // Extract only the latest 60 days
          const latest60Days = Object.keys(timeSeries)
            .slice(0, 60) // Get first 60 entries
            .reduce((acc, date) => {
              acc[date] = timeSeries[date];
              return acc;
            }, {});

          return { symbol, data: latest60Days };
        })
      );

      // Store the refined data in an object
      const stockMap = results.reduce((acc, { symbol, data }) => {
        if (data) acc[symbol] = data;
        return acc;
      }, {});

      // Store in local storage
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stockMap));

      // Update state
      setStockData(stockMap);
    };

    fetchData();
  }, []);

  return (
    <div className="flex w-full border border-gray-300 p-6">
      {/* Left Panel - Stock List */}
      <div className="w-[30%] border-r border-gray-300 pr-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-500">Trending Stocks</h2>
        <ul className="space-y-4">
          {stocks.map(({ symbol, name }) => {
            const stockInfo = stockData[symbol];
            const latestDate = stockInfo ? Object.keys(stockInfo)[0] : null;
            const latestPrices = latestDate ? stockInfo[latestDate] : null;

            return (
              <li
                key={symbol}
                className="p-4 flex justify-between items-center border-b border-gray-300"
              >
                <div>
                  <span className="font-semibold text-lg">{name}</span>
                  <span className="text-gray-500 ml-2">({symbol})</span>
                </div>
                <div className="flex items-center space-x-4">
                  {latestPrices ? (
                    <>
                      <span className="text-green-600 font-medium flex items-center">
                        <FaArrowUp className="mr-1" />
                        {parseFloat(latestPrices["1. open"]).toFixed(2)}
                      </span>
                      <span className="text-red-600 font-medium flex items-center">
                        <FaArrowDown className="mr-1" />
                        {parseFloat(latestPrices["4. close"]).toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <span className="text-gray-400">Loading...</span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Right Panel - Reserved for Graph */}
      <div className="w-[70%] flex justify-center items-center">
        <h2 className="text-gray-400 text-xl">
          Graph will be implemented here
        </h2>
      </div>
    </div>

    // <div>
    //   <div>
    //     <div>
    //       <h1>Trending Stocks</h1>
    //     </div>
    //     <div></div>
    //   </div>
    //   <div></div>
    // </div>
  );
};

export default TopBlock;
