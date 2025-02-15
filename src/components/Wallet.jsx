// import { useState } from "react";
// import {FaWallet, FaPlusCircle } from "react-icons/fa";

// const Wallet = () => {
//     const [balance, setBalance] = useState(5000); // Default balance
//   const [transactions, setTransactions] = useState([
//     { date: "12 Feb 2025", amount: 1000 },
//     { date: "08 Feb 2025", amount: 2000 },
//     { date: "03 Feb 2025", amount: 1500 },
//   ]);
//   const [amount, setAmount] = useState("");
//   const handleTopUp = () => {
//     if (!amount || amount <= 0) return;
//     const newTransaction = { date: new Date().toLocaleDateString(), amount: Number(amount) };
//     setTransactions([newTransaction, ...transactions]);
//     setBalance(balance + Number(amount));
//     setAmount("");
//   };
//   return (
//     <div className="w-full min-h-screen p-6">
//       {/* Wallet Balance Section */}
//       <div className="flex items-center justify-between bg-white shadow-md p-5 rounded-lg mb-6">
//         <div className="flex items-center space-x-3">
//           <FaWallet className="text-blue-500 text-4xl" />
//           <div>
//             <h2 className="text-lg font-semibold text-gray-600">Wallet Balance</h2>
//             <p className="text-3xl font-bold text-green-600">₹{balance.toLocaleString()}</p>
//           </div>
//         </div>
//         <button
//           onClick={handleTopUp}
//           className="flex items-center bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-blue-600 transition"
//         >
//           <FaPlusCircle className="mr-2" />
//           Top-Up
//         </button>
//       </div>

//       {/* Top-Up Input Section */}
//       <div className="bg-white p-5 rounded-lg shadow-md mb-6">
//         <h3 className="text-lg font-semibold text-gray-700 mb-3">Add Money</h3>
//         <div className="flex space-x-3">
//           <input
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
//             placeholder="Enter amount"
//           />
//           <button
//             onClick={handleTopUp}
//             className="flex items-center bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-blue-600 transition"
//           >
//             <FaPlusCircle className="mr-2" />
//             Add
//           </button>
//         </div>
//       </div>

//       {/* Transaction History */}
//       <div className="bg-white p-5 rounded-lg shadow-md">
//         <h3 className="text-lg font-semibold text-gray-700 mb-3">Recent Transactions</h3>
//         {transactions.length === 0 ? (
//           <p className="text-gray-500">No transactions yet.</p>
//         ) : (
//           <ul className="space-y-3">
//             {transactions.map((tx, index) => (
//               <li key={index} className="flex justify-between p-3 bg-gray-100 rounded-lg">
//                 <span className="text-gray-600">{tx.date}</span>
//                 <span className="font-semibold text-blue-600">+₹{tx.amount.toLocaleString()}</span>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Wallet









import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For programmatic navigation
import { FaWallet, FaPlusCircle } from "react-icons/fa";

const Wallet = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch wallet balance from DB
  const fetchBalance = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/v1/payment", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.success) {
        setBalance(data.balance);
      }
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  // Fetch payment history from backend
  const fetchPaymentHistory = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/v1/payment/history", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.success && data.payments) {
        // Transform payments if needed (for example, ensure date is in a readable format)
        setTransactions(data.payments);
      }
    } catch (error) {
      console.error("Error fetching payment history:", error);
    }
  };

  // Load balance and transactions on component mount
  useEffect(() => {
    fetchBalance();
    fetchPaymentHistory();
  }, []);

  // Handle Top-Up: create checkout session and redirect
  const handleTopUp = async () => {
    if (!amount || Number(amount) <= 0) return;

    setLoading(true);
    try {
      console.log(`Bearer ${localStorage.getItem("token")}`)
      const response = await fetch("http://localhost:8000/api/v1/payment/payment_intent", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: Number(amount) }),
      });
      const data = await response.json();
      if (data.status === "success" && data.url) {
        // Redirect to Stripe checkout session
        window.location.href = data.url;
      } else {
        console.error("Error creating checkout session", data);
      }
    } catch (error) {
      console.error("Error during top-up:", error);
    }
    setLoading(false);
  };

  return (
    <div className="w-full min-h-screen p-6">
      {/* Wallet Balance Section */}
      <div className="flex items-center justify-between bg-white shadow-md p-5 rounded-lg mb-6">
        <div className="flex items-center space-x-3">
          <FaWallet className="text-blue-500 text-4xl" />
          <div>
            <h2 className="text-lg font-semibold text-gray-600">Wallet Balance</h2>
            <p className="text-3xl font-bold text-green-600">₹{balance.toLocaleString()}</p>
          </div>
        </div>
        <button
          onClick={handleTopUp}
          disabled={loading}
          className="flex items-center bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          <FaPlusCircle className="mr-2" />
          {loading ? "Processing..." : "Top-Up"}
        </button>
      </div>

      {/* Top-Up Input Section */}
      <div className="bg-white p-5 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Add Money</h3>
        <div className="flex space-x-3">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter amount"
          />
          <button
            onClick={handleTopUp}
            disabled={loading}
            className="flex items-center bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            <FaPlusCircle className="mr-2" />
            {loading ? "Processing..." : "Add"}
          </button>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white p-5 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Recent Transactions</h3>
        {transactions.length === 0 ? (
          <p className="text-gray-500">No transactions yet.</p>
        ) : (
          <ul className="space-y-3">
            {transactions.map((tx, index) => (
              <li key={index} className="flex justify-between p-3 bg-gray-100 rounded-lg">
                <span className="text-gray-600">
                  {tx.date ? new Date(tx.date).toLocaleDateString() : "N/A"}
                </span>
                <span className="font-semibold text-blue-600">
                  +₹{Number(tx.amount).toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Wallet;
