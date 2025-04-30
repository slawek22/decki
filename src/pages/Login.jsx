import React from "react";

export default function Login() {
  return (
    <div className="p-4 max-w-md mx-auto mt-20">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form className="flex flex-col gap-4">
        <input type="email" placeholder="Email" className="border p-2 rounded" />
        <input type="password" placeholder="Password" className="border p-2 rounded" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}
