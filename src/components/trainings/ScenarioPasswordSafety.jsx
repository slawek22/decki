
export default function ScenarioPasswordSafety() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Zarządzanie hasłami na co dzień</h2>
      <section className="mb-6">
        <h3 className="text-xl font-semibold">Najczęstsze błędy użytkowników</h3>
        <ul className="list-disc list-inside">
          <li>Używanie tego samego hasła do wielu kont</li>
          <li>Zapisywanie haseł w plikach typu „hasla.txt”</li>
          <li>Udostępnianie haseł innym osobom</li>
          <li>Brak hasła głównego w przeglądarce</li>
        </ul>
        <p className="mt-2 italic">Przykład: Ania używa hasła „Kotek2020” do poczty, banku i Facebooka. Wyciek z jednego serwisu daje przestępcy dostęp do wszystkich.</p>
      </section>
      <section className="mb-6">
        <h3 className="text-xl font-semibold">Menedżery haseł</h3>
        <p>Bitwarden, KeePass, 1Password – czym są, jak działają, jakie mają funkcje, jak je bezpiecznie skonfigurować.</p>
      </section>
      <section className="mb-6">
        <h3 className="text-xl font-semibold">2FA – Twoja druga tarcza</h3>
        <p>Wyjaśnienie działania dwuskładnikowego uwierzytelniania (2FA) i kiedy warto go używać.</p>
      </section>
      <section className="mb-6">
        <h3 className="text-xl font-semibold">Przechowywanie i odzyskiwanie haseł</h3>
        <p>Różnice między lokalnym i chmurowym przechowywaniem, kopie zapasowe, odzyskiwanie dostępu do menedżera haseł.</p>
      </section>
    </div>
  );
}
