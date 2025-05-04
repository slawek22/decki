import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("Nieznany");

  const baseTrainings = [
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

  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedEmail = localStorage.getItem("email");
    if (!token || !storedEmail) {
      navigate("/login");
    } else {
      setEmail(storedEmail);
    }

    const updated = baseTrainings.map((training) => {
      const result = localStorage.getItem(`training-${training.id}-result`);
      let status = "dostępne";
      if (result) status = "ukończone";
      return { ...training, status };
    });

    setTrainings(updated);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/login");
  };

  const handleStart = (id, isRepeat = false) => {
    if (isRepeat) {
      localStorage.removeItem(`training-${id}-result`);
    }
    navigate(`/training/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-800">Panel użytkownika</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            <LogOut size={18} /> Wyloguj się
          </button>
        </div>

        <p className="mb-8 text-lg text-gray-700">Zalogowany jako: <strong>{email}</strong></p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Twoje szkolenia</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trainings.map((training) => (
            <div
              key={training.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-blue-700 mb-2">{training.title}</h3>
              <p className="text-gray-600 mb-4">{training.description}</p>
              <span
                className={
                  "inline-block px-3 py-1 text-sm font-medium rounded mb-4 " +
                  (training.status === "ukończone"
                    ? "bg-green-100 text-green-700"
                    : training.status === "w trakcie"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-blue-100 text-blue-700")
                }
              >
                {training.status.toUpperCase()}
              </span>
              <div>
                <button
                  onClick={() =>
                    handleStart(training.id, training.status === "ukończone")
                  }
                  className={
                    "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition w-full"
                  }
                >
                  {training.status === "ukończone"
                    ? "Powtórz szkolenie"
                    : training.status === "w trakcie"
                    ? "Kontynuuj"
                    : "Rozpocznij"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}