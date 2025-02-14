// const PartiallyFilledOrders = () => {
//   return (
//     <div>PartiallyFilledOrders</div>
//   )
// }

// export default PartiallyFilledOrders

import { useEffect, useState } from "react";
import OrderStatusCard from "./OrderStatusCard";

const PartiallyFilledOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/order/partially_filled`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        });

        const result = await response.json();
        if (result.success) {
          setOrders(result.data);
        } else {
          throw new Error("Failed to fetch orders");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p>Loading partially filled orders...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div>
      {orders.length > 0 ? (
        orders.map((order) => (
          <OrderStatusCard
            key={order.order_id}
            order={order}
            showFilledQuantity={true}
          />
        ))
      ) : (
        <p className="text-gray-500 text-xl text-center py-4">
        No Partially Filled orders found.
      </p>
      )}
    </div>
  );
};

export default PartiallyFilledOrders;
