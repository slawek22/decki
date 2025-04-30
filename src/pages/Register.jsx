import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://decure-backend.onrender.com/api/user/register", {
        name,
        email,
        password
      });
      alert("Registration successful! You can now log in.");
    } catch (err) {
      alert("Registration failed: " + err.response.data);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto mt-20">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="border p-2 rounded" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border p-2 rounded" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="border p-2 rounded" />
        <button type="submit" className="bg-green-500 text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
}
