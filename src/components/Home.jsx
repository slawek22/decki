import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/background-cyber-final.png"; // użyj nowej grafiki

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black/70 backdrop-blur-md p-8 rounded-2xl shadow-lg text-center max-w-3xl w-full">
        <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4">
          Cyberświat? Ty tu rządzisz
        </h1>
        <p className="text-white text-lg md:text-xl mb-8">
          Decure to platforma, która nauczy Cię, jak chronić siebie w sieci – przed
          hakerami, oszustami i fałszywymi klikami.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-10">
          <button
            onClick={() => navigate("/register")}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded text-lg font-semibold transition"
          >
            Zaczynam od zera
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-white text-blue-700 hover:bg-gray-200 py-2 px-6 rounded text-lg font-semibold transition"
          >
            Jestem już zalogowany
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-blue-800/80 text-white p-4 rounded-xl shadow">
            <p className="text-pink-300 font-semibold mb-2">🧠 Wiedza się liczy</p>
            <p>Jak nie dać się phishingowi?</p>
          </div>

          <div className="bg-blue-800/80 text-white p-4 rounded-xl shadow">
            <p className="text-pink-300 font-semibold mb-2">🕹️ Graj – ucz się</p>
            <p>Scenariusze z życia online.</p>
          </div>

          <div className="bg-blue-800/80 text-white p-4 rounded-xl shadow">
            <p className="text-pink-300 font-semibold mb-2">🏅 Zdobywaj odznaki</p>
            <p>Każdy poziom to nowa tarcza.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
