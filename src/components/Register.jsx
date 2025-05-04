import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/background-cyber.png";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const API = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await fetch(`${API}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Błąd rejestracji");
      setMessage("Zarejestrowano pomyślnie!");
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
        <h2 className="text-2xl font-semibold text-white mb-6">Formularz rejestracji</h2>

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
          onClick={handleRegister}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
        >
          Zarejestruj się
        </button>

        {message && <p className="mt-4 text-sm text-white">{message}</p>}

        {message.includes("Zarejestrowano") && (
          <button
            onClick={() => navigate("/login")}
            className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Przejdź do logowania
          </button>
        )}
      </div>
    </div>
  );
}