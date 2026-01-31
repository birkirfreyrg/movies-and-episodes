'use client';

import { useState } from 'react';

export default function TMDBTestSearch() {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('movie');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleSearch = async (e, page = 1) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setResults(null);
    setCurrentPage(page);

    try {
      // Calculate which TMDB page to fetch (each TMDB page has 20 results, we show 5 per page)
      const tmdbPage = Math.ceil(page / 4); // 4 pages of 5 results = 1 TMDB page of 20
      const response = await fetch(`/api/tmdb?query=${encodeURIComponent(query)}&type=${type}&page=${tmdbPage}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch data');
      }

      setResults(data);
      // Calculate total pages based on total results (5 per page)
      setTotalPages(Math.min(Math.ceil(data.total_results / 5), 20)); // Max 20 pages
    } catch (err) {
      setError(err.message);
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      handleSearch({ preventDefault: () => {} }, newPage);
    }
  };

  const getCurrentPageResults = () => {
    if (!results) return [];
    
    // Calculate which results to show from the current TMDB page
    const resultsPerPage = 5;
    const tmdbPage = Math.ceil(currentPage / 4);
    const startIndex = ((currentPage - 1) % 4) * resultsPerPage;
    
    return results.results.slice(startIndex, startIndex + resultsPerPage);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4">TMDB API Test Search</h2>
      
      <form onSubmit={handleSearch} className="mb-4">
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for movies or TV shows..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="movie">Movies</option>
            <option value="tv">TV Shows</option>
          </select>
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          Error: {error}
        </div>
      )}

      {results && (
        <div>
          <h3 className="text-lg font-semibold mb-3">
            Search Results ({results.total_results} found) - Page {currentPage} of {totalPages}
          </h3>
          <div className="space-y-4">
            {getCurrentPageResults().map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex gap-4">
                  {item.poster_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                      alt={item.title || item.name}
                      className="w-20 h-30 object-cover rounded"
                    />
                  )}
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">
                      {item.title || item.name}
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      {item.release_date || item.first_air_date}
                    </p>
                    <p className="text-sm text-gray-700 line-clamp-3">
                      {item.overview}
                    </p>
                    <div className="mt-2 flex gap-2">
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
                        Rating: {item.vote_average?.toFixed(1)}/10
                      </span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                        ID: {item.id}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-6 flex justify-center items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1 || loading}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              <div className="flex gap-1">
                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      disabled={loading}
                      className={`px-3 py-2 rounded-md text-sm ${
                        currentPage === pageNum
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      } disabled:cursor-not-allowed`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages || loading}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          )}
          
          <details className="mt-4">
            <summary className="cursor-pointer text-sm text-gray-600 hover:text-gray-800">
              View Raw JSON Response
            </summary>
            <pre className="mt-2 p-4 bg-gray-100 rounded text-xs overflow-auto max-h-96">
              {JSON.stringify(results, null, 2)}
            </pre>
          </details>
        </div>
      )}
    </div>
  );
}
