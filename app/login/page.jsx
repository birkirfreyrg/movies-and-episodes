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
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-950 via-zinc-950 to-black text-slate-100 flex items-start md:items-center justify-center px-4 py-6 md:py-0">
      <div className="w-full max-w-6xl grid md:grid-cols-2 items-center gap-8 md:gap-12 py-4 md:py-12">
        {/* Left Side */}
        <div className="hidden md:block">
          <h2 className="text-5xl font-bold mb-6 text-slate-100">🎬 Movies & Episodes</h2>
          <p className="text-slate-400 text-lg">
            Welcome back! Log in to manage your collection of movies, shows, and episodes. Smooth, sleek, and personalized.
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-zinc-900/95 border border-zinc-800 p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

          {error && <p className="text-rose-400 mb-4 text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 bg-zinc-950 text-slate-100 border border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 bg-zinc-950 text-slate-100 border border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full bg-slate-700 hover:bg-slate-600 transition-colors duration-200 text-slate-100 py-2 px-4 rounded font-semibold"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
