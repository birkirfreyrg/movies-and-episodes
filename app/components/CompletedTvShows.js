import getTvShows from "@/controllers/getTvShows";
import CardContainer from "./CardContainer";
import ShowList from "./ShowList";

export default async function CompletedTvShows() {
  const tvShows = await getTvShows();

  return (
    <>
      <CardContainer title="Completed Tv Shows">
        <ShowList
          data={tvShows}
          watchStatusDisplay={"completed"}
          selectedCategory={"tvshows"}
        />
      </CardContainer>
    </>
  );
}
