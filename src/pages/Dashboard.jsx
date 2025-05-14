
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("Nieznany");

  const trainings = [
    {
      id: 1,
      title: "Wprowadzenie do cyberbezpieczeństwa",
      description: "Poznaj podstawy zagrożeń i ochrony danych."
    },
    {
      id: 2,
      title: "Phishing i socjotechnika",
      description: "Jak rozpoznać i unikać prób wyłudzeń."
    },
    {
      id: 3,
      title: "Zarządzanie hasłami",
      description: "Tworzenie i bezpieczne przechowywanie haseł."
    }
  ];

  const [trainingStatus, setTrainingStatus] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedEmail = localStorage.getItem("email");

    if (!token || !storedEmail) {
      navigate("/login");
    } else {
      setEmail(storedEmail);

      const statuses = trainings.map(t => {
        const result = localStorage.getItem(`training-${t.id}-result`);
        return {
          ...t,
          status: result ? "ukończone" : "dostępne"
        };
      });

      setTrainingStatus(statuses);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/login");
  };

  const handleStart = (id, repeat = false) => {
    if (repeat) {
      localStorage.removeItem(`training-${id}-result`);
    }
    navigate(`/training/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-800">Panel użytkownika</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            <LogOut size={18} /> Wyloguj się
          </button>
        </div>

        <p className="mb-6 text-lg text-gray-700">
          Zalogowany jako: <strong>{email}</strong>
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Twoje szkolenia</h2>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {trainingStatus.map((training) => (
            <div
              key={training.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-blue-800 mb-2">{training.title}</h3>
              <p className="text-gray-600 mb-4">{training.description}</p>

              <span
                className={`inline-block px-3 py-1 text-sm font-medium rounded mb-4 ${
                  training.status === "ukończone"
                    ? "bg-green-100 text-green-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {training.status.toUpperCase()}
              </span>

              <button
                onClick={() => handleStart(training.id, training.status === "ukończone")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full transition"
              >
                {training.status === "ukończone" ? "Powtórz szkolenie" : "Rozpocznij"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
