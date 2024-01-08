import React from "react";

export default function AddButtonCard({ onClick }) {
  return (
    <div
      className="border h-56 flex w-2/5 rounded overflow-hidden shadow-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
      onClick={onClick}
    >
      <div className="flex-grow flex items-center justify-center">
        <span className="text-5xl font-bold">+</span>
      </div>
    </div>
  );
}
