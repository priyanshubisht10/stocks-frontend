// import { useState, useEffect } from "react";
// import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
// import StockCard from "./StockCard";
// const Portfolio = () => {
//   const [stocksData, setStocksData] = useState([
//     {
//       id: 1,
//       symbol: "AAPL",
//       company: "Apple Inc.",
//       price: 180.25,
//       quantity: 10,
//       profitLoss: 250,
//     },
//     {
//       id: 2,
//       symbol: "TSLA",
//       company: "Tesla Inc.",
//       price: 720.5,
//       quantity: 5,
//       profitLoss: -100,
//     },
//     {
//       id: 3,
//       symbol: "AMZN",
//       company: "Amazon Inc.",
//       price: 3300.75,
//       quantity: 2,
//       profitLoss: 500,
//     },
//   ]);

//   const [watchlist, setWatchlist] = useState([
//     {
//       id: 1,
//       name: "Tesla",
//       symbol: "TSLA",
//       price: 750.45,
//       change: 5.2, // Positive for gainers, negative for losers
//       logo: "https://logo.clearbit.com/tesla.com", // Example logo
//     },
//     {
//       id: 3,
//       name: "Apple",
//       symbol: "AAPL",
//       price: 145.32,
//       change: -2.1,
//       logo: "https://logo.clearbit.com/apple.com",
//     },
//   ]); // Initially watching AAPL & AMZN

//   const [portfolioSummary, setPortfolioSummary] = useState({
//     totalHoldings: 5000,
//     totalProfitLoss: 650,
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   //   useEffect(() => {
//   //     const fetchPortfolioData = async () => {
//   //       try {
//   //         setLoading(true);
//   //         const [stocksRes, watchlistRes, summaryRes] = await Promise.all([
//   //           fetch("/api/stocks"),
//   //           fetch("/api/watchlist"),
//   //           fetch("/api/portfolio-summary"),
//   //         ]);

//   //         const stocks = await stocksRes.json();
//   //         const watchlist = await watchlistRes.json();
//   //         const summary = await summaryRes.json();

//   //         setStocksData(stocks);
//   //         setWatchlist(watchlist);
//   //         setPortfolioSummary(summary);
//   //       } catch (err) {
//   //         setError("Failed to load data. Please try again.");
//   //       } finally {
//   //         setLoading(false);
//   //       }
//   //     };

//   //     fetchPortfolioData();
//   //   }, []);

//   const toggleWatchlist = async (id) => {
//     try {
//       const updatedWatchlist = watchlist.includes(id)
//         ? watchlist.filter((stockId) => stockId !== id)
//         : [...watchlist, id];

//       setWatchlist(updatedWatchlist); // Optimistically update UI

//       await fetch("/api/update-watchlist", {
//         method: "POST",
//         body: JSON.stringify({ watchlist: updatedWatchlist }),
//         headers: { "Content-Type": "application/json" },
//       });
//     } catch (error) {
//       console.error("Error updating watchlist:", error);
//     }
//   };

//   if (loading)
//     return <p className="text-center text-gray-600">Loading portfolio...</p>;
//   if (error) return <p className="text-center text-red-500">{error}</p>;
//   return (
//     <div className="p-6 max-w-5xl mx-auto">
//       <h1 className="text-2xl font-bold text-gray-800 mb-4">My Portfolio</h1>

//       {/* Portfolio Overview */}
//       {portfolioSummary && (
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
//           {/* Total Holdings Card */}
//           <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
//             <h2 className="text-gray-600 text-lg font-semibold">
//               Total Holdings
//             </h2>
//             <p className="text-2xl font-bold text-blue-600">
//               ${portfolioSummary.totalHoldings.toFixed(2)}
//             </p>
//           </div>

