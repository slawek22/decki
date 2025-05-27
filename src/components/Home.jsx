import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/bohaterowie-lekki.png"; // Grafika z bohaterami i hakerem

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-8"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black/70 backdrop-blur-md text-white p-8 rounded-2xl shadow-xl w-full max-w-3xl text-center">
        <div className="text-teal-400 uppercase tracking-wide font-semibold text-sm mb-2">
          🔰 Wersja testowa – dla młodych obrońców sieci
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Cyberświat? Ty tu rządzisz
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Naucz się chronić siebie i swoich znajomych przed fałszywymi linkami, oszustami i cyfrowymi zagrożeniami. Wszystko poprzez krótkie scenariusze i zabawę.
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
            className="bg-white text-blue-700 hover:bg-gray-100 py-3 px-6 rounded-lg font-semibold text-lg"
          >
            Jestem już zalogowany
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left text-sm">
          <div className="bg-purple-700/80 p-5 rounded-xl">
            <p className="text-lg font-bold mb-1">🧠 Wiedza się liczy</p>
            <p>Dowiedz się, jak rozpoznać pułapki i unikać niebezpiecznych sytuacji.</p>
          </div>
          <div className="bg-indigo-700/80 p-5 rounded-xl">
            <p className="text-lg font-bold mb-1">🎮 Graj – ucz się</p>
            <p>Scenariusze z życia nastolatka w sieci. Decyduj, analizuj, ucz się.</p>
          </div>
          <div className="bg-blue-800/80 p-5 rounded-xl">
            <p className="text-lg font-bold mb-1">🏅 Zdobywaj odznaki</p>
            <p>Każdy scenariusz to krok do zostania mistrzem cyberbezpieczeństwa.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
