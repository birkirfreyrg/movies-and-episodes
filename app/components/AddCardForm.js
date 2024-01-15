"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function AddCardForm({ onCancel }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    // Validate input (you can add more validation if needed)

    // Create a new card object
    const newCard = {
      title,
      description,
      imageUrl,
    };

    // Add the new card to the list
    //onAddCard(newCard);
    const response = await fetch("http://localhost:3000/api/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCard),
    });
    if (response.status == 201) {
      router.refresh();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="color-background border-stone brightness-75 bg-opacity-90 p-4 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Add New</h2>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-white-700"
        >
          Title:
          <input
            type="text"
            placeholder="Enter Title"
            className="mt-1 p-2 w-full border rounded text-black"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label
          htmlFor="description"
          className="block mt-4 text-sm font-medium text-white"
        >
          Description:
          <textarea
            placeholder="Enter Description"
            className="mt-1 p-2 w-full border rounded text-black"
            rows="4"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </label>
        <label
          htmlFor="imageUrl"
          className="block mt-4 text-sm font-medium text-white-700"
        >
          Image URL:
          <input
            type="text"
            placeholder="Enter the Image URL"
            className="mt-1 p-2 w-full border rounded text-black"
            onChange={(e) => setImageUrl(e.target.value)}
            value={imageUrl}
          />
        </label>
        <div className="flex justify-end mt-4">
          <button
            className="bg-white text-black px-4 py-2 mr-2 rounded"
            type="submit"
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
    </form>
  );
}