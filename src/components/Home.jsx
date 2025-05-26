import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/hero-cyber-defense.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black/70 backdrop-blur-sm text-white p-8 rounded-xl shadow-xl text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Cyberświat? Ty tu rządzisz</h1>
        <p className="text-lg mb-6">
          Decure to platforma, która nauczy Cię, jak chronić siebie w sieci – przed hakerami, oszustami i fałszywymi klikami.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/register")}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded font-semibold"
          >
            Zaczynam od zera
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded font-semibold"
          >
            Jestem już zalogowany
          </button>
        </div>

        <div className="mt-8 grid sm:grid-cols-3 gap-4 text-sm">
          <div className="bg-blue-900/60 p-4 rounded shadow">
            <h3 className="font-bold mb-1">🧠 Wiedz się liczy</h3>
            <p>Jak nie dać się phishingowi?</p>
          </div>
          <div className="bg-blue-900/60 p-4 rounded shadow">
            <h3 className="font-bold mb-1">🕹️ Graj – ucz się</h3>
            <p>Scenariusze z życia online.</p>
          </div>
          <div className="bg-blue-900/60 p-4 rounded shadow">
            <h3 className="font-bold mb-1">🏅 Zdobywaj odznaki</h3>
            <p>Każdy poziom to nowa tarcza.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
