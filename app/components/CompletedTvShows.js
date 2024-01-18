import getTvShows from "@/controllers/getTvShows";
import CardContainer from "./CardContainer";
import ShowList from "./ShowList";

export default async function CompletedTvShows() {
  const tvShows = await getTvShows();
  const completedTvShows = [
    {
      id: 1,
      title: "Star Wars Rebels",
      description:
        "A brave and clever ragtag starship crew stands up against the evil Empire as it tightens its grip on the galaxy and hunts down the last of the Jedi Knights.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BY2Q1ZTAzNzMtMzlmNy00NjdjLThhYjgtMzgxN2ZkYmFhMDIwXkEyXkFqcGdeQXVyMjg5NDMwMQ@@._V1_.jpg",
    },
  ];

  return (
    <>
      <CardContainer title="Completed Tv Shows">
        <ShowList data={tvShows} watchStatusDisplay={"completed"} />
      </CardContainer>
    </>
  );
}
