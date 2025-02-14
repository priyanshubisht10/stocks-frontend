import { useEffect, useState } from "react";
import OrderStatusCard from "./OrderStatusCard";

const CompletedOrders = () => {
  const [completedOrders, setCompletedOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompletedOrders = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/order/completed`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming token is stored in localStorage
            "Content-Type": "application/json",
          },
        });

        const result = await response.json();
        if (result.success) {
          setCompletedOrders(result.data);
        } else {
          throw new Error("Failed to fetch orders");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCompletedOrders();
  }, []);

  if (loading) return <p>Loading completed orders...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div>
      {completedOrders.length > 0 ? (
        completedOrders.map((order) => (
          <OrderStatusCard
            key={order.order_id}
            order={order}
            showFilledQuantity={true}
          />
        ))
      ) : (
        <p className="text-gray-500 text-xl text-center py-4">
        No Completed orders found.
      </p>
      )}
    </div>
  );
};

export default CompletedOrders;

