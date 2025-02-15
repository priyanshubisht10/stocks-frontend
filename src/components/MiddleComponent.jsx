import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import StockCard from "./StockCard";

const MiddleComponent = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/stock");
        setStocks(response.data.data); // Accessing the 'data' array from response
      } catch (err) {
        setError("Failed to fetch stocks", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStocks();
  }, []);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-500">Our Stocks</h1>

      {loading ? (
        <p>Loading stocks...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="flex flex-row gap-4">
          {stocks.map((stock) => (
            <Link key={stock.stock_symbol} to={`/stock/${stock.stock_symbol}`}>
              <StockCard stock={stock} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MiddleComponent;
