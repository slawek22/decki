import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="font-sans">
      <header className="bg-black text-white p-6">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Decure</h1>
          <nav className="space-x-4">
            <a href="#benefits" className="hover:underline">Dlaczego Decure?</a>
            <a href="#courses" className="hover:underline">Szkolenia</a>
            <a href="#pricing" className="hover:underline">Cennik</a>
          </nav>
        </div>
      </header>

      <section className="bg-gray-100 text-center py-20">
        <h2 className="text-4xl font-bold mb-4">Zadbaj o swoje cyberbezpieczeństwo</h2>
        <p className="text-lg mb-6">Szkolenia online. Praktyczne scenariusze. Certyfikat. Dostęp 24/7.</p>
        <Link to="/register" className="bg-blue-600 text-white px-6 py-3 rounded text-lg hover:bg-blue-700">Rozpocznij naukę</Link>
      </section>

      <section id="benefits" className="max-w-5xl mx-auto py-16">
        <h3 className="text-2xl font-semibold mb-6">Dlaczego warto?</h3>
        <ul className="grid md:grid-cols-2 gap-6 text-lg list-disc list-inside">
          <li>Realne zagrożenia w bezpiecznym środowisku</li>
          <li>Szkolenia tworzone przez ekspertów</li>
          <li>Dostępne na komputerze i telefonie</li>
          <li>Wersja darmowa oraz rozszerzona</li>
        </ul>
      </section>

      <section id="courses" className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6">Przykładowe szkolenia</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="p-4 bg-white shadow rounded">
              <h4 className="text-xl font-bold">Phishing w praktyce</h4>
              <p>Rozpoznawanie i reagowanie na próby wyłudzeń.</p>
            </div>
            <div className="p-4 bg-white shadow rounded">
              <h4 className="text-xl font-bold">Bezpieczne hasła i MFA</h4>
              <p>Tworzenie silnych haseł i ochrona konta.</p>
            </div>
            <div className="p-4 bg-white shadow rounded">
              <h4 className="text-xl font-bold">Reagowanie na incydenty</h4>
              <p>Co robić, gdy już coś się stało?</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="max-w-5xl mx-auto py-16 text-center">
        <h3 className="text-2xl font-semibold mb-6">Dostęp do szkoleń</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded p-6">
            <h4 className="text-xl font-bold mb-2">Darmowy dostęp</h4>
            <p className="mb-4">Dostęp do kilku scenariuszy i materiałów.</p>
            <Link to="/register" className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800">Rozpocznij za darmo</Link>
          </div>
          <div className="border rounded p-6 border-blue-600">
            <h4 className="text-xl font-bold mb-2">Pełny dostęp</h4>
            <p className="mb-4">Wszystkie szkolenia + certyfikat + dostęp do nowych scenariuszy.</p>
            <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Wybierz plan</Link>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white p-6 text-center text-sm">
        &copy; {new Date().getFullYear()} Decure – Cyberbezpieczeństwo. Wszelkie prawa zastrzeżone.
      </footer>
    </div>
  );
}
