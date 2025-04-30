import React from "react";

export default function Register() {
  return (
    <div className="p-4 max-w-md mx-auto mt-20">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Name" className="border p-2 rounded" />
        <input type="email" placeholder="Email" className="border p-2 rounded" />
        <input type="password" placeholder="Password" className="border p-2 rounded" />
        <button type="submit" className="bg-green-500 text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
}
