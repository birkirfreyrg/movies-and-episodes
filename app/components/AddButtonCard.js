"use client";
import React, { useState } from "react";
import AddCardForm from "./AddCardForm";
import { usePathname } from "next/navigation";

export default function AddButtonCard({
  additionalClassName,
  watchStatusDisplay,
}) {
  const [showForm, setShowForm] = useState(false);
  const cardClasses = `border-stone h-56 flex w-2/5 overflow-hidden shadow-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${additionalClassName}`;
  const pathname = usePathname();

  function handleCancelAdd() {
    setShowForm(false);
  }

  function handleShowForm() {
    setShowForm(true);
  }

  return (
    <>
      <div className={cardClasses} onClick={handleShowForm}>
        <div className="flex-grow flex items-center justify-center">
          <span className="text-5xl font-bold">+</span>
        </div>
      </div>
      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <AddCardForm
            onCancel={handleCancelAdd}
            watchStatusDisplay={watchStatusDisplay}
          />
        </div>
      )}
    </>
  );
}