//           {/* Best Gainer Stock Card */}
//           <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
//             <h2 className="text-gray-600 text-lg font-semibold">Best Gainer</h2>
//             {stocksData.length > 0 ? (
//               (() => {
//                 const bestGainer = stocksData.reduce(
//                   (max, stock) =>
//                     stock.profitLoss > max.profitLoss ? stock : max,
//                   stocksData[0]
//                 );
//                 return (
//                   <p className="text-xl font-bold text-green-600">
//                     {bestGainer.symbol} (+${bestGainer.profitLoss.toFixed(2)})
//                   </p>
//                 );
//               })()
//             ) : (
//               <p className="text-gray-500">No Data</p>
//             )}
//           </div>

//           {/* Lifetime Profit/Loss Card */}
//           <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
//             <h2 className="text-gray-600 text-lg font-semibold">
//               Lifetime P/L
//             </h2>
//             <p
//               className={`text-2xl font-bold ${
//                 portfolioSummary.totalProfitLoss >= 0
//                   ? "text-green-600"
//                   : "text-red-600"
//               }`}
//             >
//               ${portfolioSummary.totalProfitLoss.toFixed(2)}
//             </p>
//           </div>
//         </div>
//       )}

//       {/* Stocks List */}
//       <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
//         {stocksData.map((stock) => (
//           <div
//             key={stock.id}
//             className="border border-gray-300 p-4 rounded-lg shadow-md flex justify-between items-center"
//           >
//             <div>
//               <h2 className="text-lg font-semibold">
//                 {stock.symbol} - {stock.company}
//               </h2>
//               <p className="text-gray-600">
//                 Current Price: ${stock.price.toFixed(2)}
//               </p>
//               <p className="text-gray-600">Quantity: {stock.quantity}</p>
//               <p
//                 className={`font-medium ${
//                   stock.profitLoss >= 0 ? "text-green-600" : "text-red-600"
//                 }`}
//               >
//                 P/L: ${stock.profitLoss.toFixed(2)}
//               </p>
//             </div>

//             {/* Watchlist Button */}
//             <button
//               onClick={() => toggleWatchlist(stock.id)}
//               className="text-xl"
//             >
//               {watchlist.includes(stock.id) ? (
//                 <AiFillHeart className="text-red-500" />
//               ) : (
//                 <AiOutlineHeart className="text-gray-500 hover:text-red-500" />
//               )}
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Watchlist Section */}
//       <h2 className="text-xl font-bold text-gray-800 mt-8">Watchlist</h2>
//       <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {watchlist.length > 0 ? (
//           watchlist.map((stock) => <StockCard key={stock.id} stock={stock} />)
//         ) : (
//           <p className="text-gray-500">No stocks in your watchlist</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Portfolio;













import { useState, useEffect } from "react";

import StockCard from "./StockCard";

