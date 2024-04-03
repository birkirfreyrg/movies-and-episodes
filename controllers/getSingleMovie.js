export default async function getMovie(id) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  try {
    const response = await fetch(`${apiUrl}/movies/${id}`, {
      cache: "no-store",
    });
    const movies = await response.json();
    return movies.data;
  } catch (error) {
    console.log(error);
  }
}
