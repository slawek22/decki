
import React, { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function TrainingDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const resultRef = useRef(null);

  const trainingData = {
    1: {
      title: "Wproowadzenie do cyberbezpieczeństwa",
      content: "To szkolenie wproowadza w podstawy cyberzagrożeń, takich jak malware, ransomware czy phishing.",
      quiz: [
        {
          question: "Co to jest phishing?",
          options: [
            "Atak polegający na podszywaniu się pod zaufaną instytucję",
            "Rodzaj szyfrowania",
            "Program antywirusowy",
            "Bezpieczne połączenie sieciowe"
          ],
          answer: 0
        },
        {
          question: "Co oznacza skrót VPN?",
          options: [
            "Virtual Private Network",
            "Verified Personal Number",
            "Very Private Node",
            "Virtual Protected Network"
          ],
          answer: 0
        },
        {
          question: "Które hasło jest najmocniejsze?",
          options: [
            "123456",
            "password1",
            "T$9k@Lm!7z",
            "admin"
          ],
          answer: 2
        }
      ]
    }
  };

  const training = trainingData[id];
  const [showQuiz, setShowQuiz] = useState(false);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const API = import.meta.env.VITE_API_URL;

  const handleAnswer = (questionIndex, answerIndex) => {
    setAnswers({ ...answers, [questionIndex]: answerIndex });
    setError("");
  };

  const handleCheck = async () => {
    if (Object.keys(answers).length !== training.quiz.length) {
      setError("Zaznacz odpowiedzi na wszystkie pytania.");
      return;
    }

    const correctAnswers = training.quiz.reduce((acc, q, index) => {
      return acc + (answers[index] === q.answer ? 1 : 0);
    }, 0);

    setResult(correctAnswers);

    // zapisz do localStorage
    localStorage.setItem(`training-${id}-result`, correctAnswers);

    // zapisz do backendu
    const email = localStorage.getItem("email");
    try {
      await fetch(`${API}/api/quiz/result`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          trainingId: Number(id),
          score: correctAnswers
        }),
      });
    } catch (err) {
      console.error("Błąd zapisu wyniku:", err);
    }

    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  if (!training) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold mb-4">Nie znaleziono szkolenia</h2>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => navigate("/dashboard")}
        >
          Wróć do dashboardu
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="bg-white max-w-3xl w-full p-8 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-4">{training.title}</h1>
        <p className="text-gray-700 mb-6">{training.content}</p>

        {!showQuiz && (
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            onClick={() => setShowQuiz(true)}
          >
            Rozpocznij quiz
          </button>
        )}

        {showQuiz && (
          <div className="space-y-6">
            {training.quiz.map((q, idx) => (
              <div key={idx}>
                <h3 className="font-semibold mb-2">{q.question}</h3>
                <div className="space-y-1">
                  {q.options.map((opt, i) => (
                    <label key={i} className="block">
                      <input
                        type="radio"
                        name={`question-${idx}`}
                        value={i}
                        checked={answers[idx] === i}
                        onChange={() => handleAnswer(idx, i)}
                        className="mr-2"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
            ))}

            {error && (
              <p className="text-red-600 font-medium mt-2">{error}</p>
            )}

            {result === null ? (
              <button
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                onClick={handleCheck}
              >
                Sprawdź odpowiedzi
              </button>
            ) : (
              <div ref={resultRef} className="text-center">
                <p className="text-xl font-semibold text-green-700 mb-4 mt-6">
                  Twój wynik: {result} / {training.quiz.length}
                </p>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  onClick={() => navigate("/dashboard")}
                >
                  Zakończ szkolenie
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
