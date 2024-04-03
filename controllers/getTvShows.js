export default async function getTvShows() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  try {
    const response = await fetch(`${apiUrl}/tvshows`, {
      cache: "no-store",
    });
    const tvShows = await response.json();
    return tvShows.data;
  } catch (error) {
    console.log(error);
  }
}
