import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/bohaterowie-lekki.png";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-8"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black/80 text-white p-10 rounded-3xl shadow-lg max-w-4xl w-full text-center">
        <p className="text-teal-400 uppercase tracking-widest text-sm mb-2">
          <span className="inline-block mr-1">📘</span>Zbuduj swoją cyfrową tarczę
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Cyberświat? Ty tu rządzisz
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Decure to platforma, która nauczy Cię, jak chronić siebie w sieci —
          przed hakerami, oszustami i fałszywymi klikami.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Link
            to="/register"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold text-lg"
          >
            Zaczynam od zera
          </Link>
          <Link
            to="/login"
            className="bg-white text-blue-700 hover:bg-gray-200 py-3 px-6 rounded-lg font-semibold text-lg"
          >
            Jestem już zalogowany
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="bg-purple-700/80 p-5 rounded-xl">
            <p className="text-lg font-bold mb-1">🧠 Wiedza się liczy</p>
            <p>Jak nie dać się phishingowi?</p>
          </div>
          <div className="bg-indigo-700/80 p-5 rounded-xl">
            <p className="text-lg font-bold mb-1">🎮 Graj – ucz się</p>
            <p>Scenariusze z życia online.</p>
          </div>
          <div className="bg-blue-800/80 p-5 rounded-xl">
            <p className="text-lg font-bold mb-1">🏅 Zdobywaj odznaki</p>
            <p>Każdy poziom to nowa tarcza.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
