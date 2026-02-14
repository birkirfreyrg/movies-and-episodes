"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";

export default function AddTvShowForm({ onCancel, watchStatusDisplay }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [watchStatus, setWatchStatus] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
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
    setRating(movie.vote_average || "");
    setShowSearchResults(false);
    setSearchQuery("");
  };

  const clearSelection = () => {
    setSelectedMovie(null);
    setTitle("");
    setDescription("");
    setImageUrl("");
    setRating("");
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
      rating: rating ? parseFloat(rating) : undefined,
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
      <div className="w-full max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-950/95 p-5 md:p-6 shadow-2xl">
        <h2 className="mb-5 text-xl font-bold text-zinc-100">Add New {pathname === "/movies" ? "Movie" : "TV Show"}</h2>
        
        {/* Search Section */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-zinc-200">
            Search for {pathname === "/movies" ? "Movie" : "TV Show"}:
          </label>
          <div className="flex gap-2">
            <input
              ref={searchInputRef}
              type="text"
              placeholder={`Search ${pathname === "/movies" ? "movies" : "TV shows"}...`}
              className="flex-1 rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500"
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
              className="rounded-md bg-zinc-700 px-4 py-2 text-zinc-100 transition-colors hover:bg-zinc-600 disabled:cursor-not-allowed disabled:bg-zinc-800 disabled:text-zinc-500"
            >
              {searchLoading ? "Searching..." : "Search"}
            </button>
          </div>
        </div>

        {/* Search Results */}
        {showSearchResults && (
          <div className="mb-4 max-h-60 overflow-y-auto rounded-md border border-zinc-700 bg-zinc-900/80">
            {searchResults.map((movie) => (
              <div
                key={movie.id}
                className="flex cursor-pointer gap-3 border-b border-zinc-800 p-3 hover:bg-zinc-800"
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
                  <h4 className="text-sm font-semibold text-zinc-100">
                    {movie.title || movie.name}
                  </h4>
                  <p className="mb-1 text-xs text-zinc-400">
                    {movie.release_date || movie.first_air_date}
                  </p>
                  {movie.vote_average && (
                    <p className="mb-1 text-xs font-semibold text-amber-400">
                      ⭐ {movie.vote_average.toFixed(1)}/10
                    </p>
                  )}
                  <p className="line-clamp-2 text-xs text-zinc-300">
                    {movie.overview}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Selected Movie Display */}
        {selectedMovie && (
          <div className="mb-4 rounded-md border border-zinc-700 bg-zinc-900 p-3">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-zinc-100">Selected</h3>
              <button
                type="button"
                onClick={clearSelection}
                className="text-sm text-rose-400 hover:text-rose-300"
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
                <h4 className="text-sm font-semibold text-zinc-100">
                  {selectedMovie.title || selectedMovie.name}
                </h4>
                <p className="text-xs text-zinc-400">
                  {selectedMovie.release_date || selectedMovie.first_air_date}
                </p>
                {selectedMovie.vote_average && (
                  <p className="mt-1 text-xs font-semibold text-amber-400">
                    ⭐ {selectedMovie.vote_average.toFixed(1)}/10
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Form Fields */}
        <label
          htmlFor="title"
          className="block text-sm font-medium text-zinc-200"
        >
          Title:
          <input
            type="text"
            placeholder="Enter Title"
            className="mt-1 w-full rounded-md border border-zinc-700 bg-zinc-900 p-2 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500"
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
          className="mt-4 block text-sm font-medium text-zinc-200"
        >
          Description:
          <textarea
            placeholder="Enter Description"
            className="mt-1 w-full rounded-md border border-zinc-700 bg-zinc-900 p-2 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500"
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
          className="mt-4 block text-sm font-medium text-zinc-200"
        >
          Image URL:
          <input
            type="text"
            placeholder="Enter the Image URL"
            className="mt-1 w-full rounded-md border border-zinc-700 bg-zinc-900 p-2 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500"
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
          className="mt-4 block text-sm font-medium text-zinc-200"
        >
          Status:
          <select
            placeholder="in-progress, watchlist or completed"
            className="mt-1 w-full rounded-md border border-zinc-700 bg-zinc-900 p-2 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-500"
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
            className="rounded-md border border-zinc-600 bg-transparent px-4 py-2 text-zinc-200 transition-colors hover:bg-zinc-800"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onCancel();
            }}
          >
            Cancel
          </button>
          <button
            className="ml-2 rounded-md bg-zinc-300 px-4 py-2 text-zinc-900 transition-colors hover:bg-zinc-200"
            type="submit"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
