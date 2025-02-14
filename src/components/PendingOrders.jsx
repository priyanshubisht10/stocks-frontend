import { useEffect, useState } from "react";
import OrderStatusCard from "./OrderStatusCard";

const PendingOrders = () => {
  const [pendingOrders, setPendingOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPendingOrders = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/order/pending", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        });

        const result = await response.json();
        if (result.success) {
          setPendingOrders(result.data);
        } else {
          throw new Error("Failed to fetch orders");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPendingOrders();
  }, []);

  if (loading) return <p>Loading pending orders...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div>
      {pendingOrders.length > 0 ? (
        pendingOrders.map((order) => (
          <OrderStatusCard
            key={order.order_id}
            order={order}
            showFilledQuantity={false}
          />
        ))
      ) : (
        <p className="text-gray-500 text-xl text-center py-4">
        No Pending orders found.
      </p>
      )}
    </div>
  );
};

export default PendingOrders;
