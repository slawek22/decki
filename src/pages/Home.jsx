import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-4">
      <h1 className="text-3xl font-bold">Decure Cyber Training</h1>
      <Link to="/login" className="text-blue-600 underline">Login</Link>
      <Link to="/register" className="text-blue-600 underline">Register</Link>
    </div>
  );
}
