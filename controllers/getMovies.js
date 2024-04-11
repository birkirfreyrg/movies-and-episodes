export default async function getMovies() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  try {
    const response = await fetch(
      `https://movies-and-episodes.vercel.app/api/movies`,
      {
        cache: "no-store",
      }
    );
    const movies = await response.json();
    return movies.data;
  } catch (error) {
    console.log(error);
  }
}