const Portfolio = () => {
  const [portfolioSummary, setPortfolioSummary] = useState(null);
  const [holdingsData, setHoldingsData] = useState([]);
  const [tradeHistory, setTradeHistory] = useState([]);
  const [watchlist, setWatchlist] = useState([
    {
      id: 1,
      name: "Tesla",
      symbol: "TSLA",
      price: 750.45,
      change: 5.2,
      logo: "https://logo.clearbit.com/tesla.com",
    },
    {
      id: 3,
      name: "Apple",
      symbol: "AAPL",
      price: 145.32,
      change: -2.1,
      logo: "https://logo.clearbit.com/apple.com",
    },
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        setLoading(true);
        const [summaryRes, holdingsRes, tradeHistoryRes] = await Promise.all([
          fetch("http://localhost:8000/api/v1/user/portfolio/summary", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }),
          fetch("http://localhost:8000/api/v1/user/portfolio/holdings", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }),
          fetch("http://localhost:8000/api/v1/user/portfolio/trade-history", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }),
        ]);

        const summaryData = await summaryRes.json();
        const holdings = await holdingsRes.json();
        const trades = await tradeHistoryRes.json();

        setPortfolioSummary(summaryData);
        setHoldingsData(holdings);
        setTradeHistory(trades);
      } catch (err) {
        setError("Failed to load portfolio data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  if (loading)
    return (
      <p className="text-center text-gray-600 text-xl py-4">
        Loading portfolio...
      </p>
    );
  if (error)
    return <p className="text-center text-red-500 text-xl py-4">{error}</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">My Portfolio</h1>

      {/* Portfolio Summary */}
      {portfolioSummary && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {/* Total Portfolio Value Card */}
          <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
            <h2 className="text-gray-600 text-lg font-semibold">
              Total Holdings
            </h2>
            <p className="text-2xl font-bold text-blue-600">
              ${portfolioSummary.totalPortfolioValue.toFixed(2)}
            </p>
          </div>

          {/* Total Investment Card */}
          <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
            <h2 className="text-gray-600 text-lg font-semibold">
              Total Investment
            </h2>
            <p className="text-2xl font-bold text-blue-600">
              ${portfolioSummary.totalInvestment.toFixed(2)}
            </p>
          </div>

          {/* Unrealized P/L Card */}
          <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
            <h2 className="text-gray-600 text-lg font-semibold">
              Unrealized P/L
            </h2>
            <div className="flex items-center">
              <p
                className={`text-2xl font-bold ${
                  portfolioSummary.unrealizedPL >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                ${portfolioSummary.unrealizedPL.toFixed(2)}
              </p>
              <p className="text-sm text-gray-500 ml-2">
                ({portfolioSummary.unrealizedPLPercent})
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Stock Holdings */}
      <div className="mt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Your Investments</h2>
        {holdingsData.length > 0 ? (
          holdingsData.map((holding, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md mb-4 border border-gray-200"
            >
              {/* Top Section: Symbol, Quantity & Prices */}
              <div className="flex flex-col md:flex-row md:justify-between">
                <div>
                  <h2 className="text-lg font-bold text-gray-800">
                    {holding.stockSymbol}
                  </h2>
                  <p className="text-gray-600">Quantity: {holding.quantity}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <p className="text-gray-600">
                    Current Price: ${Number(holding.currentPrice).toFixed(2)}
                  </p>
                  {holding.purchasePrice !== undefined && (
                    <p className="text-gray-600">
                      Purchase Price: $
                      {Number(holding.purchasePrice).toFixed(2)}
                    </p>
                  )}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-300 my-2"></div>

              {/* Bottom Section: Total Value & Unrealized P/L */}
              <div className="flex flex-col md:flex-row md:justify-between items-center">
                <p className="text-gray-600">
                  Total Value: ${Number(holding.totalValue).toFixed(2)}
                </p>
                <p
                  className={`font-bold ${
                    holding.unrealizedPL >= 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  P/L: ${Number(holding.unrealizedPL).toFixed(2)}{" "}
                  <span className="text-sm text-gray-500">
                    (
                    {holding.unrealizedPLPercent
                      ? holding.unrealizedPLPercent
                      : "0.00%"}
                    )
                  </span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No stock holdings found.</p>
        )}
      </div>

      {/* Trade History */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Trade History</h2>
        {tradeHistory.length > 0 ? (
          tradeHistory.map((trade) => (
            <div
              key={trade.transactionId}
              className="border border-gray-300 p-4 rounded-lg shadow-md mb-2"
            >
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold">{trade.stockSymbol}</h3>
                  <p className="text-gray-600 text-sm">
                    {new Date(trade.transactionDate).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="font-semibold">
                    {trade.transactionType.toUpperCase()}
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-gray-600 text-sm">
                  Quantity: {trade.quantity}
                </p>
                <p className="text-gray-600 text-sm">
                  Price: ${Number(trade.price).toFixed(2)}
                </p>
                <p className="text-gray-600 text-sm">
                  Total: ${Number(trade.totalValue).toFixed(2)}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No trade history found.</p>
        )}
      </div>

      {/* Watchlist Section (unchanged) */}
      <h2 className="text-xl font-bold text-gray-800 mt-8">Watchlist</h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {watchlist.length > 0 ? (
          watchlist.map((stock) => <StockCard key={stock.id} stock={stock} />)
        ) : (
          <p className="text-gray-500 text-center">
            No stocks in your watchlist
          </p>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
