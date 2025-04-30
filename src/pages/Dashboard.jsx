import React from "react";

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Available Scenarios</h1>
      <ul className="list-disc list-inside">
        <li>Phishing Simulation</li>
        <li>Password Security Quiz</li>
        <li>Malware Response Training</li>
      </ul>
    </div>
  );
}
