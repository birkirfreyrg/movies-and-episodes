export default async function getTvShow(id) {
  try {
    const response = await fetch(`http://localhost:3000/api/tvshows/${id}`, {
      cache: "no-store",
    });
    const tvShows = await response.json();
    return tvShows.data;
  } catch (error) {
    console.log(error);
  }
}
