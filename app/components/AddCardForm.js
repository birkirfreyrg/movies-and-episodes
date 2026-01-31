"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";

export default function AddTvShowForm({ onCancel, watchStatusDisplay }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [watchStatus, setWatchStatus] = useState("");
  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const searchInputRef = useRef(null);
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

  // Auto-focus the search input when the form opens
  useEffect(() => {
    // Small delay to ensure the DOM is fully rendered, especially for modal overlays
    const timer = setTimeout(() => {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this runs once when component mounts

  function handleStatusChange(e) {
    setWatchStatus(e.target.value);
  }

  // TMDB Search functionality
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setSearchLoading(true);
    try {
      const searchType = pathname === "/movies" ? "movie" : "tv";
      const response = await fetch(`/api/tmdb?query=${encodeURIComponent(searchQuery)}&type=${searchType}&page=1`);
      const data = await response.json();

      if (response.ok) {
        setSearchResults(data.results.slice(0, 10)); // Show first 10 results
        setShowSearchResults(true);
      }
    } catch (err) {
      console.error('Search error:', err);
    } finally {
      setSearchLoading(false);
    }
  };

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
    setTitle(movie.title || movie.name);
    setDescription(movie.overview);
    setImageUrl(movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "/tempPhoto.webp");
    setShowSearchResults(false);
    setSearchQuery("");
  };

  const clearSelection = () => {
    setSelectedMovie(null);
    setTitle("");
    setDescription("");
    setImageUrl("");
  };

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
      `/api${pathname}`,
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
      <div className="color-background border-stone brightness-75 bg-opacity-90 p-4 rounded shadow-md max-w-2xl">
        <h2 className="text-xl font-bold mb-4">Add New {pathname === "/movies" ? "Movie" : "TV Show"}</h2>
        
        {/* Search Section */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-white mb-2">
            Search for {pathname === "/movies" ? "Movie" : "TV Show"}:
          </label>
          <div className="flex gap-2">
            <input
              ref={searchInputRef}
              type="text"
              placeholder={`Search ${pathname === "/movies" ? "movies" : "TV shows"}...`}
              className="flex-1 p-2 border rounded text-black"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSearch(e);
                }
              }}
            />
            <button
              type="button"
              onClick={handleSearch}
              disabled={searchLoading || !searchQuery.trim()}
              className="px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-600 disabled:bg-gray-500"
            >
              {searchLoading ? "Searching..." : "Search"}
            </button>
          </div>
        </div>

        {/* Search Results */}
        {showSearchResults && (
          <div className="mb-4 max-h-60 overflow-y-auto border rounded bg-white">
            {searchResults.map((movie) => (
              <div
                key={movie.id}
                className="p-3 border-b cursor-pointer hover:bg-gray-100 flex gap-3"
                onClick={() => handleMovieSelect(movie)}
              >
                {movie.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                    alt={movie.title || movie.name}
                    className="w-16 h-24 object-cover rounded"
                  />
                )}
                <div className="flex-1">
                  <h4 className="font-semibold text-sm text-black">
                    {movie.title || movie.name}
                  </h4>
                  <p className="text-xs text-gray-600 mb-1">
                    {movie.release_date || movie.first_air_date}
                  </p>
                  <p className="text-xs text-gray-700 line-clamp-2">
                    {movie.overview}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Selected Movie Display */}
        {selectedMovie && (
          <div className="mb-4 p-3 border rounded bg-green-50">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-green-800">Selected:</h3>
              <button
                type="button"
                onClick={clearSelection}
                className="text-red-600 hover:text-red-800 text-sm"
              >
                Clear Selection
              </button>
            </div>
            <div className="flex gap-3">
              {selectedMovie.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w92${selectedMovie.poster_path}`}
                  alt={selectedMovie.title || selectedMovie.name}
                  className="w-16 h-24 object-cover rounded"
                />
              )}
              <div className="flex-1">
                <h4 className="font-semibold text-sm">
                  {selectedMovie.title || selectedMovie.name}
                </h4>
                <p className="text-xs text-gray-600">
                  {selectedMovie.release_date || selectedMovie.first_air_date}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Form Fields */}
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
            required
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
            required
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
            required
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
              handleStatusChange(e);
            }}
            value={watchStatus}
            required
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
            className="text-black bg-white px-4 py-2 rounded"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onCancel();
            }}
          >
            Cancel
          </button>
          <button
            className="bg-white text-black px-4 py-2 ml-2 rounded"
            type="submit"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
