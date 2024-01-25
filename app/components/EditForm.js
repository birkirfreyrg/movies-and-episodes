"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

export default function EditForm({ onCancel, data }) {
  const [newTitle, setNewTitle] = useState(data.title || "");
  const [newDescription, setNewDescription] = useState(data.description || "");
  const [newImageUrl, setNewImageUrl] = useState(data.imageUrl || "");
  const [newWatchStatus, setNewWatchStatus] = useState(data.watchStatus || "");
  const [newCategory, setNewCategory] = useState(data.category || "");
  const router = useRouter();
  let pathname = usePathname();

  function handleStatusChange(e) {
    setNewWatchStatus(e.target.value);
  }

  function handleCategoryChange(e) {
    setNewCategory(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // Validate input (you can add more validation if needed)

    // Create a new card object
    const newCard = {
      newTitle,
      newDescription,
      newImageUrl,
      newWatchStatus,
      newCategory,
    };

    // Add the new card to the list
    //onAddCard(newCard);
    const response = await fetch(`http://localhost:3000/api${pathname}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCard),
    });
    if (response.status == 201) {
      router.refresh();
      onCancel();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="color-background border-stone brightness-75 bg-opacity-90 p-4 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Edit</h2>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-white-700"
        >
          Title:
          <input
            type="text"
            placeholder="Enter New Title"
            className="mt-1 p-2 w-full border rounded text-black"
            onChange={(e) => setNewTitle(e.target.value)}
            value={newTitle}
          />
        </label>
        <label
          htmlFor="description"
          className="block mt-4 text-sm font-medium text-white"
        >
          Description:
          <textarea
            placeholder="Enter New Description"
            className="mt-1 p-2 w-full border rounded text-black"
            rows="4"
            onChange={(e) => setNewDescription(e.target.value)}
            value={newDescription}
          />
        </label>
        <label
          htmlFor="imageUrl"
          className="block mt-4 text-sm font-medium text-white-700"
        >
          Image URL:
          <input
            type="text"
            placeholder="Enter New Image URL"
            className="mt-1 p-2 w-full border rounded text-black"
            onChange={(e) => setNewImageUrl(e.target.value)}
            value={newImageUrl}
          />
        </label>
        <label
          htmlFor="watchStatusSelect"
          className="block mt-4 text-sm font-medium text-white-700"
        >
          Status:
          <select
            placeholder="in-progress, watchlist or completed"
            className="mt-1 p-2 w-full border rounded text-black"
            onChange={handleStatusChange}
            value={newWatchStatus}
          >
            <option value="in-progress">In Progress</option>
            <option value="watchlist">Watchlist</option>
            <option value="completed">Completed</option>
          </select>
        </label>
        <label
          htmlFor="categorySelect"
          className="block mt-4 text-sm font-medium text-white-700"
        >
          Category:
          <select
            placeholder="movies or tv-shows"
            className="mt-1 p-2 w-full border rounded text-black"
            onChange={handleCategoryChange}
            value={newCategory === "" ? "" : newCategory}
          >
            <option value="" disabled hidden>
              Select a category
            </option>
            <option value="movies">Movies</option>
            <option value="tv-shows">Tv-Shows</option>
          </select>
        </label>
        <div className="flex justify-end mt-4">
          <button
            className="bg-white text-black px-4 py-2 mr-2 rounded"
            type="submit"
          >
            Edit
          </button>
          <button
            className="text-black bg-white px-4 py-2 rounded"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}
