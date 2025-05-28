import React, { useState } from "react";
import { KeyRound, ThumbsUp, ThumbsDown, ShieldCheck } from "lucide-react";

export default function ScenarioPasswordSafety() {
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");

  const handleChoice = (choice) => {
    setSelected(choice);
    switch (choice) {
      case 1:
        setFeedback("\u274C Niestety, 123456 to jedno z najgorszych możliwych haseł. Łatwe do złamania!");
        break;
      case 2:
        setFeedback("\uD83D\uDC4E Zbyt krótkie. Hasło powinno mieć minimum 12 znaków i być unikalne.");
        break;
      case 3:
        setFeedback("\uD83D\uDC4D Dobra robota! To mocne, długie i unikalne hasło.");
        break;
      case 4:
        setFeedback("\uD83D\uDEAB Nie używaj tego samego hasła wszędzie. To ogromne ryzyko!");
        break;
      default:
        setFeedback("");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8 mt-10">
      <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">
        <KeyRound className="text-purple-500" /> Scenariusz: "Czy moje hasło jest OK?"
      </h2>

      <p className="mb-6 text-gray-700">
        Wyobraź sobie, że zakładasz konto w nowej grze online. System prosi Cię o stworzenie hasła. Co wybierasz?
      </p>

      <div className="space-y-4">
        <button
          onClick={() => handleChoice(1)}
          className={`w-full px-4 py-3 rounded-lg border text-left transition ${
            selected === 1 ? "bg-red-100 border-red-500" : "hover:bg-gray-100 border-gray-300"
          }`}
        >
          🔢 123456
        </button>

        <button
          onClick={() => handleChoice(2)}
          className={`w-full px-4 py-3 rounded-lg border text-left transition ${
            selected === 2 ? "bg-yellow-100 border-yellow-500" : "hover:bg-gray-100 border-gray-300"
          }`}
        >
          💬 imięTwojegoPsa
        </button>

        <button
          onClick={() => handleChoice(3)}
          className={`w-full px-4 py-3 rounded-lg border text-left transition ${
            selected === 3 ? "bg-green-100 border-green-500" : "hover:bg-gray-100 border-gray-300"
          }`}
        >
          🛡 3B%hJ7!qzL#9x
        </button>

        <button
          onClick={() => handleChoice(4)}
          className={`w-full px-4 py-3 rounded-lg border text-left transition ${
            selected === 4 ? "bg-red-100 border-red-500" : "hover:bg-gray-100 border-gray-300"
          }`}
        >
          🔁 Używam mojego ulubionego hasła z innej strony
        </button>
      </div>

      {feedback && (
        <div className="mt-6 p-4 bg-indigo-50 border border-indigo-300 rounded-lg text-indigo-800">
          {feedback}
        </div>
      )}

      {selected === 3 && (
        <div className="mt-8 flex items-center gap-3 text-green-700">
          <ShieldCheck />
          <span>Zdobywasz odznakę: <strong>Mistrz Hasła 🔐</strong></span>
        </div>
      )}
    </div>
  );
}
