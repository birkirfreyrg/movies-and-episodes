import React from "react";

export default function ConfirmDelete({ onCancel, onConfirm }) {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-md shadow-md">
        <p className="text-lg text-white font-semibold mb-4">
          Are you sure you want to delete?
        </p>
        <div className="flex gap-2 justify-end">
          <button
            className="px-4 py-2 text-white bg-red-500 dark:bg-red-600 rounded-md"
            onClick={onConfirm}
          >
            Yes
          </button>
          <button
            className="mr-2 px-4 py-2 text-white bg-gray-500 dark:bg-gray-600 rounded-md"
            onClick={onCancel}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
