"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function AddTvShowForm({ onCancel, watchStatusDisplay }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [watchStatus, setWatchStatus] = useState("");
  const [category, setCategory] = useState("");
  const router = useRouter();
  let pathname = usePathname();

  // remove this later (testing with "/" for movies)
  if (pathname == "/") pathname = "/movies";

  const handleClick = (e) => {
    // Stop the click event from bubbling up to parent elements
    e.stopPropagation();
  };

  useEffect(() => {
    // Set the default watchStatus based on the watchStatusDisplay prop
    if (pathname === "/movies") {
      setCategory("movies");
    } else {
      setCategory("tv-shows");
    }

    if (watchStatusDisplay === "watchlist") {
      setWatchStatus("watchlist");
    } else if (watchStatusDisplay === "completed") {
      setWatchStatus("completed");
    } else if (watchStatusDisplay === "in-progress") {
      setWatchStatus("in-progress");
    }
  }, [watchStatusDisplay, pathname]);

  function handleStatusChange(e) {
    setWatchStatus(e.target.value);
  }

  function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (e) {
      return false;
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Check if imageUrl is empty
    const finalImageUrl = imageUrl.trim() === "" ? "/tempPhoto.webp" : imageUrl;

    // Create a new card object with the finalImageUrl
    const newCard = {
      title,
      description,
      imageUrl: finalImageUrl,
      watchStatus,
      category,
    };

    // Validate imageUrl only if it is not the default
    if (finalImageUrl !== "/tempPhoto.webp" && !isValidUrl(newCard.imageUrl)) {
      // TODO make a pretty alert component.
      alert("The image URL is invalid. Please provide a valid URL.");
      return; // Stop the submission if the URL is invalid
    }

    // Add the new card to the list
    const response = await fetch(
      `https://movies-and-episodes.vercel.app/api${pathname}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCard),
      }
    );

    if (response.status === 201) {
      router.refresh();
    }
    onCancel();
  }

  return (
    <form onSubmit={handleSubmit} onClick={handleClick}>
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
            onChange={(e) => {
              e.stopPropagation();
              setTitle(e.target.value);
            }}
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
            onChange={(e) => {
              e.stopPropagation();
              setDescription(e.target.value);
            }}
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
            onChange={(e) => {
              e.stopPropagation();
              setImageUrl(e.target.value);
            }}
            value={imageUrl}
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
            onChange={(e) => {
              e.stopPropagation();
              handleStatusChange;
            }}
            value={watchStatus}
          >
            {pathname !== "/movies" && (
              <option value="in-progress">In Progress</option>
            )}

            <option value="watchlist">Watchlist</option>
            <option value="completed">Completed</option>
          </select>
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
            onClick={(e) => {
              e.stopPropagation();
              onCancel();
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}
