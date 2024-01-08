import React, { useState } from "react";

export default function AddCardForm({ onAddCard, onCancel }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleAddClick = () => {
    // Validate input (you can add more validation if needed)

    // Create a new card object
    const newCard = {
      id: Date.now(),
      title,
      description,
      imageUrl,
    };

    // Add the new card to the list
    onAddCard(newCard);

    // Clear the form fields
    setTitle("");
    setDescription("");
    setImageUrl("");
  };

  return (
    <div className="bg-gray-800 bg-opacity-90 p-4 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Add New</h2>
      <label
        htmlFor="title"
        className="block text-sm font-medium text-white-700"
      >
        Title:
        <input
          type="text"
          id="title"
          className="mt-1 p-2 w-full border rounded text-black"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label
        htmlFor="description"
        className="block mt-4 text-sm font-medium text-white"
      >
        Description:
        <textarea
          id="description"
          className="mt-1 p-2 w-full border rounded text-black"
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label
        htmlFor="imageUrl"
        className="block mt-4 text-sm font-medium text-white-700"
      >
        Image URL:
        <input
          type="text"
          id="imageUrl"
          className="mt-1 p-2 w-full border rounded text-black"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </label>
      <div className="flex justify-end mt-4">
        <button
          className="bg-white text-black px-4 py-2 mr-2 rounded"
          onClick={handleAddClick}
        >
          Add
        </button>
        <button
          className="text-black bg-white px-4 py-2 rounded"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
