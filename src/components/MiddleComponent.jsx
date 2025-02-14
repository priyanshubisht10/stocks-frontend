import { Link } from "react-router-dom"
import StockCard from "./StockCard"

const MiddleComponent = () => {
  let stock = {
    id: 1,
    name: "Tesla",
    symbol: "TSLA",
    price: 750.45,
    change: 5.2,
    logo: "https://logo.clearbit.com/tesla.com",
  };
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-500">Our Stocks</h1>
      <div>
        <Link to={`/stock/${stock.id}`}>
          <StockCard stock={stock} />
        </Link>
      </div>
    </div>
  )
}

export default MiddleComponent