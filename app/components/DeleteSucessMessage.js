"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function DeleteSuccessMessage() {
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, [router]);

  return (
    <div className="flex flex-wrap justify-center items-center w-full h-screen flex-col">
      <h2 className="text-3xl font-bold mb-4">Delete Successful!</h2>
      <Link href="/">
        <div className="flex justify-center items-center">
          <button className="inline-block bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-500 hover:text-white transition duration-300 ease-in-out focus:outline-none focus:shadow-outline">
            Continue
          </button>
        </div>
      </Link>
    </div>
  );
}
