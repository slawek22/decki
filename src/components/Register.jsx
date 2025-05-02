import React, { useState } from "react";
import AuthLayout from "./AuthLayout";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const API = import.meta.env.VITE_API_URL;

  const handleRegister = async () => {
    try {
      const res = await fetch(`${API}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error");
      setMessage("Zarejestrowano!");
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <AuthLayout title="Formularz rejestracji">
      <input
        type="email"
        placeholder="Email"
        className="mb-4 px-4 py-2 w-full rounded border"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Hasło"
        className="mb-4 px-4 py-2 w-full rounded border"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleRegister}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
      >
        Zarejestruj się
      </button>
      {message && <p className="mt-4 text-white">{message}</p>}
    </AuthLayout>
  );
}
