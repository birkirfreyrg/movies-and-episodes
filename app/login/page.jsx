"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (res.ok) {
      router.push("/");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-950 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 items-center gap-12 py-12">
        {/* Left Side */}
        <div className="hidden md:block">
          <h2 className="text-5xl font-bold mb-6">🎬 Movies & Episodes</h2>
          <p className="text-gray-400 text-lg">
            Welcome back! Log in to manage your collection of movies, shows, and episodes. Smooth, sleek, and personalized.
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-gray-900 p-10 rounded-2xl shadow-2xl w-full max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">🔐 Login</h1>

          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white py-2 px-4 rounded font-semibold"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
