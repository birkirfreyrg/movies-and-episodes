export default async function getMovie(id) {
  try {
    const response = await fetch(`http://localhost:3000/api/movies/${id}`, {
      cache: "no-store",
    });
    const movies = await response.json();
    return movies.data;
  } catch (error) {
    console.log(error);
  }
}
