import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
const StockCard = ({ stock }) => {
  const [isWatchlisted, setIsWatchlisted] = useState(true);

  const toggleWatchlist = (e) => {
    e.stopPropagation();
    setIsWatchlisted(!isWatchlisted);
  };

  return (
    <div className="border border-gray-300 w-[18%] min-w-[200px] rounded-xl shadow-lg p-4 flex flex-col gap-4 justify-between mx-2 bg-white transition-transform hover:scale-105 relative">
      {/* Watchlist Button */}
      <button
        className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
        onClick={toggleWatchlist}
      >
        {isWatchlisted ? <AiFillHeart className="text-red-500" /> : <AiOutlineHeart />}
      </button>

      {/* Upper Section - Logo & Name */}
      <div className="flex flex-col items-center gap-3">
        <img className="w-14 h-14 border border-gray-400 rounded-full" src={stock.logo} alt={stock.name} />
        <div className="text-center">
          <h1 className="text-lg font-semibold text-gray-800">{stock.symbol}</h1>
          <h3 className="text-sm text-gray-600">{stock.name}</h3>
        </div>
      </div>

      {/* Lower Section - Price & Change */}
      <div className="flex justify-between items-center px-4 py-2 w-full bg-gray-100 rounded-md">
        <p className="text-lg font-semibold text-gray-900">${stock.price.toFixed(2)}</p>
        <p className={`${stock.change >= 0 ? "text-green-500" : "text-red-500"} font-medium`}>
          {stock.change >= 0 ? `+${stock.change}%` : `${stock.change}%`}
        </p>
      </div>
    </div>
  );
};

export default StockCard;
