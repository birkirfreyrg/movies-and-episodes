export default async function getMovies() {
  // Get base URL - remove /api suffix if present, we'll add it back
  let baseUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!baseUrl) {
    baseUrl = process.env.NODE_ENV === 'development' 
      ? 'http://localhost:3000' 
      : 'https://movies-and-episodes.vercel.app';
  }
  // Remove trailing /api if present
  baseUrl = baseUrl.replace(/\/api$/, '');
  
  try {
    const response = await fetch(`${baseUrl}/api/movies`, {
      cache: "no-store",
    });
    const movies = await response.json();
    return movies.data;
  } catch (error) {
    console.log(error);
  }
}
