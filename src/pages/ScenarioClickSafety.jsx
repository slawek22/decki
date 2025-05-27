import React, { useState } from "react";
import { CheckCircle, AlertCircle, ShieldCheck, Lightbulb } from "lucide-react";

export default function ScenarioClickSafety() {
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");

  const handleChoice = (choice) => {
    setSelected(choice);
    switch (choice) {
      case 1:
        setFeedback("\u274C Ups! To był fałszywy link. W przyszłości sprawdzaj, zanim klikniesz.");
        break;
      case 2:
        setFeedback("\uD83D\uDD75\uFE0F Dobrze! Sprawdzenie linku to bardzo dobry nawyk.");
        break;
      case 3:
        setFeedback("\uD83D\uDEAB Super, że się zatrzymałeś! To była pu\u0142apka phishingowa.");
        break;
      case 4:
        setFeedback("\uD83D\uDC64 Brawo! Pytanie rodzica lub zg\u0142oszenie to odpowiedzialne zachowanie.");
        break;
      default:
        setFeedback("");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8 mt-10">
      <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">
        <Lightbulb className="text-yellow-500" /> Scenariusz: "Klikam, ale czy to bezpieczne?"
      </h2>

      <p className="mb-6 text-gray-700">
        Jesteś w pokoju i grasz w swoją ulubioną grę online. Nagle wyskakuje okienko:
        <br />
        <em className="block text-lg mt-2">"Kliknij tutaj i zdobądź darmowe skiny!"</em>
        <br />
        Albo wiadomość od nieznajomego na Discordzie:
        <em className="block text-lg mt-2">"Hej, nowa wersja gry, kliknij zanim zniknie!"</em>
      </p>

      <div className="space-y-4">
        <button
          onClick={() => handleChoice(1)}
          className={`w-full px-4 py-3 rounded-lg border text-left transition ${
            selected === 1 ? "bg-red-100 border-red-500" : "hover:bg-gray-100 border-gray-300"
          }`}
        >
          🔗 Klikam, bo przecież wszyscy klikają
        </button>

        <button
          onClick={() => handleChoice(2)}
          className={`w-full px-4 py-3 rounded-lg border text-left transition ${
            selected === 2 ? "bg-yellow-100 border-yellow-500" : "hover:bg-gray-100 border-gray-300"
          }`}
        >
          🔍 Najpierw sprawdzam link – gdzie prowadzi
        </button>

        <button
          onClick={() => handleChoice(3)}
          className={`w-full px-4 py-3 rounded-lg border text-left transition ${
            selected === 3 ? "bg-green-100 border-green-500" : "hover:bg-gray-100 border-gray-300"
          }`}
        >
          🧠 Ignoruję – coś mi tu śmierdzi
        </button>

        <button
          onClick={() => handleChoice(4)}
          className={`w-full px-4 py-3 rounded-lg border text-left transition ${
            selected === 4 ? "bg-blue-100 border-blue-500" : "hover:bg-gray-100 border-gray-300"
          }`}
        >
          📷 Pytam rodzica albo robię screenshota i zgłaszam
        </button>
      </div>

      {feedback && (
        <div className="mt-6 p-4 bg-indigo-50 border border-indigo-300 rounded-lg text-indigo-800">
          {feedback}
        </div>
      )}

      {selected && (
        <div className="mt-8 flex items-center gap-3 text-green-700">
          <ShieldCheck />
          <span>Zdobywasz odznakę: <strong>Ochroniarz Klików 🛡</strong></span>
        </div>
      )}
    </div>
  );
}
