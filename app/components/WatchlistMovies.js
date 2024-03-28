import getMovies from "@/controllers/getMovies";
import CardContainer from "./CardContainer";
import ShowList from "./ShowList";

export default async function WatchlistMovies() {
  const movies = await getMovies();

  return (
    <>
      <CardContainer title="Watchlist Movies">
        {console.log("data " + movies)}
        <ShowList
          data={movies}
          watchStatusDisplay={"watchlist"}
          selectedCategory={"movies"}
        />
      </CardContainer>
    </>
  );
}
