"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/login" })}
      className="bg-black-500 border text-white px-3 py-1.5 rounded hover:bg-white hover:text-black text-xs"
    >
      Logout
    </button>
  );
}
