export default async function getTvShow(id) {
  try {
    const response = await fetch(
      `https://movies-and-episodes.vercel.app/api/tvshows/${id}`,
      {
        cache: "no-store",
      }
    );
    const tvShows = await response.json();
    return tvShows.data;
  } catch (error) {
    console.log(error);
  }
}
