
import { useState } from 'react';

export default function ScenarioPasswordSafety() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: 'Najczęstsze błędy użytkowników',
      content: (
        <>
          <ul className="list-disc list-inside space-y-1">
            <li>Używanie tego samego hasła do wielu kont</li>
            <li>Zapisywanie haseł w plikach typu „hasla.txt”</li>
            <li>Udostępnianie haseł innym osobom</li>
            <li>Brak hasła głównego w przeglądarce</li>
          </ul>
          <p className="mt-4 italic">Przykład: Ania używa hasła „Kotek2020” do poczty, banku i Facebooka. Wyciek z jednego serwisu daje przestępcy dostęp do wszystkich.</p>
        </>
      ),
    },
    {
      title: 'Menedżery haseł',
      content: (
        <p>
          Bitwarden, KeePass, 1Password – to aplikacje, które bezpiecznie przechowują Twoje hasła. Zamiast zapamiętywać wszystkie, wystarczy jedno hasło główne. 
          Ułatwiają autouzupełnianie i umożliwiają synchronizację między urządzeniami.
        </p>
      ),
    },
    {
      title: '2FA – Twoja druga tarcza',
      content: (
        <p>
          Uwierzytelnianie dwuskładnikowe (2FA) to dodatkowy poziom zabezpieczeń. Poza hasłem wymagany jest jeszcze kod – z aplikacji (np. Google Authenticator) lub SMS.
          Nawet jeśli ktoś zna Twoje hasło, nie wejdzie bez drugiego składnika.
        </p>
      ),
    },
    {
      title: 'Przechowywanie i odzyskiwanie haseł',
      content: (
        <p>
          Hasła można przechowywać lokalnie (np. w KeePass) lub w chmurze (Bitwarden). Ważne jest robienie kopii zapasowych oraz przygotowanie opcji odzyskiwania,
          np. e-mail zapasowy lub plik odzyskiwania. Nigdy nie zapisuj haseł w plikach typu hasla.txt!
        </p>
      ),
    },
    {
      title: 'Test końcowy',
      content: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold">1. Co to jest hasło główne?</p>
            <p className="text-sm text-gray-600">Hasło do menedżera haseł, które zabezpiecza wszystkie inne hasła.</p>
          </div>
          <div>
            <p className="font-semibold">2. Jak działa aplikacja 2FA?</p>
            <p className="text-sm text-gray-600">Generuje jednorazowe kody, które trzeba wpisać po haśle.</p>
          </div>
          <div>
            <p className="font-semibold">3. Co zrobić, jeśli zgubię dostęp do menedżera haseł?</p>
            <p className="text-sm text-gray-600">Użyć kopii zapasowej lub opcji odzyskiwania (np. e-mail, plik klucza).</p>
          </div>
        </div>
      ),
    }
  ];

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-center text-blue-800">{steps[step].title}</h2>
      <div className="text-base text-gray-700">{steps[step].content}</div>
      <div className="flex justify-between mt-6">
        <button
          onClick={() => setStep(Math.max(0, step - 1))}
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          disabled={step === 0}
        >
          Wstecz
        </button>
        <button
          onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          disabled={step === steps.length - 1}
        >
          Dalej
        </button>
      </div>
    </div>
  );
}
