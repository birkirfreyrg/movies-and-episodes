"use client";

import React, { useState } from "react";
import ConfirmDelete from "./ConfirmDelete";
import { useRouter } from "next/navigation";

export default function DeleteButton({ id }) {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setShowConfirmDelete(true);
  };

  async function handleConfirmDelete() {
    await fetch(`http://localhost:3000/api/movies?id=${id}`, {
      method: "DELETE",
    });
    setShowConfirmDelete(false);
    router.refresh();
  }

  const handleCancelDelete = () => {
    setShowConfirmDelete(false);
  };

  return (
    <div className="flex justify-end">
      <button
        className="absolute inline-block text-white-500 dark:text-white-400 hover:bg-gray-100 dark:hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1"
        onClick={handleClick}
      >
        X
      </button>

      {showConfirmDelete && (
        <ConfirmDelete
          onCancel={handleCancelDelete}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
}
