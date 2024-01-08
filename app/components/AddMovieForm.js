import React, { useState } from "react";

export default function AddMovieForm({ onAddMovie, onCancel }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleAddClick = () => {
    // Validate input (you can add more validation if needed)

    // Create a new movie object
    const newMovie = {
      id: Date.now(), // You can use a better method to generate unique IDs
      title,
      description,
      imageUrl,
    };

    // Add the new movie to the list
    onAddMovie(newMovie);

    // Clear the form fields
    setTitle("");
    setDescription("");
    setImageUrl("");
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Add New Movie</h2>
      <label
        htmlFor="title"
        className="block text-sm font-medium text-gray-700"
      >
        Title:
        <input
          type="text"
          id="title"
          className="mt-1 p-2 w-full border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label
        htmlFor="description"
        className="block mt-4 text-sm font-medium text-gray-700"
      >
        Description:
        <textarea
          id="description"
          className="mt-1 p-2 w-full border rounded"
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label
        htmlFor="imageUrl"
        className="block mt-4 text-sm font-medium text-gray-700"
      >
        Image URL:
        <input
          type="text"
          id="imageUrl"
          className="mt-1 p-2 w-full border rounded"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </label>
      <div className="flex justify-end mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 mr-2 rounded"
          onClick={handleAddClick}
        >
          Add
        </button>
        <button className="text-gray-500 px-4 py-2 rounded" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}
