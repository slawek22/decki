import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/cyber-hero-vs-hacker.png"; // ← twoja grafika z bohaterem i hakerem

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black/40 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-xl text-white text-center w-full max-w-2xl md:max-w-xl">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
          Cyberświat? Ty tu rządzisz
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Decure to platforma, która nauczy Cię, jak chronić siebie w sieci — przed
          hakerami, oszustami i fałszywymi klikami.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          <button
            onClick={() => navigate("/register")}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold"
          >
            Zaczynam od zera
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-white text-blue-700 hover:bg-blue-100 px-6 py-2 rounded-lg font-semibold"
          >
            Jestem już zalogowany
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-purple-900/70 p-4 rounded-xl">
            <p className="font-bold mb-1">🧠 Wiedza się liczy</p>
            <p>Jak nie dać się phishingowi?</p>
          </div>
          <div className="bg-indigo-900/70 p-4 rounded-xl">
            <p className="font-bold mb-1">🎮 Graj – ucz się</p>
            <p>Scenariusze z życia online.</p>
          </div>
          <div className="bg-blue-900/70 p-4 rounded-xl">
            <p className="font-bold mb-1">🏅 Zdobywaj odznaki</p>
            <p>Każdy poziom to nowa tarcza.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
