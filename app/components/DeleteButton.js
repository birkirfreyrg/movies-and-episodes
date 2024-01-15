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
    const response = await fetch(`http://localhost:3000/api/movies?id=${id}`, {
      method: "DELETE",
    });
    setShowConfirmDelete(false);
    if (response.status == 200) {
      router.push("/");
      router.refresh();
    }
  }

  const handleCancelDelete = () => {
    setShowConfirmDelete(false);
  };

  return (
    <div>
      <button
        className="bg-red-500 text-white font-bold w-24 h-10 rounded"
        onClick={handleClick}
      >
        Delete
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
