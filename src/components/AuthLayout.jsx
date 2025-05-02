import background from "../assets/background-login.jpg";

export default function AuthLayout({ children, title }) {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="bg-black/70 p-8 rounded-xl w-full max-w-md text-white text-center">
        <h2 className="text-2xl font-semibold mb-6">{title}</h2>
        {children}
      </div>
    </div>
  );
}
