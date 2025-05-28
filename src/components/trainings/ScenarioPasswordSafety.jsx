
import { useState } from 'react';

const steps = [
  {
    title: '1. Najczęstsze błędy użytkowników',
    description: 'Używanie tego samego hasła do wielu kont, zapisywanie ich w plikach tekstowych, brak hasła głównego w przeglądarce.',
    action: 'Mini quiz'
  },
  {
    title: '2. Menedżery haseł',
    description: 'Bitwarden, KeePass, 1Password – jak działają, jak je skonfigurować i dlaczego warto ich używać.',
    action: 'Ćwiczenie'
  },
  {
    title: '3. 2FA – Twoja druga tarcza',
    description: 'Uwierzytelnianie dwuskładnikowe jako dodatkowe zabezpieczenie kont. Aplikacje 2FA i klucze sprzętowe.',
    action: 'Symulacja'
  },
  {
    title: '4. Przechowywanie i odzyskiwanie haseł',
    description: 'Backupy, lokalne i chmurowe przechowywanie, jak odzyskać dostęp w przypadku utraty.',
    action: 'Test końcowy'
  }
];

export default function ScenarioPasswordSafety() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-2">Zarządzanie hasłami</h1>
      <p className="text-center text-gray-600 mb-8">Tworzenie i bezpieczne przechowywanie haseł</p>
      <div className="flex justify-center mb-8 space-x-4">
        {steps.map((_, index) => (
          <div
            key={index}
            className={\`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold \${index <= currentStep ? 'bg-blue-600' : 'bg-gray-300'}\`}
          >
            {index + 1}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-6 border border-gray-200">
            <h2 className="text-lg font-bold text-blue-900 mb-2">{step.title}</h2>
            <p className="text-sm text-gray-700 mb-4">{step.description}</p>
            <button
              onClick={() => setCurrentStep(index)}
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              {step.action}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
