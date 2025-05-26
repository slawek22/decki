import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/background-cyber-heroes.png"; // upewnij się, że to nowa grafika z bohaterami

export default function Home() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black/70 backdrop-blur-md p-8 rounded-2xl shadow-lg text-white text-center max-w-3xl w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Cyberświat? Ty tu rządzisz
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Decure to platforma, która nauczy Cię, jak chronić siebie w sieci — przed hakerami,
          oszustami i fałszywymi klikami.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
          <Link
            to="/register"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Zaczynam od zera
          </Link>
          <Link
            to="/login"
            className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
          >
            Jestem już zalogowany
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-purple-800/80 p-4 rounded-xl shadow-md">
            <div className="text-lg font-semibold mb-2">🧠 Wiedza się liczy</div>
            <div className="text-sm">Jak nie dać się phishingowi?</div>
          </div>
          <div className="bg-indigo-800/80 p-4 rounded-xl shadow-md">
            <div className="text-lg font-semibold mb-2">🎮 Graj – ucz się</div>
            <div className="text-sm">Scenariusze z życia online.</div>
          </div>
          <div className="bg-blue-900/80 p-4 rounded-xl shadow-md">
            <div className="text-lg font-semibold mb-2">🏅 Zdobywaj odznaki</div>
            <div className="text-sm">Każdy poziom to nowa tarcza.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
