"use client";

import React, { useState } from "react";
import ConfirmDelete from "./ConfirmDelete";

export default function DeleteButton({ id, onDeleteClick }) {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const handleClick = () => {
    setShowConfirmDelete(true);
  };

  const handleConfirmDelete = () => {
    onDeleteClick(id);
    setShowConfirmDelete(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmDelete(false);
  };

  return (
    <div className="flex justify-end">
      <button
        className="absolute inline-block text-white-500 dark:text-white-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
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
