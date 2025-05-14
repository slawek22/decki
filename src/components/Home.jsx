import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.svg";
import bgImage from "../assets/background-cyber.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-4 text-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <motion.img
        src={logo}
        alt="Decure logo"
        className="w-20 h-20 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />

      <motion.h1
        className="text-4xl font-bold text-white drop-shadow-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Witaj w Decccure
      </motion.h1>

      <motion.p
        className="mt-4 text-lg text-white/90 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Zadbaj o swoje cyberbezpieczeństwo – praktyczne szkolenia, scenariusze i certyfikaty dostępne 24/7.
      </motion.p>

      <motion.div
        className="mt-8 flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <button
          onClick={() => navigate("/register")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded"
        >
          Zarejestruj się
        </button>
        <button
          onClick={() => navigate("/login")}
          className="bg-white text-blue-600 border border-blue-600 hover:bg-gray-100 px-5 py-2 rounded"
        >
          Zaloguj się
        </button>
      </motion.div>

      <motion.div
        className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="bg-black/40 p-4 rounded-xl">
          <h3 className="text-lg font-semibold">Certyfikat ukończenia</h3>
          <p className="text-sm">Każde szkolenie kończy się oficjalnym certyfikatem PDF.</p>
        </div>
        <div className="bg-black/40 p-4 rounded-xl">
          <h3 className="text-lg font-semibold">Praktyczne scenariusze</h3>
          <p className="text-sm">Uczysz się przez działanie – reagujesz na symulowane incydenty.</p>
        </div>
        <div className="bg-black/40 p-4 rounded-xl">
          <h3 className="text-lg font-semibold">Dostęp 24/7</h3>
          <p className="text-sm">Szkol się wtedy, gdy chcesz – z dowolnego urządzenia.</p>
        </div>
      </motion.div>
    </div>
  );
}
