import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import TrainingDetails from "./pages/TrainingDetails";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
	<Route path="/dashboard" element={<Dashboard />} />
<Route path="/training/:id" element={<TrainingDetails />} />
      </Routes>
    </Router>
  );
}

export default App;