import React from "react";

export default function AddButtonCard({ onClick, additionalClassName }) {
  const cardClasses = `border h-56 flex w-2/5 rounded overflow-hidden shadow-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${additionalClassName}`;

  return (
    <div className={cardClasses} onClick={onClick}>
      <div className="flex-grow flex items-center justify-center">
        <span className="text-5xl font-bold">+</span>
      </div>
    </div>
  );
}
