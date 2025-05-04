import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/background-cyber.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const API = import.meta.env.VITE_API_URL;
  const navigate = useNavigate(); // <-- to dodajemy

  const handleLogin = async () => {
    try {
      const res = await fetch(`${API}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Błąd logowania");

      localStorage.setItem("token", data.token); // zapis tokena
localStorage.setItem("email", email);
      navigate("/dashboard"); // <-- przekierowanie po zalogowaniu
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black/60 p-8 rounded-xl shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold text-white mb-6">Formularz logowania</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-4 rounded text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Hasło"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mb-6 rounded text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
        >
          Zaloguj się
        </button>

        {message && <p className="mt-4 text-sm text-white">{message}</p>}
      </div>
    </div>
  );
}
