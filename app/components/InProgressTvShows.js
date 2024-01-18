import getTvShows from "@/controllers/getTvShows";
import CardContainer from "./CardContainer";
import ShowList from "./ShowList";

export default async function InProgressTvShows() {
  const tvShows = await getTvShows();

  return (
    <>
      <CardContainer title="Tv Shows in Progress">
        <ShowList data={tvShows} watchStatusDisplay={"in-progress"} />
      </CardContainer>
    </>
  );
}
