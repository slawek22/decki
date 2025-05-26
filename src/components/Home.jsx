import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/bg-hero-battle.png"; // Upewnij się, że plik ma tę nazwę

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black/70 backdrop-blur p-10 rounded-xl shadow-lg w-full max-w-3xl text-center text-white">
        <div className="mb-4 text-cyan-400 uppercase tracking-wide font-semibold text-sm">
          🔰 Zbuduj swoją cyfrową tarczę
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Cyberświat? Ty tu rządzisz
        </h1>
        <p className="mb-6 text-lg md:text-xl">
          Decure to platforma, która nauczy Cię, jak chronić siebie w sieci
          — przed hakerami, oszustami i fałszywymi klikami.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <button
            onClick={() => navigate("/register")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg"
          >
            Zaczynam od zera
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-white text-blue-700 hover:bg-blue-100 font-semibold py-2 px-6 rounded-lg"
          >
            Jestem już zalogowany
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-purple-800/80 p-4 rounded-xl shadow">
            <div className="text-lg font-bold mb-1">🧠 Wiedza się liczy</div>
            <p>Jak nie dać się phishingowi?</p>
          </div>
          <div className="bg-indigo-800/80 p-4 rounded-xl shadow">
            <div className="text-lg font-bold mb-1">🎮 Graj – ucz się</div>
            <p>Scenariusze z życia online.</p>
          </div>
          <div className="bg-blue-900/80 p-4 rounded-xl shadow">
            <div className="text-lg font-bold mb-1">🏅 Zdobywaj odznaki</div>
            <p>Każdy poziom to nowa tarcza.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
