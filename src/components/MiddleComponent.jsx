import { Link } from "react-router-dom"
import StockCard from "./StockCard"

const MiddleComponent = () => {
  let id = 1;
  return (
    <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 text-blue-500">Our Stocks</h1>
        <div>
          <Link to={`/stock/${id}`}><StockCard/></Link>
        </div>
    </div>
  )
}

export default MiddleComponent