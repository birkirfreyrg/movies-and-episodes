export default async function getMovie(id) {
  try {
    const response = await fetch(
      `https://movies-and-episodes.vercel.app/api/movies/${id}`,
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
