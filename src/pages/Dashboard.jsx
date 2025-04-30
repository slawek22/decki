import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [scenarios, setScenarios] = useState([]);

  useEffect(() => {
    const fetchScenarios = async () => {
      try {
        const res = await axios.get("https://decure-backend.onrender.com/api/scenario");
        setScenarios(res.data);
      } catch (err) {
        console.error("Failed to fetch scenarios:", err);
      }
    };
    fetchScenarios();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Available Scenarios</h1>
      <ul className="list-disc list-inside">
        {scenarios.map((s, idx) => (
          <li key={idx}>
            <strong>{s.title}</strong>: {s.content}
          </li>
        ))}
      </ul>
    </div>
  );
}
