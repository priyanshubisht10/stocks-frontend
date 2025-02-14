import { useEffect, useState } from "react";
import OrderStatusCard from "./OrderStatusCard";

const FailedOrders = () => {
  const [failedOrders, setFailedOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFailedOrders = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/order/cancelled", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        });

        const result = await response.json();
        if (result.success) {
          setFailedOrders(result.data);
        } else {
          throw new Error("Failed to fetch orders");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFailedOrders();
  }, []);

  if (loading) return <p>Loading failed orders...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div>
      {failedOrders.length > 0 ? (
        failedOrders.map((order) => (
          <OrderStatusCard
            key={order.order_id}
            order={order}
            showFilledQuantity={false}
          />
        ))
      ) : (
        <p className="text-gray-500 text-xl text-center py-4">
        No failed orders found.
      </p>
      )}
    </div>
  );
};

export default FailedOrders;
