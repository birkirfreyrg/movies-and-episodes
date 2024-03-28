export default async function getTvShows() {
  try {
    const response = await fetch(
      "https://movies-and-episodes.vercel.app/api/tvshows",
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
