import getTvShows from "@/controllers/getTvShows";
import CardContainer from "./CardContainer";
import ShowList from "./ShowList";

export default async function WatchlistTvShows() {
  const tvShows = await getTvShows();

  return (
    <>
      <CardContainer title="Watchlist Tv Shows">
        <ShowList
          data={tvShows}
          watchStatusDisplay={"watchlist"}
          selectedCategory={"tvshows"}
        />
      </CardContainer>
    </>
  );
}
