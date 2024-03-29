import getMovies from "../../controllers/getMovies";
import CardContainer from "./CardContainer";
import ShowList from "./ShowList";

export default async function AddItem() {
  const movies = await getMovies();

  return (
    <>
      <CardContainer title="Watchlist Movies">
        <ShowList data={movies} />
      </CardContainer>
    </>
  );
}
