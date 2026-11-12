// Polling means the frontend sends API requests repeatedly at a fixed time interval to get updated data from the server.
import React, { useEffect, useState } from "react";

// Mock API
const fetchOrderStatus = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const statuses = [
        "Order Placed",
        "Processing",
        "Shipped",
        "Out for Delivery",
        "Delivered",
      ];

      resolve(statuses[Math.floor(Math.random() * statuses.length)]);
    }, 500);
  });
};

const App = () => {
  const [status, setStatus] = useState("Checking...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let intervalId;

    const getStatus = async () => {
      try {
        const result = await fetchOrderStatus();

        setStatus(result);
        setLoading(false);

        if (result === "Delivered") {
          clearInterval(intervalId);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    getStatus();

    intervalId = setInterval(getStatus, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <h2>Order Tracking</h2>

      {loading ? (
        <p>Loading order status...</p>
      ) : (
        <div className="status-box">
          <h3>{status}</h3>
          <p>Updates every 5 seconds</p>
        </div>
      )}
    </div>
  );
};

export default App;
