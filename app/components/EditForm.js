"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

export default function EditForm({ onCancel, data }) {
  const [newTitle, setNewTitle] = useState(data.title || "");
  const [newDescription, setNewDescription] = useState(data.description || "");
  const [newImageUrl, setNewImageUrl] = useState(data.imageUrl || "");
  const [newWatchStatus, setNewWatchStatus] = useState(data.watchStatus || "");
  const [newCategory, setNewCategory] = useState(data.category || "");
  const [newRating, setNewRating] = useState(data.rating !== undefined && data.rating !== null ? data.rating.toString() : "");
  const router = useRouter();
  let pathname = usePathname();
  
  // Determine if this is a movie or TV show based on pathname
  const isMovie = pathname.includes('/movies/');
  const isTvShow = pathname.includes('/tvshows/');

  function handleStatusChange(e) {
    e.stopPropagation();
    setNewWatchStatus(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    // Validate input (you can add more validation if needed)

    // Create a new card object
    // Note: category is not included as it cannot be changed
    const newCard = {
      newTitle,
      newDescription,
      newImageUrl,
      newWatchStatus,
      newRating: newRating ? parseFloat(newRating) : undefined,
    };

    // Add the new card to the list
    //onAddCard(newCard);
    const response = await fetch(
      `/api${pathname}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCard),
      }
    );
    if (response.status === 200 || response.status === 201) {
      // Determine redirect based on current pathname
      if (pathname.includes('/tvshows/')) {
        router.push(`/tvshows`);
        router.refresh();
      } else if (pathname.includes('/movies/')) {
        router.push(`/movies`);
        router.refresh();
      } else {
        // Fallback to category if pathname doesn't match
        if (newCategory === "tv-shows") {
          router.push(`/tvshows`);
          router.refresh();
        } else {
          router.push(`/movies`);
          router.refresh();
        }
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="color-background border-stone brightness-75 bg-opacity-90 p-4 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4 text-white">Edit</h2>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-white"
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
          className="block mt-4 text-sm font-medium text-white"
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
          htmlFor="rating"
          className="block mt-4 text-sm font-medium text-white"
        >
          Rating (0-10):
          <input
            type="number"
            min="0"
            max="10"
            step="any"
            placeholder="Enter rating (0-10)"
            className="mt-1 p-2 w-full border rounded text-black"
            onChange={(e) => setNewRating(e.target.value)}
            value={newRating}
          />
        </label>
        <label
          htmlFor="watchStatusSelect"
          className="block mt-4 text-sm font-medium text-white"
        >
          Status:
          <select
            placeholder="in-progress, watchlist or completed"
            className="mt-1 p-2 w-full border rounded text-black"
            onChange={handleStatusChange}
            value={newWatchStatus}
          >
            {!isMovie && <option value="in-progress">In Progress</option>}
            <option value="watchlist">Watchlist</option>
            <option value="completed">Completed</option>
          </select>
        </label>
        <div className="flex justify-end mt-4">
          <button
            className="text-black bg-white px-4 py-2 rounded"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="bg-white text-black px-4 py-2 ml-2 rounded"
            type="submit"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
