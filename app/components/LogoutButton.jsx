"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/login" })}
      className="bg-black-500 border  text-white px-4 py-2 rounded hover:bg-white hover:text-black"
    >
      Logout
    </button>
  );
}
